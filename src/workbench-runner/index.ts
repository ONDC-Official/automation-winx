import path from "path";
import logger from "@ondc/automation-logger";
import { readFileSync } from "fs";
import { createFakeSession } from "./api-session-faker";
import { RedisService } from "ondc-automation-cache-lib";
import { randomUUID } from "crypto";
import { performL0Validations } from "./L0-validations/schemaValidations";
import reporter from "reporter";
import { loadMockSessionData, saveDataForConfig } from "services/data-services";
import { SessionCache } from "types/api-session-cache";
import { generateMockResponse, getMockActionObject } from "config/mock-config";
import { updateAllJsonPaths } from "utils/json-editor-utils/jsonPathEditor";
import { MockAction } from "config/mock-config/TRV14/classes/mock-action";

// import { performL1Validations } from "./generated/L1-Validations";
export async function runProtocolFlows() {
	logger.info("Starting protocol flow runner...");
	const fakeSession = createFakeSession("transport", "2.0.0", "TRV14");
	const flowIds = Object.keys(fakeSession.flowConfigs);
	const sessionId = "test-session-id";
	RedisService.setKey(sessionId, JSON.stringify(fakeSession));
	logger.info("Fake session created");
	for (const flowId of flowIds) {
		const hasForm = fakeSession.flowConfigs[flowId].sequence.some((step) => {
			return step.type.toLowerCase().includes("form");
		});
		if (hasForm) {
			logger.info(`Skipping flow ${flowId} due to form step`);
			continue;
		}
		let run = true;
		let i = 0;
		while (run) {
			logger.info(`Executing flow ${flowId}, step index ${i}`);
			run = await executeStep(i, sessionId, flowId);
			i++;
		}
	}
}

async function executeStep(index: number, sessionId: string, flowId: string) {
	const session = await RedisService.getKey(sessionId);
	if (!session) {
		throw new Error("Session not found");
	}
	const sessionData = JSON.parse(session) as SessionCache;

	const flowConfig = sessionData.flowConfigs[flowId];
	if (!flowConfig) {
		throw new Error(`Flow with id ${flowId} not found`);
	}

	const current = flowConfig.sequence[index];
	console.log(current);
	if (!current) {
		logger.info(`No more steps in the flow at index ${index}`);
		return false;
	}
	logger.info(`Executing step ${index + 1}: ${current.key}`);

	let txId = randomUUID() as string;
	if (sessionData.flowMap && sessionData.flowMap[flowId])
		txId = sessionData.flowMap[flowId];
	else {
		sessionData.flowMap[flowId] = txId;
		await RedisService.setKey(sessionId, JSON.stringify(sessionData));
	}
	const mockSessionData = await loadMockSessionData(
		txId,
		sessionData.subscriberUrl
	);
	const inputConfig = current.input;
	let input = {
		input_data: {},
		json_path_changes: [],
	};
	if (inputConfig) {
		const mockInputs = loadInputs()["payload_inputs"];
		const flowInputs = mockInputs[flowId];
		if (!flowInputs) {
			throw new Error(`No inputs found for flow ${flowId}`);
		}
		const saved = flowInputs.find((inp: any) => inp.actionId === current.key);
		if (!saved) {
			throw new Error(
				`No input found for action ${current.key} in flow ${flowId}`
			);
		}
		input = saved.mock_input;
	}
	let payload = await generateMockResponse(
		sessionId,
		mockSessionData,
		current.key,
		input.input_data
	);
	if (input.json_path_changes) {
		payload = updateAllJsonPaths(payload, input.json_path_changes);
	}
	const mockAction = getMockActionObject(current.key);
	reporter.flowPayload(flowId, current.key, payload);
	reporter.flowSessionData(flowId, current.key, mockSessionData);
	await runPayloadValidations(mockAction, payload, sessionData);
	const saveConfig = mockAction.saveData;
	await saveDataForConfig(saveConfig, payload);
	return true;
}

async function runPayloadValidations(
	mockAction: MockAction,
	payload: any,
	sessionData: SessionCache
) {
	// run L0 validations
	// run L1 validations
	// run L1-custom validations
	logger.info(`Running validations for action ${mockAction.name}`);
	const action = payload.context.action;
	if (!action) {
		logger.error("Action not found in payload context", { payload: payload });
		throw new Error("Action not found in payload context");
	}

	// L0 Validations
	const l0Result: any = await performL0Validations(payload, action, {});
	if (!l0Result.valid) {
		console.log(l0Result);
		logger.error(
			`L0 Validation failed for action ${mockAction.name()}`,
			l0Result
		);
		reporter.error(`L0 Validation failed for action ${mockAction.name()}`, {
			errors: l0Result.errors,
		});
	}

	// L1 Validations - Dynamic Import
	logger.info("Running L1 validations");
	try {
		const { performL1Validations } = await import(
			"./generated/L1-Validations/index"
		);
		const l1Result = await performL1Validations(action, payload);
		const invalidResults = l1Result.filter((r: any) => r.valid === false);
		if (invalidResults.length > 0) {
			logger.error(
				`L1 Validation failed for action ${mockAction.name()}`,
				invalidResults
			);
			reporter.error(`L1 Validation failed for action ${mockAction.name()}`, {
				errors: invalidResults,
			});
		} else {
			logger.info(`L1 Validation passed for action ${mockAction.name()}`);
		}
	} catch (error) {
		throw new Error("L1 validations module not found");
	}

	// L1 Custom Validations - Dynamic Import
	try {
		const { performL1CustomValidations } = await import(
			"./generated/L1-custom-validations/index"
		);
		const l1Custom = await performL1CustomValidations(
			payload,
			action,
			sessionData.subscriberUrl
		);
		const l1CustomInvalid = l1Custom.filter((r: any) => r.valid === false);
		if (l1CustomInvalid.length > 0) {
			logger.error(
				`L1 Custom Validation failed for action ${mockAction.name()}`,
				l1CustomInvalid
			);
			reporter.error(
				`L1 Custom Validation failed for action ${mockAction.name()}`,
				{
					errors: l1CustomInvalid,
				}
			);
		} else {
			logger.info(
				`L1 Custom Validation passed for action ${mockAction.name()}`
			);
		}
	} catch (error) {
		throw new Error("L1 custom validations module not found");
	}
}

// read flow.yaml
function loadInputs() {
	const rawFile = readFileSync(
		path.resolve(__dirname, "../config/test-config/inputs.json"),
		"utf-8"
	);
	const inputs = JSON.parse(rawFile);
	return inputs;
}
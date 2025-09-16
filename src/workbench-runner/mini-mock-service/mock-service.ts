import { RedisService } from "ondc-automation-cache-lib";
import { SessionCache } from "types/api-session-cache";
import logger from "@ondc/automation-logger";
import { randomUUID } from "crypto";
import {
	loadMockSessionData,
	saveDataForConfig,
} from "./services/data-services";
import { getWorkbenchConfig } from "services/getWorkbenchConfig";
import { generateMockResponse, getMockActionObject } from "config/mock-config";
import { updateAllJsonPaths } from "workbench-runner/mini-mock-service/utils/json-editor-utils/jsonPathEditor";
import reporter from "reporter";
import { getRunnerConfig } from "runner-config-manager";
import { FlowMeta } from "workbench-runner/runner";
export async function runMock(
	index: number,
	sessionId: string,
	flowId: string,
	meta: FlowMeta
) {
	if (getRunnerConfig().runMockService.skipAll == true) {
		logger.warning("Skipping mock service functions");
		reporter.warning("Skipping mock service functions");
		return;
	}
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
	if (!current) {
		return {
			continue: false,
			payload: undefined,
			mockAction: undefined,
		};
	}

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
	let input: any = {
		input_data: {},
		json_path_changes: {},
	};
	if (inputConfig) {
		const mockInputs = (await getWorkbenchConfig("testConfig")).payload_inputs;
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
		for (const config of inputConfig) {
			if (config.payloadField) {
				const given = saved.input_data[config.name];
				if (!given) {
					throw new Error(
						`No mock input found for field ${config.name} in action ${current.key} in flow ${flowId}`
					);
				}
				input.json_path_changes[config.name] = saved.input_data[config.name];
			}
		}
		input.input_data = saved.input_data;
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
	payload.context.bap_uri = "https://workbench-auto-runner.com";
	payload.context.bpp_uri = "https://workbench-auto-runner.com";
	payload.context.bpp_id = "workbench-auto-runner.com";
	payload.context.bap_id = "workbench-auto-runner.com";
	const mockAction = getMockActionObject(current.key);
	reporter.flowPayload(flowId, current.key, payload);
	reporter.flowSessionData(flowId, current.key, mockSessionData);
	const saveConfig = mockAction.saveData;
	await saveDataForConfig(saveConfig, payload);
	return {
		continue: true,
		payload: payload,
		mockAction: mockAction,
		actionId: current.key,
	};
}

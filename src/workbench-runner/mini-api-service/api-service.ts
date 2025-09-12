import { MockAction } from "config/mock-config/TRV14/classes/mock-action";
import { runnerConfig } from "index";
import { SessionCache } from "types/api-session-cache";
import logger from "@ondc/automation-logger";
import { performL0Validations } from "./L0-validations/schemaValidations";
import reporter from "reporter";
import { performContextValidations } from "workbench-runner/mini-api-service/context-validations/data-utils/validate-context";
import { TransactionCacheService } from "workbench-runner/mini-api-service/context-validations/data-utils/session-service";
import { randomUUID } from "crypto";
async function runPayloadValidations(
	mockAction: MockAction,
	payload: any,
	sessionData: SessionCache
) {
	if (runnerConfig.runApiService == false) {
		logger.warning("Skipping api service functions");
		reporter.warning("Skipping api service functions");
		return;
	}
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
async function apiService(payload: any) {
	payload.context.timestamp = new Date(
		Date.now() - Math.floor(Math.random() * 1000000)
	).toISOString(); // generate random timestamp iso
	const result = await performContextValidations(
		payload.context,
		{
			defaultMode: false,
			subscriberUrl: payload.context.bap_uri,
			subscriberType: "BAP",
			difficulty: {
				sensitiveTTL: true,
				useGateway: true,
				stopAfterFirstNack: true,
				protocolValidations: true,
				timeValidations: true,
				headerValidaton: true,
				useGzip: true,
			},
			action: payload.context.action,
			transactionId: payload.context.transaction_id,
			env: "STAGING",
		},
		{}
	);
	new TransactionCacheService().updateTransactionCache(
		randomUUID(),
		payload,
		{
			message: "STUB API RESPONSE FOR AUTO RUNNER",
		},
		payload.context.bap_uri
	);
	if (!result.valid) {
		reporter.error("Context Validations failed", { error: result.error });
	}
}

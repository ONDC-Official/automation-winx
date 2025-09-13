import logger from "@ondc/automation-logger";
import { performL0Validations } from "./L0-validations/schemaValidations";
import reporter from "reporter";
import { performContextValidations } from "workbench-runner/mini-api-service/context-validations/data-utils/validate-context";
import { TransactionCacheService } from "workbench-runner/mini-api-service/context-validations/data-utils/session-service";
import { randomUUID } from "crypto";
import { getRunnerConfig } from "runner-config-manager";

export async function runApiService(payload: any, subscriber_url: string) {
	if (getRunnerConfig().runApiService.skipAll == true) {
		logger.warning("Skipping api service functions");
		reporter.warning("Skipping api service functions");
		return;
	}

	await runPayloadValidations(payload, subscriber_url);
	await contextValidations(payload, subscriber_url);
}

async function runPayloadValidations(payload: any, subscriber_url: string) {
	const action = payload.context.action;
	if (!action) {
		logger.error("Action not found in payload context", { payload: payload });
		throw new Error("Action not found in payload context");
	}

	if (getRunnerConfig().runApiService.L0Validations) {
		// L0 Validations
		const l0Result: any = await performL0Validations(payload, action, {});
		if (!l0Result.valid) {
			console.log(l0Result);
			logger.error(`L0 Validation failed for action `, l0Result);
			reporter.error(`L0 Validation failed for action `, {
				errors: l0Result.errors,
			});
		}
	} else {
		logger.warning("Skipping L0 validations as per config");
		reporter.warning("Skipping L0 validations as per config");
	}

	if (getRunnerConfig().runApiService.L1Validations) {
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
					`L1 Validation failed for action ${action}`,
					invalidResults
				);
			} else {
				logger.info(`L1 Validation passed for action ${action}`);
			}
		} catch (error) {
			throw new Error("L1 validations module not found");
		}
	} else {
		logger.warning("Skipping L1 validations as per config");
		reporter.warning("Skipping L1 validations as per config");
	}

	if (getRunnerConfig().runApiService.L1CustomValidations) {
		try {
			const { performL1CustomValidations } = await import(
				"./generated/L1-custom-validations/index"
			);
			const l1Custom = await performL1CustomValidations(
				payload,
				action,
				subscriber_url
			);
			const l1CustomInvalid = l1Custom.filter((r: any) => r.valid === false);
			if (l1CustomInvalid.length > 0) {
				logger.error(
					`L1 Custom Validation failed for action ${action}`,
					l1CustomInvalid
				);
				reporter.error(`L1 Custom Validation failed for action ${action}`, {
					errors: l1CustomInvalid,
				});
			} else {
				logger.info(`L1 Custom Validation passed for action ${action}`);
			}
		} catch (error) {
			throw new Error("L1 custom validations module not found");
		}
	} else {
		logger.warning("Skipping L1 Custom validations as per config");
		reporter.warning("Skipping L1 Custom validations as per config");
	}
}
async function contextValidations(payload: any, subscriber_url: string) {
	if (getRunnerConfig().runApiService.ContextValidations === false) {
		logger.warning("Skipping Context validations as per config");
		reporter.warning("Skipping Context validations as per config");
		return;
	}
	payload.context.timestamp = new Date(
		Date.now() - Math.floor(Math.random() * 1000000)
	).toISOString(); // generate random timestamp iso
	const result = await performContextValidations(
		payload.context,
		{
			defaultMode: false,
			subscriberUrl: subscriber_url,
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
			message: {
				ack: {
					status: "ACK",
				},
			},
		},
		subscriber_url
	);
	if (!result.valid) {
		reporter.error("Context Validations failed", { error: result.error });
	}
}

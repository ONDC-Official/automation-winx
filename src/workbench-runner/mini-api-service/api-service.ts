import { performL0Validations } from "./L0-validations/schemaValidations";
import reporter from "reporter";
import { performContextValidations } from "workbench-runner/mini-api-service/context-validations/data-utils/validate-context";
import { TransactionCacheService } from "workbench-runner/mini-api-service/context-validations/data-utils/session-service";
import { randomUUID } from "crypto";
import { getRunnerConfig } from "runner-config-manager";
import { FlowMeta } from "workbench-runner/runner";

interface ValidationResult {
	valid: boolean;
	errors?: any[];
}

export async function runApiService(
	payload: any,
	subscriber_url: string,
	meta: FlowMeta
) {
	if (getRunnerConfig().runApiService.skipAll) {
		reporter.warning(
			"API service validation steps are skipped as per configuration"
		);
		return;
	}

	await runPayloadValidations(payload, subscriber_url, meta);
	await contextValidations(payload, subscriber_url, meta);
}

async function runPayloadValidations(
	payload: any,
	subscriber_url: string,
	meta: FlowMeta
) {
	const action = payload.context.action;
	if (!action) {
		reporter.error("Required field 'action' not found in payload context", {
			meta: { ...meta, operation: "payload-validation" },
		});
		throw new Error("Required field 'action' not found in payload context");
	}

	await performValidations(payload, action, subscriber_url, meta);
}

async function performValidations(
	payload: any,
	action: string,
	subscriber_url: string,
	meta: FlowMeta
) {
	const config = getRunnerConfig().runApiService;

	if (config.L0Validations) {
		await runL0Validations(payload, action, meta);
	} else {
		reporter.warning("L0 validations skipped as per configuration");
	}

	if (config.L1Validations) {
		await runL1Validations(payload, action, meta);
	} else {
		reporter.warning("L1 validations skipped as per configuration");
	}

	if (config.L1CustomValidations) {
		await runL1CustomValidations(payload, action, subscriber_url, meta);
	} else {
		reporter.warning("L1 custom validations skipped as per configuration");
	}
}

async function runL0Validations(
	payload: any,
	action: string,
	meta: FlowMeta
): Promise<void> {
	const result: ValidationResult = await performL0Validations(
		payload,
		action,
		{}
	);
	if (!result.valid) {
		reporter.error(`Schema validation failed for action: ${action}`, {
			errors: result.errors,
			meta: { ...meta, operation: "l0-validation" },
		});
	}
}

async function runL1Validations(
	payload: any,
	action: string,
	meta: FlowMeta
): Promise<void> {
	try {
		const { performL1Validations } = await import(
			"./generated/L1-Validations/index"
		);
		const results = await performL1Validations(action, payload);
		const invalidResults = results.filter((r: ValidationResult) => !r.valid);

		if (invalidResults.length > 0) {
			reporter.error(`L1 validation failed for action: ${action}`, {
				errors: invalidResults,
				meta: { ...meta, operation: "l1-validation" },
			});
		}
	} catch (error) {
		throw new Error(
			"L1 validations module not found. Please ensure the module is properly generated."
		);
	}
}

async function runL1CustomValidations(
	payload: any,
	action: string,
	subscriber_url: string,
	meta: FlowMeta
): Promise<void> {
	try {
		const { performL1CustomValidations } = await import(
			"./generated/L1-custom-validations/index"
		);
		const results = await performL1CustomValidations(
			payload,
			action,
			subscriber_url
		);
		const invalidResults = results.filter((r: ValidationResult) => !r.valid);

		if (invalidResults.length > 0) {
			reporter.error(`Custom validation rules failed for action: ${action}`, {
				errors: invalidResults,
			});
		}
	} catch (e) {
		reporter.error("L1 custom validations module import error", {
			error: e,
			meta: {
				...meta,
				operation: "l1-custom-validation",
			},
		});
		throw e;
	}
}
async function contextValidations(
	payload: any,
	subscriber_url: string,
	meta: FlowMeta
) {
	if (!getRunnerConfig().runApiService.ContextValidations) {
		reporter.warning("Context validations skipped as per configuration");
		return;
	}
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

	// Update transaction cache with acknowledgment
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
		reporter.error("Context validation failed", {
			error: result.error,
			action: payload.context.action,
			transactionId: payload.context.transaction_id,
			meta: {
				...meta,
				operation: "context-validation",
			},
		});
	}
}

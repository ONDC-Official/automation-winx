import { z } from "zod";
import { TestResults, TestResult } from "../types/operation-types";

// Schema for supported actions (index.yaml)
const SupportedActionsSchema = z.object({
	supportedActions: z.record(z.string(), z.array(z.string()).nullable()),
	apiProperties: z.record(
		z.string(),
		z.object({
			async_predecessor: z.string().nullable(),
			transaction_partner: z.array(z.string()),
		})
	),
});

// Schema for factory.yaml
const FactoryCodeSchema = z.object({
	code: z.number(),
	action_id: z.string(),
	action: z.string(),
	default: z.string(),
	message_id: z.boolean(),
});

const FactorySchema = z.object({
	codes: z.array(FactoryCodeSchema),
});

// Schema for save-data.yaml
const SaveDataSchema = z.object({
	"save-data": z.record(z.string(), z.string()),
});

// Schema for flow config (index.yaml)
const FlowSequenceItemSchema = z.object({
	key: z.string(),
	type: z.string(),
	unsolicited: z.boolean(),
	pair: z.string().nullable(),
	owner: z.string(),
	expect: z.boolean().optional(),
	input: z
		.array(
			z.object({
				name: z.string(),
				label: z.string(),
				type: z.string(),
				payloadField: z.string().optional(),
			})
		)
		.optional(),
});

// expect at 0th index must be true
const FlowSchema = z
	.object({
		id: z.string(),
		description: z.string(),
		sequence: z.array(FlowSequenceItemSchema),
	})
	.refine(
		(data) => data.sequence.length > 0 && data.sequence[0].expect === true,
		{
			message: 'The first item in "sequence" must have "expect" set to true',
		}
	);

const FlowConfigSchema = z.object({
	flows: z.array(FlowSchema),
});

// Export all schemas
export {
	SupportedActionsSchema,
	FactorySchema,
	SaveDataSchema,
	FlowConfigSchema,
	FactoryCodeSchema,
	FlowSequenceItemSchema,
	FlowSchema,
};

// Type inference from schemas
export type SupportedActions = z.infer<typeof SupportedActionsSchema>;
export type Factory = z.infer<typeof FactorySchema>;
export type SaveData = z.infer<typeof SaveDataSchema>;
export type FlowConfig = z.infer<typeof FlowConfigSchema>;
export type FactoryCode = z.infer<typeof FactoryCodeSchema>;
export type FlowSequenceItem = z.infer<typeof FlowSequenceItemSchema>;
export type Flow = z.infer<typeof FlowSchema>;

// Validation functions
export function validateSupportedActions(data: unknown): SupportedActions {
	try {
		return SupportedActionsSchema.parse(data);
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new Error(
				`Invalid supported actions configuration: ${error.message}`
			);
		}
		throw error;
	}
}

export function validateFactory(data: unknown): Factory {
	try {
		return FactorySchema.parse(data);
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new Error(`Invalid factory configuration: ${error.message}`);
		}
		throw error;
	}
}

export function validateSaveData(data: unknown): SaveData {
	try {
		return SaveDataSchema.parse(data);
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new Error(`Invalid save-data configuration: ${error.message}`);
		}
		throw error;
	}
}

export function validateFlowConfig(data: unknown): FlowConfig {
	try {
		return FlowConfigSchema.parse(data);
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new Error(`Invalid flow configuration: ${error.message}`);
		}
		throw error;
	}
}

// Specific validation functions that return TestResults
export function validateSupportedActionsWithResults(
	data: unknown
): TestResults {
	return validateSchema(SupportedActionsSchema, data);
}

export function validateFactoryWithResults(data: unknown): TestResults {
	return validateSchema(FactorySchema, data);
}

export function validateSaveDataWithResults(data: unknown): TestResults {
	return validateSchema(SaveDataSchema, data);
}

export function validateFlowConfigWithResults(data: unknown): TestResults {
	return validateSchema(FlowConfigSchema, data);
}

// Enhanced utility function that returns TestResults
export function validateYamlConfigWithResults(
	data: unknown,
	configType: "supportedActions" | "factory" | "saveData" | "flowConfig"
): TestResults {
	switch (configType) {
		case "supportedActions":
			return validateSupportedActionsWithResults(data);
		case "factory":
			return validateFactoryWithResults(data);
		case "saveData":
			return validateSaveDataWithResults(data);
		case "flowConfig":
			return validateFlowConfigWithResults(data);
		default:
			return [
				{
					success: false,
					description: `Unknown config type: ${configType}`,
					meta: { configType },
				},
			];
	}
}

// Function to convert Zod errors into clear, readable messages
function formatZodError(error: z.ZodError): string {
	const issues = error.issues.map((issue) => {
		const path =
			issue.path.length > 0 ? `at "${issue.path.join(".")}"` : "at root";

		switch (issue.code) {
			case "invalid_type":
				return `${path}: expected ${issue.expected}, but received ${issue.input}`;
			case "unrecognized_keys":
				return `${path}: unrecognized keys: ${issue.keys.join(", ")}`;
			case "invalid_union":
				return `${path}: value doesn't match any of the expected union types`;
			case "invalid_format":
				return `${path}: invalid format`;
			case "too_small":
				return `${path}: value is too small (minimum: ${issue.minimum})`;
			case "too_big":
				return `${path}: value is too big (maximum: ${issue.maximum})`;
			case "custom":
				return `${path}: ${issue.message || "custom validation failed"}`;
			case "not_multiple_of":
				return `${path}: value must be a multiple of ${(issue as any).multipleOf || "specified number"}`;
			case "invalid_key":
				return `${path}: invalid object key`;
			case "invalid_element":
				return `${path}: invalid array element`;
			case "invalid_value":
				return `${path}: invalid value`;
			default:
				return `${path}: ${(issue as any).message || "validation failed"}`;
		}
	});

	return issues.join("; ");
}

// Function to validate any Zod schema and return TestResults
export function validateSchema<T>(
	schema: z.ZodType<T>,
	data: unknown
): TestResults {
	try {
		const result = schema.parse(data);
		return [
			{
				success: true,
				description: "Schema validation passed",
				meta: { validatedData: result },
			},
		];
	} catch (error) {
		if (error instanceof z.ZodError) {
			const errorMessage = formatZodError(error);
			return [
				{
					success: false,
					description: `Schema validation failed: ${errorMessage}`,
					meta: {
						errorCount: error.issues.length,
						rawError: error.issues,
					},
				},
			];
		}
		return [
			{
				success: false,
				description: "Unexpected validation error",
				meta: { error: error instanceof Error ? error.message : String(error) },
			},
		];
	}
}

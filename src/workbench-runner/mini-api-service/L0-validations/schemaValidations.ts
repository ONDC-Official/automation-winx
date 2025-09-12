import Ajv from "ajv";
import addFormats from "ajv-formats";
import logger from "@ondc/automation-logger";
import { shouldAddContext } from "./ack-utils";

// Dynamic schema loader
let schemaLoader: any = null;

async function getSchemaFunction(): Promise<any> {
	if (!schemaLoader) {
		try {
			const module = await import("../generated/L0-schemas/index");
			schemaLoader = module.default;
		} catch (error) {
			logger.error("Failed to load L0 schemas", {}, error);
			throw new Error("L0 schemas not available");
		}
	}
	return schemaLoader;
}
function checkInvalidFields(payload: any, parentPath = "") {
	const invalidFields: string[] = [];

	for (const key in payload) {
		// Check if the key belongs to the object itself
		if (payload.hasOwnProperty(key)) {
			const currentPath = parentPath ? `${parentPath}/${key}` : key;
			const value = payload[key];

			if (value === null || value === "") {
				// If the value is null or an empty string, add it to invalidFields
				invalidFields.push(currentPath);
			} else if (Array.isArray(value) && value.length === 0) {
				// If it's an empty array, add it to invalidFields
				invalidFields.push(currentPath);
			} else if (typeof value === "object" && value !== null) {
				// If it's an object, recursively check its properties
				invalidFields.push(...checkInvalidFields(value, currentPath));
			}
		}
	}

	return invalidFields;
}

export async function performL0Validations(
	actionPayload: any,
	action: string,
	loggerMetaData: any
) {
	try {
		if (shouldAddContext() === false) {
			const invalidFileds = checkInvalidFields(actionPayload);
			if (invalidFileds.length > 0) {
				const errorMessages = invalidFileds
					.map((field: string) => `${field} should not be empty`)
					.join(",");
				logger.debug("L0 validations failed due to empty fields", {
					...loggerMetaData,
					errors: errorMessages,
				});
				return { valid: false, errors: errorMessages };
			}
		}

		const getSchema = await getSchemaFunction();
		const schema = getSchema(action);
		const ajv = new Ajv({ allErrors: true });
		addFormats(ajv);
		const validate = ajv.compile(schema as any);
		const valid = validate(actionPayload);
		if (!valid) return createErrorMessage(validate, valid);
		logger.debug("L0 validations result", {
			...loggerMetaData,
			valid: valid,
			errors: validate.errors,
		});
		return { valid: valid, errors: validate.errors };
	} catch (e: any) {
		logger.error("Error in L0 validations", loggerMetaData, e);
		return { valid: false, errors: "invalid action" };
	}
}

function createErrorMessage(validate: any, valid: boolean) {
	const errorMessages = validate.errors.map((error: any) => {
		const { instancePath, message, keyword, params } = error;

		// Customize error messages based on validation keywords
		switch (keyword) {
			case "additionalProperties":
				const additionalProp = params.additionalProperty;
				return `${instancePath} ${message}: '${additionalProp}'`;
			case "type":
				const expectedType = params.type;
				return `${instancePath} should be of type '${expectedType}'`;

			case "enum":
				const allowedValues = params.allowedValues.join(", ");
				return `${instancePath} must be one of the allowed values: ${allowedValues}`;

			case "minLength":
				return `${instancePath} should have at least ${params.limit} characters`;

			case "maxLength":
				return `${instancePath} should have no more than ${params.limit} characters`;

			case "minimum":
				return `${instancePath} should be >= ${params.limit}`;

			case "maximum":
				return `${instancePath} should be <= ${params.limit}`;

			case "required":
				const missingProperty = params.missingProperty;
				return `Missing required property: '${missingProperty}'`;

			default:
				// General message for other error types
				return `${instancePath} ${message}`;
		}
	});

	return { valid: false, errors: errorMessages.join(",") };
}

import { validationOutput } from "./types";

export async function performL1CustomValidations(
	payload: any,
	action: string,
	subscriberUrl: string,
	allErrors = false,
	externalData = {}
): Promise<validationOutput> {
	return [
		{
			valid: true,
			code: 200,
			description: "Custom validation passed",
		},
	];
}

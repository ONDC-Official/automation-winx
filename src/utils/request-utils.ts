import axios from "axios";

export async function sendToApiServiceAboutForm(
	subscriberUrl: string,
	transactionId: string,
	formActionId: string,
	formType: string,
	version: string,
	submissionId?: string,
	error?: any
) {
	const url = createApiServiceUrl(version, `form/html-form`);
	const body = {
		subscriber_url: subscriberUrl,
		transaction_id: transactionId,
		form_action_id: formActionId,
		submissionId: submissionId,
		error: error,
	};
	await axios.post(url, body);
}

export function createSellerUrl(domain: string, version: string) {
	return `https://workbench-auto-runner/${domain}/${version}/seller`;
}

export function createBuyerUrl(domain: string, version: string) {
	return `https://workbench-auto-runner/${domain}/${version}/buyer`;
}

export function createApiServiceUrl(version: string, path: string) {
	const domain = process.env.DOMAIN;
	return `https://workbench-auto-runner/${domain}/${version}/${path}`;
}

import { SessionData } from "../../../session-types";

export async function search_seller_pagination_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	delete existingPayload.context.bpp_uri;
	delete existingPayload.context.bpp_id;

	// Set start and end date dynamically
	const now = new Date();
	const end = new Date(now);
	end.setDate(now.getDate() + 2);

	if (
		existingPayload.message?.intent?.fulfillment?.stops?.[0]?.time?.range
	) {
		existingPayload.message.intent.fulfillment.stops[0].time.range.start = now.toISOString();
		existingPayload.message.intent.fulfillment.stops[0].time.range.end = end.toISOString();
	}

	if (sessionData.user_inputs?.city_code) {
		existingPayload.context.location.city.code = sessionData.user_inputs.city_code;
	}

	return existingPayload;
} 
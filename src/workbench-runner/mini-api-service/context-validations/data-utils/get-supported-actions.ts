import logger from "@ondc/automation-logger";
import { getWorkbenchConfig } from "services/getWorkbenchConfig";

interface Config {
	supportedActions: Record<string, string[]>;
	apiProperties: Record<
		string,
		{ async_predecessor: string | null; transaction_partner: string[] }
	>;
}

let supportedActions: Config["supportedActions"] = {};
let apiProperties: Config["apiProperties"] = {};

// Function to load config from API
async function loadConfig(): Promise<void> {
	const config = await getWorkbenchConfig("supportedActions");
	supportedActions = config.supportedActions;
	apiProperties = config.apiProperties;
}

// Load the config immediately and export a promise
const configPromise = loadConfig();

// Exporting config variables and the promise
export { configPromise, supportedActions, apiProperties };

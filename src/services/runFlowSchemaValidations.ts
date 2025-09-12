import { getWorkbenchConfig } from "services/getWorkbenchConfig";
import reporter from "reporter";
import { validateYamlConfigWithResults } from "services/validate-yaml-configs";

export async function runConfigValidations() {
	const supportedActions = await getWorkbenchConfig("supportedActions");
	const flowConfigs = await getWorkbenchConfig("flowConfig");
	const factoryConfig = await getWorkbenchConfig("factory");

	let results = validateYamlConfigWithResults(
		supportedActions,
		"supportedActions"
	);

	results.push(...validateYamlConfigWithResults(flowConfigs, "flowConfig"));
	results.push(...validateYamlConfigWithResults(factoryConfig, "factory"));

	results.forEach((res) => {
		if (!res.success) {
			reporter.error(`Config validation failed: ${res.description}`, res.meta);
		}
	});
}

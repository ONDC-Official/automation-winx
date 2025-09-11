import { actionConfig } from "config/mock-config";
import { readFileSync } from "fs";
import path from "path";
import reporter from "reporter";
import { validateYamlConfigWithResults } from "services/config-validation-service/validate-yaml-configs";
import { loadAndDereferenceYaml } from "utils/yaml-utils";

export async function runConfigValidations() {
	const rawSupportedActions = readFileSync(
		path.resolve(
			__dirname,
			"./config/config-service/supportedActions/index.yaml"
		),
		"utf8"
	);
	const supportedActions = await loadAndDereferenceYaml(rawSupportedActions);
	const flowConfigsRaw = readFileSync(
		path.resolve(__dirname, "./config/config-service/flow-config/index.yaml"),
		"utf8"
	);

	const flowConfigs = await loadAndDereferenceYaml(flowConfigsRaw);

	let results = validateYamlConfigWithResults(
		supportedActions,
		"supportedActions"
	);

	results.push(...validateYamlConfigWithResults(flowConfigs, "flowConfig"));
	results.push(...validateYamlConfigWithResults(actionConfig, "factory"));

	results.forEach((res) => {
		if (!res.success) {
			reporter.error(
				`SupportedActions validation failed: ${res.description}`,
				res.meta
			);
		}
	});
}

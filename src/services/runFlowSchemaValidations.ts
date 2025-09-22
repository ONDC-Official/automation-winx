import { getWorkbenchConfig } from "services/getWorkbenchConfig";
import reporter from "reporter";
import { validateYamlConfigWithResults } from "services/validate-yaml-configs";
import Cli from "cli-tools";
import { getRunnerConfig } from "runner-config-manager";
import ora from "ora";
import { TimedSpinner } from "utils/timed-spinner";
import { getAllMockActionIds, getMockActionObject } from "config/mock-config";
export async function runConfigValidations() {
	console.log(Cli.title("CONFIG VALIDATIONS"));
	if (getRunnerConfig().runConfigValidations === false) {
		console.log(Cli.skip.secondary("skipping Config Validations") + "\n");
		return;
	}
	const spinner = new TimedSpinner("Running config validations....").start();
	try {
		const supportedActions = await getWorkbenchConfig("supportedActions");
		const flowConfigs = await getWorkbenchConfig("flowConfig");
		const factoryConfig = await getWorkbenchConfig("factory");

		const allMockActions = getAllMockActionIds();
		const mockResults = [];
		for (const id of allMockActions) {
			try {
				const mockAction = getMockActionObject(id);
				mockAction.saveData;
				mockAction.defaultData;
				mockAction.inputs;
			} catch (e) {
				mockResults.push({
					success: false,
					description: `Mock Action ${id} could not be instantiated \n ${(e as Error).message}`,
					meta: { actionId: id, operation: "mock-config-validation" },
				});
				continue;
			}
		}

		let results = validateYamlConfigWithResults(
			supportedActions,
			"supportedActions"
		);

		results.push(...validateYamlConfigWithResults(flowConfigs, "flowConfig"));
		results.push(...validateYamlConfigWithResults(factoryConfig, "factory"));
		results.push(...mockResults);

		results.forEach((res) => {
			if (!res.success) {
				reporter.error(
					`Config validation failed: ${res.description}`,
					res.meta
				);
			}
		});
		const failedCount = results.filter((r) => !r.success).length;

		if (failedCount > 0) {
			const errorMessages = results
				.filter((r) => !r.success)
				.map((r) => `- ${r.description}`)
				.join("\n\n");
			spinner.fail(
				Cli.description.error(
					`Config validations completed with ${failedCount} error(s)` +
						"\n" +
						errorMessages,
					{ prefix: "Error:" }
				) + "\n"
			);
		} else {
			spinner.succeed(
				Cli.description.success("All config validations passed", {
					prefix: "Success:",
				}) + "\n"
			);
		}
	} catch (e: any) {
		console.log(
			Cli.description.error("Error in config validations, " + e.message, {
				prefix: "Error:",
			}) + "\n"
		);
		reporter.error("Error in config validations", e);
	}
}

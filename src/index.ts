// flows.yaml
// mock - config
// build yaml
import { runProtocolFlows } from "./workbench-runner";
import { createApiService } from "./createApiService";
import reporter from "reporter";
import { runConfigValidations } from "./services/runFlowSchemaValidations";
import logger from "@ondc/automation-logger";
import { writeFileSync } from "fs";

export const runnerConfig = {
	createApiService: false,
	runFlows: true,
	runConfigValidations: false,
	runApiService: true,
};

async function start() {
	reporter.start("workbench-testing");
	createApiService;
	try {
		runnerConfig.createApiService && (await createApiService());
		runnerConfig.runConfigValidations && (await runConfigValidations());
		runnerConfig.runFlows && (await runProtocolFlows());
	} catch (e) {
		logger.error("Error in workbench", {}, e);
		reporter.error("Error in running the workbench", e);
	}
	const diagnostics = reporter.diagnostics();
	console.log("Diagnostics:", diagnostics);
	writeFileSync(
		"reporter-diagnostics.json",
		JSON.stringify(diagnostics, null, 2)
	);
}

start();
// finally create a report folder which contains all ondc-logs which will act as a artifact for workflow

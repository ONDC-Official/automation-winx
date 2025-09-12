// flows.yaml
// mock - config
// build yaml
import { runProtocolFlows } from "./workbench-runner/runner";
import { createApiService } from "./create-api-service";
import reporter from "reporter";
import { runConfigValidations } from "./services/runFlowSchemaValidations";
import logger from "@ondc/automation-logger";
import { writeFileSync } from "fs";
import { getRunnerConfig } from "runner-config-manager";

async function start() {
	reporter.start("workbench-testing");
	createApiService;
	try {
		getRunnerConfig().createApiService && (await createApiService());
		getRunnerConfig().runConfigValidations && (await runConfigValidations());
		getRunnerConfig().runFlows && (await runProtocolFlows());
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

// flows.yaml
// mock - config
// build yaml
import { runProtocolFlows } from "./workbench-runner/runner";
import { createApiService } from "./create-api-service";
import reporter from "reporter";
import { runConfigValidations } from "./services/runFlowSchemaValidations";
import logger from "@ondc/automation-logger";
import { getRunnerConfig } from "runner-config-manager";
import { generateFinalReportArtifact } from "services/reportGenerator";
import Cli from "cli-tools";
export async function runWorkbench() {
	reporter.start("workbench-testing");
	console.log("=== RUNNING WORKBENCH TESTS ===\n");
	try {
		await runConfigValidations();
		await createApiService();
		await runProtocolFlows();
	} catch (e) {
		logger.error("Error in workbench", {}, e);
		reporter.error("Error in running the workbench", e);
	}
	console.log(Cli.title.info("GENERATING REPORT"));
	const diagnostics = reporter.diagnostics();
	console.log("Diagnostics:", diagnostics);
	await generateFinalReportArtifact(diagnostics);
}

// finally create a report folder which contains all ondc-logs which will act as a artifact for workflow

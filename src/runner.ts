// flows.yaml
// mock - config
// build yaml
import { runProtocolFlows } from "./workbench-runner/runner";
import { createApiService } from "./create-api-service";
import reporter from "reporter";
import { runConfigValidations } from "./services/runFlowSchemaValidations";
import logger from "@ondc/automation-logger";
import { generateFinalReportArtifact } from "services/reportGenerator";
import Cli from "cli-tools";
import { generateCliReport } from "services/reportGeneratorCli";
export async function runWorkbench() {
	reporter.start("workbench-testing");
	console.log(Cli.description.primary("=== SIMULATING WORKBENCH ===") + "\n");
	try {
		await runConfigValidations();
		await createApiService();
		await runProtocolFlows();
	} catch (e) {
		logger.error("Error in workbench", {}, e);
		reporter.error("Error in running the workbench", e);
	}
	const diagnostics = reporter.diagnostics();
	await generateFinalReportArtifact(diagnostics);
	generateCliReport(diagnostics);
	const anyError = diagnostics.complete.items.some(
		(item) => item.severity === "error"
	);
	if (anyError) {
		throw new Error(
			"Errors found during workbench run. Please check the report for details."
		);
	}
}

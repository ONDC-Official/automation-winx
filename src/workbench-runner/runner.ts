import logger from "@ondc/automation-logger";
import { createFakeSession } from "./api-session-faker";
import { RedisService } from "ondc-automation-cache-lib";
import { runMock } from "./mini-mock-service/mock-service";
import { runApiService } from "./mini-api-service/api-service";
import Cli from "cli-tools";
import { getRunnerConfig } from "runner-config-manager";
import cliProgress from "cli-progress";

export async function runProtocolFlows() {
	console.log(Cli.title("SCENARIO TESTING"));
	const domain = process.env.DOMAIN,
		version = process.env.VERSION;
	console.log(
		Cli.description.secondary(`Domain: ${domain} Version: ${version}\n`)
	);
	if (getRunnerConfig().runFlows === false) {
		console.log(Cli.skip.secondary("skipping flow execution") + "\n");
		return;
	}

	try {
		if (!domain || !version) {
			throw new Error(
				"DOMAIN and VERSION must be set in environment variables"
			);
		}

		const fakeSession = createFakeSession(domain, version, "TRV14");
		const flowIds = Object.keys(fakeSession.flowConfigs);
		const sessionId = "test-session-id";
		RedisService.setKey(sessionId, JSON.stringify(fakeSession));
		logger.info("Fake session created");

		// Filter out flows with form steps and calculate total steps
		const validFlows: { flowId: string; stepCount: number }[] = [];
		let totalSteps = 0;

		for (const flowId of flowIds) {
			const hasForm = fakeSession.flowConfigs[flowId].sequence.some((step) => {
				return step.type.toLowerCase().includes("form");
			});
			if (hasForm) {
				logger.info(`Skipping flow ${flowId} due to form step`);
				continue;
			}
			const stepCount = fakeSession.flowConfigs[flowId].sequence.length;
			validFlows.push({ flowId, stepCount });
			totalSteps += stepCount;
		}

		console.log(
			`\nProcessing ${validFlows.length} flows with ${totalSteps} total steps\n`
		);

		// Create progress bar
		const progressBar = new cliProgress.SingleBar({
			format:
				"Progress |{bar}| {percentage}% | {value}/{total} steps | Current: {currentFlow} - Step {currentStep}",
			barCompleteChar: "\u2588",
			barIncompleteChar: "\u2591",
			hideCursor: true,
		});

		progressBar.start(totalSteps, 0, {
			currentFlow: "Initializing",
			currentStep: "0",
		});

		let completedSteps = 0;

		for (const { flowId, stepCount } of validFlows) {
			let run: any = {
				continue: true,
				payload: undefined,
				mockAction: undefined,
			};
			let i = 0;
			while (run.continue && i < stepCount) {
				progressBar.update(completedSteps, {
					currentFlow: flowId,
					currentStep: `${i + 1}/${stepCount}`,
				});

				const meta: FlowMeta = {
					flowId: flowId,
					actionId: run.mockAction ? run.mockAction.action : "N/A",
					operation: run.mockAction ? run.mockAction.operation : "N/A",
				};
				run = await runMock(i, sessionId, flowId, meta);
				if (run.continue) {
					await runApiService(run.payload, fakeSession.subscriberUrl, meta);
				}
				i++;
				completedSteps++;
				progressBar.increment();
			}
		}

		progressBar.update(totalSteps, {
			currentFlow: "Completed",
			currentStep: "All",
		});
		progressBar.stop();

		console.log(Cli.description.success("All flows executed successfully\n"));
	} catch (err: any) {
		const stack = err.stack ? err.stack.split("\n").slice(0, 2).join("\n") : "";
		const message = err.message ? err.message : err.toString();
		console.log(
			Cli.description.error(
				"Error while executing flows: " + message + "\n" + stack,
				{
					prefix: "Error:",
				}
			) + "\n"
		);
	}
}

export type FlowMeta = {
	flowId: string;
	actionId: string;
	operation: string;
};

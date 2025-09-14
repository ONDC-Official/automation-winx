import logger from "@ondc/automation-logger";
import { createFakeSession } from "./api-session-faker";
import { RedisService } from "ondc-automation-cache-lib";
import { runMock } from "./mini-mock-service/mock-service";
import { runApiService } from "./mini-api-service/api-service";
import Cli from "cli-tools";
import { getRunnerConfig } from "runner-config-manager";
import { Listr, PRESET_TIMER } from "listr2";

export type FlowMeta = {
	flowId: string;
	actionId: string;
	operation: string;
};

type Ctx = {
	totalSteps: number;
	completedSteps: number;
};

export async function runProtocolFlows() {
	console.log(Cli.title("SCENARIO TESTING"));
	const domain = process.env.DOMAIN;
	const version = process.env.VERSION;

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

		// Build valid flows (skip ones that contain a 'form' step)
		const validFlows: {
			flowId: string;
			stepCount: number;
			hasForm: boolean;
		}[] = [];
		let totalSteps = 0;

		for (const flowId of flowIds) {
			const sequence = fakeSession.flowConfigs[flowId].sequence;
			const hasForm = sequence.some((step: any) =>
				String(step.type || "")
					.toLowerCase()
					.includes("form")
			);

			if (hasForm) {
				console.log(Cli.skip(`Skipping flow ${flowId} due to form step`));
			} else {
				const stepCount = sequence.length;
				validFlows.push({ flowId, stepCount, hasForm });
				totalSteps += stepCount;
			}
		}

		console.log(
			Cli.description.primary(
				`\nProcessing ${validFlows.length} flows with ${totalSteps} total steps\n`
			)
		);

		const tasks = new Listr<Ctx>(
			validFlows.map(({ flowId, stepCount, hasForm }) => ({
				title: `Flow ${flowId} (${stepCount} steps)`,
				skip: () => (hasForm ? "Contains a form step" : false),
				task: async (ctx, task) => {
					// Run the flow step-by-step (your original while-loop), updating task.output for live progress
					let run: any = {
						continue: true,
						payload: undefined,
						mockAction: undefined,
					};
					let i = 0;

					while (run.continue && i < stepCount) {
						task.output = `Step ${i + 1}/${stepCount} • Overall ${ctx.completedSteps}/${ctx.totalSteps}`;
						const meta: FlowMeta = {
							flowId,
							actionId: run.mockAction ? run.mockAction.action : "N/A",
							operation: run.mockAction ? run.mockAction.operation : "N/A",
						};

						run = await runMock(i, sessionId, flowId, meta);

						if (run.continue) {
							await runApiService(run.payload, fakeSession.subscriberUrl, meta);
						}

						await new Promise((r) => setTimeout(r, 200)); // slight delay for readability

						i++;
						ctx.completedSteps++;

						// Optional: reflect progress in the title as we go
						task.title = `Flow ${flowId} (${i}/${stepCount} steps)`;
					}

					task.output = `Completed • Overall ${ctx.completedSteps}/${ctx.totalSteps}`;
				},
			})),
			{
				// You can toggle concurrency if flows are independent:
				// concurrent: true,
				exitOnError: true,
				rendererOptions: {
					// Nice defaults for a CLI: show subtasks & a timer, keep outputs visible
					timer: PRESET_TIMER,
					showSubtasks: false,
					collapseSubtasks: false,
					clearOutput: false,
					showErrorMessage: true,
					showSkipMessage: true,
				},
			}
		);

		await tasks.run({ totalSteps, completedSteps: 0 });

		console.log(Cli.description.success("All flows executed successfully\n"));
	} catch (err: any) {
		const stack = err.stack ? err.stack.split("\n").slice(0, 2).join("\n") : "";
		const message = err.message ? err.message : String(err);
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

import logger from "@ondc/automation-logger";
import { createFakeSession } from "./api-session-faker";
import { RedisService } from "ondc-automation-cache-lib";
import { runMock } from "./mini-mock-service/mock-service";

// import { performL1Validations } from "./generated/L1-Validations";
export async function runProtocolFlows() {
	logger.info("Starting protocol flow runner...");
	const fakeSession = createFakeSession("transport", "2.0.0", "TRV14");
	const flowIds = Object.keys(fakeSession.flowConfigs);
	const sessionId = "test-session-id";
	RedisService.setKey(sessionId, JSON.stringify(fakeSession));
	logger.info("Fake session created");
	for (const flowId of flowIds) {
		const hasForm = fakeSession.flowConfigs[flowId].sequence.some((step) => {
			return step.type.toLowerCase().includes("form");
		});
		if (hasForm) {
			logger.info(`Skipping flow ${flowId} due to form step`);
			continue;
		}
		let run = {
			continue: true,
			payload: undefined,
		};
		let i = 0;
		while (run.continue) {
			logger.info(`Executing flow ${flowId}, step index ${i}`);
			run = await runMock(i, sessionId, flowId);
			i++;
		}
	}
}

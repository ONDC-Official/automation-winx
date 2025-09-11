import { readFileSync } from "fs";
import path from "path";
import { SessionCache } from "types/api-session-cache";
import { Domain } from "types/flow-types";
import yaml from "js-yaml";

export function createFakeSession(
	domain: string,
	version: string,
	usecaseId: string
): SessionCache {
	return {
		transactionIds: [],
		flowMap: {},
		npType: "BAP",
		domain: domain,
		version: version,
		subscriberUrl: "https://workbench-auto-runner.com",
		usecaseId: usecaseId,
		env: "STAGING",
		flowConfigs: getFlow(),
	};
}
function getFlow() {
	const rawFile = readFileSync(
		path.resolve(__dirname, "../config/config-service/flow-config/index.yaml"),
		"utf-8"
	);
	const flow = yaml.load(rawFile) as any;
	const flows = flow as Domain;
	const obj: any = {};
	for (const flow of flows.flows) {
		obj[flow.id] = flow;
	}
	return obj;
}

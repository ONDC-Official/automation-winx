import { actionConfig } from "config/mock-config";
import { readFileSync } from "fs";
import path from "path";

import { loadAndDereferenceYaml } from "utils/yaml-utils";

export type ConfigType =
	| "supportedActions"
	| "flowConfig"
	| "factory"
	| "testConfig";

/**
 * Reads and loads a configuration file based on the specified type
 * @param configType Type of configuration to load
 * @returns The loaded and dereferenced configuration object
 */

export async function getWorkbenchConfig(configType: ConfigType): Promise<any> {
	let rawConfig: string;

	switch (configType) {
		case "supportedActions":
			rawConfig = readFileSync(
				path.resolve(
					__dirname,
					"./config/config-service/supportedActions/index.yaml"
				),
				"utf8"
			);
			return await loadAndDereferenceYaml(rawConfig);

		case "flowConfig":
			rawConfig = readFileSync(
				path.resolve(
					__dirname,
					"./config/config-service/flow-config/index.yaml"
				),
				"utf8"
			);
			return await loadAndDereferenceYaml(rawConfig);

		case "factory":
			// actionConfig is already imported directly
			return actionConfig;

		case "testConfig":
			rawConfig = readFileSync(
				path.resolve(__dirname, "./config/test-config/inputs.json"),
				"utf8"
			);
			return JSON.parse(rawConfig);

		default:
			throw new Error(`Unsupported config type: ${configType}`);
	}
}

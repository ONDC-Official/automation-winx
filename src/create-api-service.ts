import { existsSync, readFileSync } from "fs";
import { ConfigCompiler } from "ondc-code-generator";
import { SupportedLanguages } from "ondc-code-generator/dist/types/compiler-types";
import path from "path";
import { clearAndCopy } from "./utils/fs-utils";
import { loadAndDereferenceYaml } from "./utils/yaml-utils";
import { TimedSpinner } from "./utils/timed-spinner";

import { getRunnerConfig } from "runner-config-manager";
import Cli from "cli-tools";

export async function createApiService() {
	console.log(Cli.title("API SERVICE GENERATION"));

	if (getRunnerConfig().createApiService === false) {
		console.log(Cli.skip.secondary("skipping API Service Generation") + "\n");
		return;
	}

	const spinner = new TimedSpinner("Compiling Build.yaml....").start();

	try {
		if (
			existsSync(
				path.resolve(__dirname, "./config/api-service/L1-custom-validations")
			)
		) {
			await clearAndCopy(
				path.resolve(__dirname, "./config/api-service/L1-custom-validations"),
				path.resolve(
					__dirname,
					"./workbench-runner/mini-api-service/generated/L1-custom-validations"
				)
			);
		}

		const buildYamlRaw = readFileSync(
			path.resolve(__dirname, "./config/api-service/build.yaml"),
			"utf-8"
		);
		const buildParsed = (await loadAndDereferenceYaml(buildYamlRaw)) as any;
		const valParsed = buildParsed["x-validations"];
		const tsCompiler = new ConfigCompiler(SupportedLanguages.Typescript);
		await tsCompiler.initialize(buildYamlRaw);
		const targetPath = "./src/workbench-runner/mini-api-service/";
		await tsCompiler.generateCode(
			valParsed,
			"L1-Validations",
			false,
			targetPath
		);
		await tsCompiler.generateL0Schema(targetPath);

		spinner.succeed(
			Cli.description.success("Build.yaml compiled \n", {
				prefix: "Success:",
			})
		);
	} catch (e: any) {
		spinner.fail(
			Cli.description.error("Error while compiling Build.yaml: " + e.message, {
				prefix: "Error:",
			}) + "\n"
		);
	}
}

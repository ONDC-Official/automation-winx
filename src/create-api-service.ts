import { existsSync, readFileSync } from "fs";
import { ConfigCompiler } from "ondc-code-generator";
import { SupportedLanguages } from "ondc-code-generator/dist/types/compiler-types";
import path from "path";
import { clearAndCopy } from "./utils/fs-utils";
import { loadAndDereferenceYaml } from "./utils/yaml-utils";

export async function createApiService() {
	const buildYamlRaw = readFileSync(
		path.resolve(__dirname, "./config/api-service/build.yaml"),
		"utf-8"
	);
	const buildParsed = (await loadAndDereferenceYaml(buildYamlRaw)) as any;
	const valParsed = buildParsed["x-validations"];
	const tsCompiler = new ConfigCompiler(SupportedLanguages.Typescript);
	await tsCompiler.initialize(buildYamlRaw);
	const targetPath = "./src/workbench-runner/generated/";
	await tsCompiler.generateCode(valParsed, "L1-Validations", false, targetPath);
	await tsCompiler.generateL0Schema(targetPath);

	if (
		existsSync(
			path.resolve(__dirname, "./config/api-service/L1-custom-validations")
		)
	) {
		await clearAndCopy(
			path.resolve(__dirname, "./config/api-service/L1-custom-validations"),
			path.resolve(
				__dirname,
				"./workbench-runner/generated/L1-custom-validations"
			)
		);
	}
}

import { Diagnostics } from "reporter";
import fse from "fs-extra";
import logger from "@ondc/automation-logger";

const REPORT_FOLDER = "winx-report";
const JSON_WRITE_OPTIONS = { spaces: 2 };

export async function generateFinalReportArtifact(
	diagnostics: Diagnostics
): Promise<void> {
	await initializeReportFolder();
	await generateFlowsReport(diagnostics.complete.flows);
	await generateErrorsAndWarningsReport(diagnostics.complete.items);
	await generateRedisReport(diagnostics.complete.cacheData);
	await generateMetaReport(diagnostics);
}

/**
 * Initializes the report folder structure
 */
async function initializeReportFolder(): Promise<void> {
	await fse.ensureDir(`./${REPORT_FOLDER}`);
	await fse.emptyDir(`./${REPORT_FOLDER}`);
}

/**
 * Generates flow reports with payloads and session data
 */
async function generateFlowsReport(flows: any): Promise<void> {
	const flowsDir = `./${REPORT_FOLDER}/flows`;
	await fse.ensureDir(flowsDir);

	for (const [flowKey, flowDetails] of Object.entries(flows)) {
		const flowName = sanitizeFileName(flowKey);
		const flowDir = `${flowsDir}/${flowName}`;
		await fse.ensureDir(flowDir);

		for (const step of flowDetails as any[]) {
			await generateFlowStepReport(flowDir, step);
		}
	}
}

/**
 * Generates individual flow step reports
 */
async function generateFlowStepReport(
	flowDir: string,
	step: any
): Promise<void> {
	const stepDir = `${flowDir}/${step.actionId}`;
	await fse.ensureDir(stepDir);

	await Promise.all([
		fse.writeJson(`${stepDir}/payload.json`, step.payload, JSON_WRITE_OPTIONS),
		fse.writeJson(
			`${stepDir}/session-data.json`,
			step.sessionData,
			JSON_WRITE_OPTIONS
		),
	]);
}

/**
 * Generates error and warning reports
 */
async function generateErrorsAndWarningsReport(items: any[]): Promise<void> {
	await Promise.all([
		generateSeverityReport(items, "error"),
		generateSeverityReport(items, "warning"),
	]);
}

/**
 * Generates report for specific severity level
 */
async function generateSeverityReport(
	items: any[],
	severity: "error" | "warning"
): Promise<void> {
	const filteredItems = items.filter((item) => item.severity === severity);
	const fileName = `./${REPORT_FOLDER}/${severity}s.json`;

	const content =
		filteredItems.length > 0
			? filteredItems
			: { message: `No ${severity}s found` };

	await fse.writeJson(fileName, content, JSON_WRITE_OPTIONS);
}

/**
 * Generates Redis cache data report
 */
async function generateRedisReport(cacheData: any): Promise<void> {
	const redisDir = `./${REPORT_FOLDER}/redis`;
	await fse.ensureDir(redisDir);

	const writePromises = Object.entries(cacheData).map(([key, entries]) =>
		generateRedisCacheEntry(redisDir, key, entries as any[])
	);

	await Promise.all(writePromises);
}

/**
 * Generates individual Redis cache entry
 */
async function generateRedisCacheEntry(
	redisDir: string,
	key: string,
	entries: any[]
): Promise<void> {
	const transformedEntries = entries.map((entry) => ({
		timestamp: entry.timestamp,
		data: tryParseJson(entry.data),
	}));

	const fileName = sanitizeFileName(key);
	await fse.writeJson(
		`${redisDir}/${fileName}.json`,
		transformedEntries,
		JSON_WRITE_OPTIONS
	);
}

/**
 * Generates metadata report
 */
async function generateMetaReport(diagnostics: Diagnostics): Promise<void> {
	const meta = {
		...diagnostics,
		domain: process.env.DOMAIN,
		version: process.env.VERSION,
		complete: {},
	};

	await fse.writeJson(`./${REPORT_FOLDER}/meta.json`, meta, JSON_WRITE_OPTIONS);
}

/**
 * Sanitizes a string to be used as a file/folder name
 */
function sanitizeFileName(name: string): string {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "-");
}

/**
 * Safely parses JSON string, returns original data if parsing fails
 */
function tryParseJson(data: string): any {
	try {
		return JSON.parse(data);
	} catch (error) {
		return data;
	}
}

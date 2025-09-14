import { Diagnostics, ReportItem } from "reporter";
import chalk from "chalk";

export function generateCliReport(diagnostics: Diagnostics): void {
	printHeader();
	printSummary(diagnostics);
	printIssues(diagnostics);
	printFooter(diagnostics);
}

function printHeader(): void {
	console.log(chalk.cyan.bold("\nWINX REPORT"));
	console.log(chalk.gray("━".repeat(50)));
}

function printSummary(diagnostics: Diagnostics): void {
	const { errors, warnings, reportId } = diagnostics;
	const status =
		errors > 0
			? chalk.red("FAILED")
			: warnings > 0
				? chalk.yellow("WARNING")
				: chalk.green("PASSED");

	console.log(
		`Status: ${status} | Errors: ${chalk.red(errors)} | Warnings: ${chalk.yellow(warnings)}`
	);
	console.log(`Report ID: ${chalk.dim(reportId)}`);
	console.log();
}

function printIssues(diagnostics: Diagnostics): void {
	const { complete } = diagnostics;
	const issues = complete.items;

	if (issues.length === 0) {
		console.log(chalk.green("✅ No issues found"));
		return;
	}

	issues.forEach((item, index) => {
		const icon =
			item.severity === "error" ? chalk.red("❌") : chalk.yellow("⚠️");
		const message =
			item.message.length > 80
				? item.message.substring(0, 77) + "..."
				: item.message;

		console.log(`${icon} ${message}`);

		if (item.code) {
			console.log(chalk.dim(`   Code: ${item.code}`));
		}
	});

	console.log();
}

function printFooter(diagnostics: Diagnostics): void {
	console.log(chalk.dim(`Full report: ./winx-report/`));
	console.log(chalk.gray("━".repeat(50)));

	const status =
		diagnostics.errors > 0
			? chalk.red.bold("TRANSACTIONAL LOGS FAILED")
			: diagnostics.warnings > 0
				? chalk.yellow.bold("COMPLETED WITH WARNINGS")
				: chalk.green.bold("TRANSACTIONAL LOGS PASSED");

	console.log(status + "\n");
}

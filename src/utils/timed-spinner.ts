import chalk from "chalk";
import ora, { Ora, Options } from "ora";

export class TimedSpinner {
	private spinner: Ora;
	private startTime: number;
	private timeInterval: NodeJS.Timeout | null = null;
	private baseText: string;

	constructor(text: string, options?: Options) {
		this.baseText = text;
		this.startTime = Date.now();
		this.spinner = ora({ text, ...options });
	}

	start(): this {
		this.spinner.start();
		this.startTimeUpdate();
		return this;
	}

	private startTimeUpdate(): void {
		this.timeInterval = setInterval(() => {
			const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(2);
			this.spinner.text = `${this.baseText} (${elapsed}s)`;
		}, 500); // Update every 100ms for smoother display
	}

	private stopTimeUpdate(): void {
		if (this.timeInterval) {
			clearInterval(this.timeInterval);
			this.timeInterval = null;
		}
	}

	private getElapsedTime(): string {
		return ((Date.now() - this.startTime) / 1000).toFixed(2);
	}

	updateText(newText: string): void {
		this.baseText = newText;
		const elapsed = this.getElapsedTime();
		this.spinner.text = `${newText} (${elapsed}s)`;
	}

	succeed(text?: string): void {
		this.stopTimeUpdate();
		const elapsed = this.getElapsedTime();
		const elapsedText = chalk.bold.gray(`(${elapsed} secs)`);
		const finalText = text
			? `${elapsedText} ${text}`
			: `${elapsedText} ${this.baseText}`;
		this.spinner.succeed(finalText);
	}

	fail(text?: string): void {
		this.stopTimeUpdate();
		const elapsed = this.getElapsedTime();
		const finalText = text
			? `${text} (failed after ${elapsed}s)`
			: `${this.baseText} (failed after ${elapsed}s)`;
		this.spinner.fail(finalText);
	}

	warn(text?: string): void {
		this.stopTimeUpdate();
		const elapsed = this.getElapsedTime();
		const finalText = text
			? `${text} (completed with warnings in ${elapsed}s)`
			: `${this.baseText} (completed with warnings in ${elapsed}s)`;
		this.spinner.warn(finalText);
	}

	info(text?: string): void {
		this.stopTimeUpdate();
		const elapsed = this.getElapsedTime();
		const finalText = text
			? `${text} (completed in ${elapsed}s)`
			: `${this.baseText} (completed in ${elapsed}s)`;
		this.spinner.info(finalText);
	}

	stop(): void {
		this.stopTimeUpdate();
		this.spinner.stop();
	}

	// Proxy common ora methods
	get isSpinning(): boolean {
		return this.spinner.isSpinning;
	}

	get text(): string {
		return this.spinner.text;
	}

	set color(value: any) {
		this.spinner.color = value;
	}
}

// Helper function to create a timed spinner easily
export function createTimedSpinner(
	text: string,
	options?: Options
): TimedSpinner {
	return new TimedSpinner(text, options);
}

// reporter/ValidationReporter.ts
// TS/Node 18+ (ESM or CJS). No external deps.

export type Severity = "error" | "warning";

export type ReportItem = {
	severity: Severity;
	message: string;
	meta: unknown;
	code?: number | string;
	at: string; // ISO timestamp
};

export type FlowObj = {
	actionId: string;
	payload: any;
	sessionData: any;
};

export type CacheObj = {
	data: any;
	timestamp: string;
};
export type ReportRecord = {
	id: string;
	startedAt: string;
	items: ReportItem[];
	flows: Record<string, FlowObj[]>;
	cacheData: Record<string, CacheObj[]>;
};

export type Diagnostics = {
	reportId: string;
	errors: number;
	warnings: number;
	total: number;
	firstAt?: string;
	lastAt?: string;
	complete: ReportRecord;
};

class ValidationReporter {
	private currentReportId: string | null = null;
	private reports = new Map<string, ReportRecord>();

	// --- Singleton plumbing ---
	private static get globalKey() {
		return Symbol.for("@@ValidationReporterSingleton");
	}
	private constructor() {}
	static getInstance(): ValidationReporter {
		const g = globalThis as any;
		if (!g[this.globalKey]) g[this.globalKey] = new ValidationReporter();
		return g[this.globalKey] as ValidationReporter;
	}

	// 1) Create or switch the active report id
	start(reportId?: string): string {
		const id = reportId ?? `${Date.now()}`;
		if (!this.reports.has(id)) {
			this.reports.set(id, {
				id,
				startedAt: new Date().toISOString(),
				items: [],
				flows: {},
				cacheData: {},
			});
		}
		this.currentReportId = id;
		return id;
	}

	// Optional explicit switch (no-op if it already exists)
	switchTo(reportId: string) {
		this.start(reportId);
	}

	getCurrentReportId(): string | null {
		return this.currentReportId;
	}

	// 2) Record issues (error / warning). Optionally override target reportId.
	error(
		message: string,
		meta?: unknown,
		code?: number | string,
		reportId?: string
	) {
		this.add("error", message, meta, code, reportId);
	}

	warning(
		message: string,
		meta?: unknown,
		code?: number | string,
		reportId?: string
	) {
		this.add("warning", message, meta, code, reportId);
	}

	// 3) Record flows
	flowPayload(
		flowId: string,
		actionId: string,
		payload: any,
		reportId?: string
	) {
		const id = reportId ?? this.currentReportId ?? "default";
		const rec = this.ensureReport(id);
		if (!rec.flows[flowId]) rec.flows[flowId] = [];
		const entry = rec.flows[flowId].find((f) => f.actionId === actionId);
		if (entry) {
			entry.payload = payload;
		} else {
			rec.flows[flowId].push({
				actionId,
				payload,
				sessionData: undefined,
			});
		}
	}
	flowSessionData(
		flowId: string,
		actionId: string,
		sessionData: any,
		reportId?: string
	) {
		const id = reportId ?? this.currentReportId ?? "default";
		const rec = this.ensureReport(id);
		if (!rec.flows[flowId]) rec.flows[flowId] = [];
		const entry = rec.flows[flowId].find((f) => f.actionId === actionId);
		if (entry) {
			entry.sessionData = sessionData;
		} else {
			rec.flows[flowId].push({
				actionId,
				payload: undefined,
				sessionData,
			});
		}
	}

	cacheData(key: string, data: any, reportId?: string) {
		const id = reportId ?? this.currentReportId ?? "default";
		const rec = this.ensureReport(id);
		if (!rec.cacheData[key]) rec.cacheData[key] = [];
		rec.cacheData[key].push({
			data,
			timestamp: new Date().toISOString(),
		});
	}

	// 4) Diagnostics at any time (defaults to current report)
	diagnostics(reportId?: string): Diagnostics {
		const id = reportId ?? this.currentReportId ?? "default";
		const rec = this.ensureReport(id);
		let firstAt: string | undefined;
		let lastAt: string | undefined;
		let errors = 0,
			warnings = 0;
		for (const it of rec.items) {
			if (!firstAt || it.at < firstAt) firstAt = it.at;
			if (!lastAt || it.at > lastAt) lastAt = it.at;
			if (it.severity === "error") errors++;
			else warnings++;
		}
		return {
			reportId: id,
			errors,
			warnings,
			total: rec.items.length,
			firstAt,
			lastAt,
			complete: JSON.parse(JSON.stringify(rec)),
		};
	}

	// Optional helpers you might like
	snapshot(reportId?: string): ReportRecord {
		const id = reportId ?? this.currentReportId ?? "default";
		const rec = this.ensureReport(id);
		return JSON.parse(JSON.stringify(rec));
	}

	clear(reportId?: string) {
		if (reportId) {
			this.reports.delete(reportId);
			if (this.currentReportId === reportId) this.currentReportId = null;
		} else {
			this.reports.clear();
			this.currentReportId = null;
		}
	}

	// --- internals ---
	private add(
		severity: Severity,
		message: string,
		meta?: unknown,
		code?: number | string,
		reportId?: string
	) {
		const id = reportId ?? this.currentReportId ?? "default";
		const rec = this.ensureReport(id);
		rec.items.push({
			severity,
			message,
			code,
			at: new Date().toISOString(),
			meta: meta,
		});
	}

	private ensureReport(id: string): ReportRecord {
		if (!this.reports.has(id)) {
			this.reports.set(id, {
				id,
				startedAt: new Date().toISOString(),
				items: [],
				flows: {},
				cacheData: {},
			});
		}
		return this.reports.get(id)!;
	}
}

// Export the singleton instance for easy use everywhere
export const reporter = ValidationReporter.getInstance();
export default reporter;

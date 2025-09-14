export type MainRunnerConfigType = {
	createApiService: boolean;
	runFlows: boolean;
	runConfigValidations: boolean;
	runApiService: {
		skipAll: boolean;
		L0Validations: boolean;
		L1Validations: boolean;
		L1CustomValidations: boolean;
		ContextValidations: boolean;
	};
	runMockService: {
		skipAll: boolean;
	};
};

export const defaultConfig: MainRunnerConfigType = {
	createApiService: false,
	runFlows: true,
	runConfigValidations: true,
	runApiService: {
		skipAll: false,
		L0Validations: true,
		L1Validations: true,
		L1CustomValidations: true,
		ContextValidations: true,
	},
	runMockService: {
		skipAll: false,
	},
};

// Global runner config instance
let globalRunnerConfig: MainRunnerConfigType = { ...defaultConfig };

/**
 * Sets the global runner configuration
 * @param config The runner configuration to set
 */
export function setRunnerConfig(config: Partial<MainRunnerConfigType>): void {
	globalRunnerConfig = { ...globalRunnerConfig, ...config };
}

/**
 * Gets the current global runner configuration
 * @returns The current runner configuration
 */
export function getRunnerConfig(): MainRunnerConfigType {
	return { ...globalRunnerConfig };
}

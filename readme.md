# automation-winx

## workbench in a Box - ONDC Protocol workbench testing tool

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

**Automation-Winx** is a comprehensive terminal-based testing and validation framework for ONDC (Open Network for Digital Commerce) protocol implementations. It simulates the complete ONDC workbench experience directly in your terminal, enabling automated end-to-end flow testing with multi-layered validation.

## 🎯 Overview

This tool provides a "workbench in a box" solution that:

- **Validates config**: Validates the schema of configuration files
- **Api Service Simulation**: Performs L0 (Schema), L1 (Business Logic), and l1- Custom validations
- **Mock Service Simulation**: Generates realistic API responses for comprehensive flow testing
- **Reporting**: Generates detailed CLI and file-based reports with validation results

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Automation-Winx                             │
├─────────────────────┬─────────────────────┬─────────────────────────┤
│   Config Validation │    Flow Execution   │     API Validation      │
│   ├─ YAML Schemas   │    ├─ Mock Service   │     ├─ L0 (Schema)      │
│   ├─ Flow Config    │    ├─ API Service    │     ├─ L1 (Business)    │
│   └─ Factory Config │    └─ Session Mgmt   │     └─ Custom Rules     │
└─────────────────────┴─────────────────────┴─────────────────────────┘
                                │
                                ▼
                    ┌─────────────────────────┐
                    │                         │
                    │    Reporting System     │
                    │  ├─ CLI Report          │
                    │  ├─ JSON Artifacts      │
                    │  ├─ Flow Traces         │
                    │  └─ Error Analysis      │
                    └─────────────────────────┘
```

## ✨ Key Features

### 🔧 **Multi-Layer Validation Engine**

- **L0 Validations**: JSON Schema compliance checks
- **L1 Validations**: Business logic rule validation
- **L1 Custom Validations**: Domain-specific validation rules
- **Context Validations**: Protocol context and timing validations

### 🌊 **Flow Execution Engine**

- **Complete Journey Simulation**: End-to-end transaction flow execution
- **Mock Response Generation**: Intelligent API response simulation
- **Session Management**: Redis-based session state management
- **Error Handling**: Comprehensive error capture and reporting

### 📊 **Reporting**

- **CLI Reports**: Color-coded terminal output with status indicators
- **Detailed File Reports**: JSON artifacts with complete execution traces
- **Flow Visualization**: Step-by-step flow execution breakdown
- **Error Analytics**: Comprehensive error categorization and analysis

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- TypeScript

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ONDC-Official/automation-winx.git
   cd automation-winx
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set environment variables**

   ```bash
   export DOMAIN=ONDC:TRV14
   export VERSION=2.0.0
   export NODE_ENV=development
   ```

4. **Replace config files with your own in `src/config/`**

5. **Run the workbench**
   ```bash
   npm run workbench
   ```

## 📖 Usage

### Basic Execution

```bash
# Run complete workbench with all validations
npm run workbench

# Run with specific configuration
DOMAIN=ONDC:TRV14 VERSION=2.0.0 npm run workbench
```

### Configuration Options

The runner supports various configuration options via the `runner-config-manager`:

```typescript
// Customize validation behavior
setRunnerConfig({
	runFlows: true,
	runConfigValidations: true,
	runApiService: {
		L0Validations: true,
		L1Validations: true,
		L1CustomValidations: true,
		ContextValidations: true,
	},
});
```

## 📈 Reporting

### CLI Report Features

```
🔍 ONDC VALIDATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: PASSED | Errors: 0 | Warnings: 2
Report ID: 1726325400000

⚠️ Context validations skipped as per configuration
✅ All protocol flows executed successfully

Full report: ./winx-report/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VALIDATION PASSED
```

### File Report Structure

```
winx-report/
├── flows/                     # Flow execution details
│   ├── incremental-pull-journey/
│   ├── purchase-journey-without-form/
│   └── user-cancellation-full/
├── redis/                     # Session cache data
├── errors.json               # Detailed error logs
├── warnings.json             # Warning details
└── meta.json                 # Report metadata
```

## 🐛 Troubleshooting

### Common Issues

1. **Environment Variables Missing**
   check .env file or set manually:

   ```bash
   DOMAIN=ONDC:TRV14
   VERSION=2.0.0
   NODE_ENV=development
   ```

2. **Validation Module Not Found**
   - Run code generation if validation modules are missing
   - Check `generated/` directories for required files

3. **Configuration Validation Failures**
   - Validate YAML syntax in configuration files
   - Check schema compliance using provided validators

## 📚 API Reference

### Configuration Types

```typescript
type MainRunnerConfigType = {
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
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/ONDC-Official/automation-winx/issues)

- **ONDC Community**: [Official ONDC Portal](https://ondc.org/)

---

**Automation-Winx** - Bringing the power of ONDC workbench testing to your terminal! 🚀

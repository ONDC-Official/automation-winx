import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_select(input: validationInput): validationOutput {
    let totalResults = on_selectValidations(input);

    if (input.config._debug === false) {
        totalResults.forEach((r) => {
            delete r._debugInfo;
        });
    }
    if (input.config.hideParentErrors === true) {
        // delete results with valid false and no description
        totalResults = totalResults.filter(
            (r) => !(r.valid === false && !r.description),
        );
    }
    if (input.config.onlyInvalid === true) {
        const res = totalResults.filter((r) => r.valid === false);
        if (res.length === 0) {
            const targetSuccess = totalResults.find(
                (r) => r.testName === "on_selectValidations",
            );
            if (!targetSuccess) {
                throw new Error("Critical: Overall test result not found");
            }
            return [targetSuccess];
        }
        return res;
    }

    return totalResults;
}

function on_selectValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== "object") continue;
        testObj._EXTERNAL = input.externalData;

        function ON_SELECT_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];
                const domain = ["ONDC:TRV15"];
                const version = ["2.0.1"];

                function CONTEXT_REQUIRED(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.country.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**

- $.context.location.country.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_LOCATION_CITY_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.city.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_LOCATION_CITY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_LOCATION_CITY_CODE**

- $.context.location.city.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_CONTEXT_LOCATION_CITY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_DOMAIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.domain",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_DOMAIN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_DOMAIN**

- $.context.domain must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_DOMAIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TIMESTAMP(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.timestamp",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_TIMESTAMP",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_TIMESTAMP**

- $.context.timestamp must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TIMESTAMP",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BAP_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bap_id",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_BAP_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BAP_ID**

- $.context.bap_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BAP_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BAP_URI(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bap_uri",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_BAP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BAP_URI**

- $.context.bap_uri must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BAP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BPP_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bpp_id",
                                    true,
                                );
                                const var_search = ["search"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const skipCheck = validations.equalTo(
                                    action,
                                    var_search,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_BPP_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BPP_ID**

- $.context.bpp_id must be present in the payload

> **Skip if:**
>
>     - ["on_select"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BPP_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BPP_URI(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bpp_uri",
                                    true,
                                );
                                const var_search = ["search"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const skipCheck = validations.equalTo(
                                    action,
                                    var_search,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_BPP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BPP_URI**

- $.context.bpp_uri must be present in the payload

> **Skip if:**
>
>     - ["on_select"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BPP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TRANSACTION_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.transaction_id",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_TRANSACTION_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_TRANSACTION_ID**

- $.context.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TRANSACTION_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_MESSAGE_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.message_id",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_MESSAGE_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_MESSAGE_ID**

- $.context.message_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_MESSAGE_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_VERSION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.version",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_VERSION",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_VERSION**

- $.context.version must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_VERSION",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TTL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.ttl",
                                    true,
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_TTL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_TTL**

- $.context.ttl must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TTL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE,
                            REQUIRED_CONTEXT_LOCATION_CITY_CODE,
                            REQUIRED_CONTEXT_DOMAIN,
                            REQUIRED_CONTEXT_TIMESTAMP,
                            REQUIRED_CONTEXT_BAP_ID,
                            REQUIRED_CONTEXT_BAP_URI,
                            REQUIRED_CONTEXT_BPP_ID,
                            REQUIRED_CONTEXT_BPP_URI,
                            REQUIRED_CONTEXT_TRANSACTION_ID,
                            REQUIRED_CONTEXT_MESSAGE_ID,
                            REQUIRED_CONTEXT_VERSION,
                            REQUIRED_CONTEXT_TTL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CONTEXT_REQUIRED",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CONTEXT_ENUM(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function VALID_CONTEXT_LOCATION_COUNTRY_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.country.code",
                                    true,
                                );
                                const enumList = ["IND"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_CONTEXT_LOCATION_COUNTRY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_CONTEXT_LOCATION_COUNTRY_CODE**

- At least one of $.context.location.country.code must be in ["IND"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "VALID_CONTEXT_LOCATION_COUNTRY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function VALID_CONTEXT_DOMAIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.domain",
                                    true,
                                );
                                const enumList = ["ONDC:TRV14"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "VALID_CONTEXT_DOMAIN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_CONTEXT_DOMAIN**

- All elements of $.context.domain must be in ["ONDC:TRV14"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_CONTEXT_DOMAIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_CONTEXT_LOCATION_COUNTRY_CODE,
                            VALID_CONTEXT_DOMAIN,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CONTEXT_ENUM",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CONTEXT_REGEX(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REGEX_CONTEXT_LOCATION_CITY_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.location.city.code",
                                    true,
                                );
                                const reg = ["^std:\\d{3,5}$"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_CONTEXT_LOCATION_CITY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_CONTEXT_LOCATION_CITY_CODE**

- All elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REGEX_CONTEXT_LOCATION_CITY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_CONTEXT_TIMESTAMP(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.timestamp",
                                    true,
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REGEX_CONTEXT_TIMESTAMP",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_CONTEXT_TIMESTAMP**

- All elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_CONTEXT_TIMESTAMP",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_CONTEXT_BAP_URI(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.bap_uri",
                                    true,
                                );
                                const reg = ["^https:\\/\\/"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REGEX_CONTEXT_BAP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_CONTEXT_BAP_URI**

- All elements of $.context.bap_uri must follow every regex in ["^https:\/\/"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_CONTEXT_BAP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TTL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.ttl",
                                    true,
                                );
                                const reg = [
                                    "^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$",
                                ];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV15"];
                                const version = ["2.0.1"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_TTL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_TTL**

- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TTL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REGEX_CONTEXT_LOCATION_CITY_CODE,
                            REGEX_CONTEXT_TIMESTAMP,
                            REGEX_CONTEXT_BAP_URI,
                            REQUIRED_CONTEXT_TTL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CONTEXT_REGEX",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    CONTEXT_REQUIRED,
                    CONTEXT_ENUM,
                    CONTEXT_REGEX,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SELECT_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_CONTEXT","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_ITEMS_PAGE_0(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].xinput.head.index.min",
                    true,
                );

                const skipCheck = !validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function REQUIRED_ITEMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_ITEMS_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].id",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_ID**

- $.message.order.items[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_MESSAGE_ITEMS_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_NAME(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.name",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ITEMS_NAME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_NAME**

- $.message.order.items[*].descriptor.name must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_NAME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ITEMS_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_CODE**

- $.message.order.items[*].descriptor.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_LOCATIONS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].location_ids[*]",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ITEMS_LOCATIONS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_LOCATIONS**

- $.message.order.items[*].location_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_LOCATIONS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_CATEGORIES(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].category_ids[*]",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_CATEGORIES",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_CATEGORIES**

- $.message.order.items[*].category_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_CATEGORIES",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_FULFILMENTS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].fulfillment_ids[*]",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_FULFILMENTS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_FULFILMENTS**

- $.message.order.items[*].fulfillment_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_FULFILMENTS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_IMAGES_URL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.images[*].url",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_IMAGES_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_IMAGES_URL**

- $.message.order.items[*].descriptor.images[*].url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_IMAGES_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_NAME(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.head.descriptor.name",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_NAME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_NAME**

- $.message.order.items[*].xinput.head.descriptor.name must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_NAME","attr":"$.message.order.items[*].xinput.head.descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_NAME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_NAME","attr":"$.message.order.items[*].xinput.head.descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.head.index.min",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN**

- $.message.order.items[*].xinput.head.index.min must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN","attr":"$.message.order.items[*].xinput.head.index.min","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN","attr":"$.message.order.items[*].xinput.head.index.min","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.head.index.cur",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR**

- $.message.order.items[*].xinput.head.index.cur must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR","attr":"$.message.order.items[*].xinput.head.index.cur","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR","attr":"$.message.order.items[*].xinput.head.index.cur","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.head.index.max",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX**

- $.message.order.items[*].xinput.head.index.max must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX","attr":"$.message.order.items[*].xinput.head.index.max","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX","attr":"$.message.order.items[*].xinput.head.index.max","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.head.headings[*]",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS**

- $.message.order.items[*].xinput.head.headings[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS","attr":"$.message.order.items[*].xinput.head.headings[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS","attr":"$.message.order.items[*].xinput.head.headings[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_FORM(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form.id",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_FORM",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_FORM**

- $.message.order.items[*].xinput.form.id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_FORM",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form.mime_type",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME**

- $.message.order.items[*].xinput.form.mime_type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME","attr":"$.message.order.items[*].xinput.form.mime_type","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME","attr":"$.message.order.items[*].xinput.form.mime_type","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_URL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form.url",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_URL**

- $.message.order.items[*].xinput.form.url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_URL","attr":"$.message.order.items[*].xinput.form.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_URL","attr":"$.message.order.items[*].xinput.form.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form.resubmit",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT**

- $.message.order.items[*].xinput.form.resubmit must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT","attr":"$.message.order.items[*].xinput.form.resubmit","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT","attr":"$.message.order.items[*].xinput.form.resubmit","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form.multiple_sumbissions",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS**

- $.message.order.items[*].xinput.form.multiple_sumbissions must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS","attr":"$.message.order.items[*].xinput.form.multiple_sumbissions","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS","attr":"$.message.order.items[*].xinput.form.multiple_sumbissions","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_ITEMS_ID,
                            REQUIRED_ITEMS_NAME,
                            REQUIRED_ITEMS_CODE,
                            REQUIRED_ITEMS_LOCATIONS,
                            REQUIRED_MESSAGE_ITEMS_CATEGORIES,
                            REQUIRED_MESSAGE_ITEMS_FULFILMENTS,
                            REQUIRED_MESSAGE_ITEMS_IMAGES_URL,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_NAME,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_FORM,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_URL,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_NAME","attr":"$.message.order.items[*].xinput.head.descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN","attr":"$.message.order.items[*].xinput.head.index.min","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR","attr":"$.message.order.items[*].xinput.head.index.cur","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX","attr":"$.message.order.items[*].xinput.head.index.max","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS","attr":"$.message.order.items[*].xinput.head.headings[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME","attr":"$.message.order.items[*].xinput.form.mime_type","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_URL","attr":"$.message.order.items[*].xinput.form.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT","attr":"$.message.order.items[*].xinput.form.resubmit","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS","attr":"$.message.order.items[*].xinput.form.multiple_sumbissions","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_ITEMS(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function ENUM_MESSAGE_ITEMS_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const enumList = [
                                    "ABSTRACT",
                                    "ENTRY_PASS",
                                    "ADD_ON",
                                ];
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                                    true,
                                );

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "ENUM_MESSAGE_ITEMS_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ENUM_MESSAGE_ITEMS_CODE**

- All elements of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "ENUM_MESSAGE_ITEMS_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ENUM_MESSAGE_ITEMS_CODE,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_ITEMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REGEX_MESSAGE_ITEMS_IMAGES_URL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.images[*].url",
                            true,
                        );
                        const reg = [
                            "^https:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\/.*)?$",
                        ];
                        const action = ["on_select"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min",
                            true,
                        );

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REGEX_MESSAGE_ITEMS_IMAGES_URL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REGEX_MESSAGE_ITEMS_IMAGES_URL**

- All elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\/.*)?$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REGEX_MESSAGE_ITEMS_IMAGES_URL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ABSTRACT_ITEM_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.code",
                            true,
                        );
                        const var_code = ["ABSTRACT"];

                        const skipCheck = !validations.equalTo(
                            var_code,
                            usecasepath,
                        );
                        if (skipCheck) continue;

                        function REQUIRED_CANCELLATION_TERMS_ELIGIBLE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].cancellation_terms[*].cancellation_eligible",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CANCELLATION_TERMS_ELIGIBLE**

- $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].replacement_terms[*].external_ref.mimetype",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**

- $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].replacement_terms[*].external_ref.url",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**

- $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].replacement_terms[*].external_ref.url",
                                    true,
                                );
                                const reg = [
                                    "^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$",
                                ];
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**

- All elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CANCELLATION_TERMS_ELIGIBLE,
                            REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME,
                            REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL,
                            REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ABSTRACT_ITEM_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CHILD_ITEM_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.code",
                            true,
                        );
                        const var_code = ["ABSTRACT"];

                        const skipCheck = !validations.noneIn(
                            var_code,
                            usecasepath,
                        );
                        if (skipCheck) continue;

                        function REQUIRED_PARENT_ITEM_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].parent_item_id",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_PARENT_ITEM_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PARENT_ITEM_ID**

- $.message.order.items[*].parent_item_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PARENT_ITEM_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_PRICE_VAL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].price.value",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_PRICE_VAL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_PRICE_VAL**

- $.message.order.items[*].price.value must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_PRICE_VAL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].price.currency",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**

- $.message.order.items[*].price.currency must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].quantity.maximum.count",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**

- $.message.order.items[*].quantity.maximum.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].quantity.minimum.count",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**

- $.message.order.items[*].quantity.minimum.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ITEM_TAGS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const validTags = ["FARE_POLICY"];
                                const tagPath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].tags[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.allIn(
                                    tagPath,
                                    validTags,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "ITEM_TAGS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ITEM_TAGS**

- All elements of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "ITEM_TAGS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEM_TAG_FARE_POLICY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.list[*].descriptor.code",
                                    true,
                                );
                                const validValues = [
                                    "MIN_AGE",
                                    "MAX_AGE",
                                    "GENDER",
                                    "NATIONALITY",
                                ];
                                const action = ["on_select"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const var_code = ["ABSTRACT"];

                                const skipCheck =
                                    !validations.arePresent(subTags);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    subTags,
                                    validValues,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ITEM_TAG_FARE_POLICY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEM_TAG_FARE_POLICY**

- All elements of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]

> **Skip if:**
>
>     - $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEM_TAG_FARE_POLICY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_PARENT_ITEM_ID,
                            REQUIRED_MESSAGE_ITEMS_PRICE_VAL,
                            REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY,
                            REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX,
                            REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN,
                            ITEM_TAGS,
                            REQUIRED_ITEM_TAG_FARE_POLICY,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CHILD_ITEM_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ITEMS,
                    ENUM_ITEMS,
                    REGEX_MESSAGE_ITEMS_IMAGES_URL,
                    ABSTRACT_ITEM_CODE,
                    CHILD_ITEM_CODE,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SELECT_ITEMS_PAGE_0",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_ITEMS_PAGE_0","action":["on_select"],"usecasepath":"$.message.order.items[*].xinput.head.index.min","_CONTINUE_":"!(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_NAME","attr":"$.message.order.items[*].xinput.head.descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN","attr":"$.message.order.items[*].xinput.head.index.min","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR","attr":"$.message.order.items[*].xinput.head.index.cur","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX","attr":"$.message.order.items[*].xinput.head.index.max","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS","attr":"$.message.order.items[*].xinput.head.headings[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME","attr":"$.message.order.items[*].xinput.form.mime_type","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_URL","attr":"$.message.order.items[*].xinput.form.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT","attr":"$.message.order.items[*].xinput.form.resubmit","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS","attr":"$.message.order.items[*].xinput.form.multiple_sumbissions","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}]},{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_ITEMS_PAGE_1(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].xinput.form_response.submission_id",
                    true,
                );
                const action = ["on_select"];

                const skipCheck = !validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function REQUIRED_ITEMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_ITEMS_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].id",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_ID**

- $.message.order.items[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_MESSAGE_ITEMS_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_NAME(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.name",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ITEMS_NAME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_NAME**

- $.message.order.items[*].descriptor.name must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_NAME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ITEMS_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_CODE**

- $.message.order.items[*].descriptor.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_LOCATIONS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].location_ids[*]",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ITEMS_LOCATIONS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_LOCATIONS**

- $.message.order.items[*].location_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_LOCATIONS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].category_ids[*]",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**

- $.message.order.items[*].category_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].fulfillment_ids[*]",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**

- $.message.order.items[*].fulfillment_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.images[*].url",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**

- $.message.order.items[*].descriptor.images[*].url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_XINPUT_FORM(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form.id",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_XINPUT_FORM",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_XINPUT_FORM**

- $.message.order.items[*].xinput.form.id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_XINPUT_FORM",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form_response.status",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE**

- $.message.order.items[*].xinput.form_response.status must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION**

- $.message.order.items[*].xinput.form_response.submission_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_ITEMS_ID,
                            REQUIRED_ITEMS_NAME,
                            REQUIRED_ITEMS_CODE,
                            REQUIRED_ITEMS_LOCATIONS,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL,
                            REQUIRED_MESSAGE_ITEMS_XINPUT_FORM,
                            REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE,
                            REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_ITEMS(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function ENUM_MESSAGE_ITEMS_CODE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const enumList = [
                                    "ABSTRACT",
                                    "ENTRY_PASS",
                                    "ADD_ON",
                                ];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "ENUM_MESSAGE_ITEMS_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ENUM_MESSAGE_ITEMS_CODE**

- All elements of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "ENUM_MESSAGE_ITEMS_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ENUM_MESSAGE_ITEMS_CODE,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_ITEMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REGEX_MESSAGE_ITEMS_IMAGES_URL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.images[*].url",
                            true,
                        );
                        const reg = ["^https:\\/\\/"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REGEX_MESSAGE_ITEMS_IMAGES_URL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REGEX_MESSAGE_ITEMS_IMAGES_URL**

- All elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\/\/"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REGEX_MESSAGE_ITEMS_IMAGES_URL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ABSTRACT_ITEM_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.code",
                            true,
                        );
                        const var_code = ["ABSTRACT"];

                        const skipCheck = !validations.equalTo(
                            var_code,
                            usecasepath,
                        );
                        if (skipCheck) continue;

                        function REQUIRED_CANCELLATION_TERMS_ELIGIBLE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].cancellation_terms[*].cancellation_eligible",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CANCELLATION_TERMS_ELIGIBLE**

- $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].replacement_terms[*].external_ref.mimetype",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**

- $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].replacement_terms[*].external_ref.url",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**

- $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].replacement_terms[*].external_ref.url",
                                    true,
                                );
                                const reg = [
                                    "^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$",
                                ];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**

- All elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CANCELLATION_TERMS_ELIGIBLE,
                            REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME,
                            REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL,
                            REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ABSTRACT_ITEM_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CHILD_ITEM_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.code",
                            true,
                        );
                        const var_code = ["ABSTRACT"];

                        const skipCheck = !validations.noneIn(
                            var_code,
                            usecasepath,
                        );
                        if (skipCheck) continue;

                        function REQUIRED_PARENT_ITEM_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].parent_item_id",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_PARENT_ITEM_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PARENT_ITEM_ID**

- $.message.order.items[*].parent_item_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PARENT_ITEM_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_PRICE_VAL(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].price.value",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_PRICE_VAL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_PRICE_VAL**

- $.message.order.items[*].price.value must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_PRICE_VAL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].price.currency",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**

- $.message.order.items[*].price.currency must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].quantity.maximum.count",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**

- $.message.order.items[*].quantity.maximum.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].quantity.minimum.count",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**

- $.message.order.items[*].quantity.minimum.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ITEM_TAGS(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const validTags = ["FARE_POLICY"];
                                const tagPath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.items[*].tags[*].descriptor.code",
                                    true,
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const validate = validations.allIn(
                                    tagPath,
                                    validTags,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "ITEM_TAGS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ITEM_TAGS**

- All elements of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "ITEM_TAGS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEM_TAG_FARE_POLICY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.list[*].descriptor.code",
                                    true,
                                );
                                const validValues = [
                                    "MIN_AGE",
                                    "MAX_AGE",
                                    "GENDER",
                                    "NATIONALITY",
                                ];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.items[*].descriptor.code",
                                    true,
                                );
                                const action = ["on_select"];
                                const var_code = ["ABSTRACT"];

                                const skipCheck =
                                    !validations.arePresent(subTags);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    subTags,
                                    validValues,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ITEM_TAG_FARE_POLICY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEM_TAG_FARE_POLICY**

- All elements of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]

> **Skip if:**
>
>     - $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code is not in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEM_TAG_FARE_POLICY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_PARENT_ITEM_ID,
                            REQUIRED_MESSAGE_ITEMS_PRICE_VAL,
                            REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY,
                            REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX,
                            REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN,
                            ITEM_TAGS,
                            REQUIRED_ITEM_TAG_FARE_POLICY,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CHILD_ITEM_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ITEMS,
                    ENUM_ITEMS,
                    REGEX_MESSAGE_ITEMS_IMAGES_URL,
                    ABSTRACT_ITEM_CODE,
                    CHILD_ITEM_CODE,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SELECT_ITEMS_PAGE_1",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_ITEMS_PAGE_1","usecasepath":"$.message.order.items[*].xinput.form_response.submission_id","_CONTINUE_":"!(usecasepath are present)","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}]},{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_FULFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

                function REQUIRED_FULFILLMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_FULFILLMENTS_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*].id",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_FULFILLMENTS_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_FULFILLMENTS_ID**

- $.message.order.fulfillments[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_FULFILLMENTS_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_FULFILLMENTS_TYPE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*].type",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_FULFILLMENTS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_FULFILLMENTS_TYPE**

- $.message.order.fulfillments[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_FULFILLMENTS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*].stops[*].type",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE**

- $.message.order.fulfillments[*].stops[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*].vehicle.category",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY**

- $.message.order.fulfillments[*].vehicle.category must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_FULFILLMENTS_ID,
                            REQUIRED_MESSAGE_FULFILLMENTS_TYPE,
                            REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE,
                            REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_FULFILLMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_FULFILLMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*].type",
                                    true,
                                );
                                const enumList = ["VISIT"];
                                const action = ["on_select"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE**

- All elements of $.message.order.fulfillments[*].type must be in ["VISIT"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*].stops[*].type",
                                    true,
                                );
                                const enumList = ["START"];
                                const action = ["on_select"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE**

- All elements of $.message.order.fulfillments[*].stops[*].type must be in ["START"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.fulfillments[*].vehicle.category",
                                    true,
                                );
                                const enumList = ["SITE"];
                                const action = ["on_select"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY**

- All elements of $.message.order.fulfillments[*].vehicle.category must be in ["SITE"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE,
                            REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE,
                            REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_FULFILLMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_FULFILLMENTS,
                    ENUM_FULFILLMENTS,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SELECT_FULFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_FULFILLMENTS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ENUM_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_PROVIDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

                function REQUIRED_ORDER_PROVIDER(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.id",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_PROVIDER",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ORDER_PROVIDER**

- $.message.order.provider.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_PROVIDER",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.descriptor.name",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME**

- $.message.order.provider.descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.descriptor.images[*].url",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES**

- $.message.order.provider.descriptor.images[*].url must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.locations[*].id",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**

- $.message.order.provider.locations[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.locations[*].gps",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS**

- $.message.order.provider.locations[*].gps must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.locations[*].descriptor.name",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**

- $.message.order.provider.locations[*].descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.locations[*].descriptor.short_desc",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**

- $.message.order.provider.locations[*].descriptor.short_desc must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ORDER_PROVIDER,
                    REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME,
                    REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES,
                    REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID,
                    REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS,
                    REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME,
                    REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SELECT_PROVIDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_PROVIDER","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_CANCELLATION_TERMS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

                function REQUIRED_CANCELLATION_TERMS_ELIGIBLE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation_terms[*].cancellation_eligible",
                            true,
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CANCELLATION_TERMS_ELIGIBLE**

- $.message.order.cancellation_terms[*].cancellation_eligible must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation_terms[*].external_ref.url",
                            true,
                        );
                        const useCasePath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation_terms[*].external_ref.url",
                            true,
                        );
                        const action = ["on_select"];

                        const skipCheck = !validations.arePresent(useCasePath);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL**

- $.message.order.cancellation_terms[*].external_ref.url must be present in the payload

> **Skip if:**
>
>     - $.message.order.cancellation_terms[*].external_ref.url is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation_terms[*].external_ref.mimetype",
                            true,
                        );
                        const useCasePath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation_terms[*].external_ref.mimetype",
                            true,
                        );
                        const action = ["on_select"];

                        const skipCheck = !validations.arePresent(useCasePath);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME**

- $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload

> **Skip if:**
>
>     - $.message.order.cancellation_terms[*].external_ref.mimetype is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_CANCELLATION_TERMS_ELIGIBLE,
                    REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL,
                    REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SELECT_CANCELLATION_TERMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_CANCELLATION_TERMS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_QUOTE(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

                function REQUIRED_QUOTE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_QUOTE_TITLE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].title",
                                    true,
                                );
                                const action = ["on_select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_QUOTE_TITLE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_QUOTE_TITLE**

- $.message.order.quote.breakup[*].title must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_TITLE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_QUOTE_ITEM_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].item.id",
                                    true,
                                );
                                const useCasePath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].title",
                                    true,
                                );
                                const var_title = ["TAX"];
                                const action = ["on_select"];

                                const skipCheck = validations.equalTo(
                                    var_title,
                                    useCasePath,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_QUOTE_ITEM_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_QUOTE_ITEM_ID**

- $.message.order.quote.breakup[*].item.id must be present in the payload

> **Skip if:**
>
>     - ["TAX"] equals $.message.order.quote.breakup[*].title`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_ITEM_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_QUOTE_ITEM_PRICE_CURRENCY(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].item.price.currency",
                                    true,
                                );
                                const useCasePath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].title",
                                    true,
                                );
                                const var_title = ["TAX"];
                                const action = ["on_select"];

                                const skipCheck = validations.equalTo(
                                    var_title,
                                    useCasePath,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_QUOTE_ITEM_PRICE_CURRENCY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_QUOTE_ITEM_PRICE_CURRENCY**

- $.message.order.quote.breakup[*].item.price.currency must be present in the payload

> **Skip if:**
>
>     - ["TAX"] equals $.message.order.quote.breakup[*].title`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_QUOTE_ITEM_PRICE_CURRENCY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_QUOTE_ITEM_PRICE_VALUE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].item.price.value",
                                    true,
                                );
                                const useCasePath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].title",
                                    true,
                                );
                                const var_title = ["TAX"];
                                const action = ["on_select"];

                                const skipCheck = validations.equalTo(
                                    var_title,
                                    useCasePath,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_QUOTE_ITEM_PRICE_VALUE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_QUOTE_ITEM_PRICE_VALUE**

- $.message.order.quote.breakup[*].item.price.value must be present in the payload

> **Skip if:**
>
>     - ["TAX"] equals $.message.order.quote.breakup[*].title`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_ITEM_PRICE_VALUE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_QUOTE_TITLE,
                            REQUIRED_QUOTE_ITEM_ID,
                            REQUIRED_QUOTE_ITEM_PRICE_CURRENCY,
                            REQUIRED_QUOTE_ITEM_PRICE_VALUE,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_QUOTE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_QUOTE(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function ENUM_QUOTE_TITLE(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                if (!testObj || typeof testObj !== "object")
                                    continue;
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.order.quote.breakup[*].title",
                                    true,
                                );
                                const enumList = [
                                    "BASE_FARE",
                                    "TAX",
                                    "ADD_ONS",
                                    "REFUND",
                                    "CANCELLATION_CHARGES",
                                ];
                                const action = ["on_select"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "ENUM_QUOTE_TITLE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ENUM_QUOTE_TITLE**

- All elements of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "TAX", "ADD_ONS", "REFUND", "CANCELLATION_CHARGES"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "ENUM_QUOTE_TITLE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ENUM_QUOTE_TITLE,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_QUOTE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_QUOTE","_RETURN_":[{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_QUOTE,
                    ENUM_QUOTE,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SELECT_QUOTE",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_QUOTE","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ENUM_QUOTE","_RETURN_":[{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_SELECT_CONTEXT,
            ON_SELECT_ITEMS_PAGE_0,
            ON_SELECT_ITEMS_PAGE_1,
            ON_SELECT_FULFILLMENTS,
            ON_SELECT_PROVIDER,
            ON_SELECT_CANCELLATION_TERMS,
            ON_SELECT_QUOTE,
        ];

        let allResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            allResults = [...allResults, ...subResult];
        }
        subResults = allResults;
        valid = subResults.every((r) => r.valid);

        // delete testObj._EXTERNAL;
    }
    return [
        {
            testName: "on_selectValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_selectValidations","_RETURN_":[{"_NAME_":"ON_SELECT_CONTEXT","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"domain":["ONDC:TRV15"],"version":["2.0.1"]}]}]},{"_NAME_":"ON_SELECT_ITEMS_PAGE_0","action":["on_select"],"usecasepath":"$.message.order.items[*].xinput.head.index.min","_CONTINUE_":"!(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_NAME","attr":"$.message.order.items[*].xinput.head.descriptor.name","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN","attr":"$.message.order.items[*].xinput.head.index.min","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR","attr":"$.message.order.items[*].xinput.head.index.cur","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX","attr":"$.message.order.items[*].xinput.head.index.max","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS","attr":"$.message.order.items[*].xinput.head.headings[*]","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME","attr":"$.message.order.items[*].xinput.form.mime_type","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_URL","attr":"$.message.order.items[*].xinput.form.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT","attr":"$.message.order.items[*].xinput.form.resubmit","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS","attr":"$.message.order.items[*].xinput.form.multiple_sumbissions","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"}]},{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.head.index.min"},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_select"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}]},{"_NAME_":"ON_SELECT_ITEMS_PAGE_1","usecasepath":"$.message.order.items[*].xinput.form_response.submission_id","_CONTINUE_":"!(usecasepath are present)","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]}]},{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form_response.submission_id","action":["on_select"]},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","action":["on_select"],"var_code":["ABSTRACT"]}]}]},{"_NAME_":"ON_SELECT_FULFILLMENTS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ENUM_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.order.fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY","attr":"$.message.order.fulfillments[*].vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}]},{"_NAME_":"ON_SELECT_PROVIDER","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ON_SELECT_CANCELLATION_TERMS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ON_SELECT_QUOTE","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ENUM_QUOTE","_RETURN_":[{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}]}]}
`,
            },
        },
        ...subResults,
    ];
}

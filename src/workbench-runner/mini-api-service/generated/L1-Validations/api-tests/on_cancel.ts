import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_cancel(input: validationInput): validationOutput {
    let totalResults = on_cancelValidations(input);

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
                (r) => r.testName === "on_cancelValidations",
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

function on_cancelValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        if (!testObj || typeof testObj !== "object") continue;
        testObj._EXTERNAL = input.externalData;

        function ON_CANCEL_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const domain = ["ONDC:TRV14"];
                const version = ["2.0.0"];

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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
>     - ["on_cancel"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
>     - ["on_cancel"] equals ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                    testName: "ON_CANCEL_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_CONTEXT","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_ORDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function REQUIRED_ON_CONFIRM_ORDER(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_ORDER_ID(
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
                                    "$.message.order.id",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ORDER_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_ID**

- $.message.order.id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_STATUS(
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
                                    "$.message.order.status",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ORDER_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_STATUS**

- $.message.order.status must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ON_CONFIRM_CREATED_AT(
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
                                    "$.message.order.created_at",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ON_CONFIRM_CREATED_AT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ON_CONFIRM_CREATED_AT**

- $.message.order.created_at must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ON_CONFIRM_CREATED_AT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ON_CONFIRM_UPDATED_AT(
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
                                    "$.message.order.updated_at",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ON_CONFIRM_UPDATED_AT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ON_CONFIRM_UPDATED_AT**

- $.message.order.updated_at must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ON_CONFIRM_UPDATED_AT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_ORDER_ID,
                            REQUIRED_ORDER_STATUS,
                            REQUIRED_ON_CONFIRM_CREATED_AT,
                            REQUIRED_ON_CONFIRM_UPDATED_AT,
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
                            testName: "REQUIRED_ON_CONFIRM_ORDER",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ON_CONFIRM_ORDER","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_ENUM_ON_CONFIRM_ORDER(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function VALID_ENUM_ORDER_STATUS(
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
                                    "$.message.order.status",
                                    true,
                                );
                                const enumList = [
                                    "SOFT_CANCEL",
                                    "CONFIRM_CANCEL",
                                    "ACTIVE",
                                    "COMPLETED",
                                    "CANCELLED",
                                ];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "VALID_ENUM_ORDER_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_ENUM_ORDER_STATUS**

- At least one of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETED", "CANCELLED"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT_CANCEL","CONFIRM_CANCEL","ACTIVE","COMPLETED","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_ENUM_ORDER_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT_CANCEL","CONFIRM_CANCEL","ACTIVE","COMPLETED","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_ON_CONFIRM_CREATED_AT(
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
                                    "$.message.order.created_at",
                                    true,
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_ON_CONFIRM_CREATED_AT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_ON_CONFIRM_CREATED_AT**

- All elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_ON_CONFIRM_CREATED_AT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_ON_CONFIRM_UPDATED_AT(
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
                                    "$.message.order.updated_at",
                                    true,
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_ON_CONFIRM_UPDATED_AT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_ON_CONFIRM_UPDATED_AT**

- All elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_ON_CONFIRM_UPDATED_AT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_ENUM_ORDER_STATUS,
                            REGEX_ON_CONFIRM_CREATED_AT,
                            REGEX_ON_CONFIRM_UPDATED_AT,
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
                            testName: "VALID_ENUM_ON_CONFIRM_ORDER",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_ON_CONFIRM_ORDER","_RETURN_":[{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT_CANCEL","CONFIRM_CANCEL","ACTIVE","COMPLETED","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REGEX_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REGEX_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ON_CONFIRM_ORDER,
                    VALID_ENUM_ON_CONFIRM_ORDER,
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
                    testName: "ON_CANCEL_ORDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_ORDER","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ON_CONFIRM_ORDER","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"VALID_ENUM_ON_CONFIRM_ORDER","_RETURN_":[{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT_CANCEL","CONFIRM_CANCEL","ACTIVE","COMPLETED","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REGEX_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REGEX_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_ITEMS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
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

- All elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\/\/"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
                                const action = ["on_cancel"];
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
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}
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
{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}
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
                    testName: "ON_CANCEL_ITEMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_ITEMS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_FULFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function REQUIRED_FULFILLMENT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_ORDER_FULFILLMENT_ID(
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_FULFILLMENT_ID**

- $.message.order.fulfillments[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_FULFILLMENT_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_FULFILLMENT_STOPS(
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_FULFILLMENT_STOPS**

- $.message.order.fulfillments[*].stops[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                        "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_FULFILLMENT_TIME(
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
                                    "$.message.order.fulfillments[*].stops[*].time.timestamp",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_TIME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_FULFILLMENT_TIME**

- $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_FULFILLMENT_TIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_STATE(
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
                                    "$.message.order.fulfillments[*].state.descriptor.code",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_FULFILMENT_STATE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_STATE**

- $.message.order.fulfillments[*].state.descriptor.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_STATE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_AUTH(
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
                                    "$.message.order.fulfillments[*].stops[*].authorization.type",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_FULFILMENT_AUTH",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_AUTH**

- $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_AUTH",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_TOKEN(
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
                                    "$.message.order.fulfillments[*].stops[*].authorization.token",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_FULFILMENT_TOKEN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_TOKEN**

- $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_TOKEN","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_TOKEN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_TOKEN","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_VALID_TO(
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
                                    "$.message.order.fulfillments[*].stops[*].authorization.token",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_FULFILMENT_VALID_TO",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_VALID_TO**

- $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_VALID_TO","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_VALID_TO",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_VALID_TO","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_AUTH_STATUS(
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
                                    "$.message.order.fulfillments[*].stops[*].authorization.status",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_FULFILMENT_AUTH_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_AUTH_STATUS**

- $.message.order.fulfillments[*].stops[*].authorization.status must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_AUTH_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_ORDER_FULFILLMENT_ID,
                            REQUIRED_ORDER_FULFILLMENT_STOPS,
                            REQUIRED_ORDER_FULFILLMENT_TIME,
                            REQUIRED_FULFILMENT_STATE,
                            REQUIRED_FULFILMENT_AUTH,
                            REQUIRED_FULFILMENT_TOKEN,
                            REQUIRED_FULFILMENT_VALID_TO,
                            REQUIRED_FULFILMENT_AUTH_STATUS,
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
                            testName: "REQUIRED_FULFILLMENT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_TOKEN","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_VALID_TO","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_FULFILLMENT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_ORDER_FULFILLMENT_STOPS(
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_FULFILLMENT_STOPS**

- All elements of $.message.order.fulfillments[*].stops[*].type must be in ["START"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                        "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_FULFILLMENT_TIME(
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
                                    "$.message.order.fulfillments[*].stops[*].time.timestamp",
                                    true,
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_TIME",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_FULFILLMENT_TIME**

- All elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_FULFILLMENT_TIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_STATE(
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
                                    "$.message.order.fulfillments[*].state.descriptor.code",
                                    true,
                                );
                                const enumList = [
                                    "COMPLETED",
                                    "IN_PROGRESS",
                                    "CONFIRMED",
                                ];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName:
                                                "REQUIRED_FULFILMENT_STATE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_STATE**

- All elements of $.message.order.fulfillments[*].state.descriptor.code must be in ["COMPLETED", "IN_PROGRESS", "CONFIRMED"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","enumList":["COMPLETED","IN_PROGRESS","CONFIRMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_STATE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","enumList":["COMPLETED","IN_PROGRESS","CONFIRMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_AUTH(
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
                                    "$.message.order.fulfillments[*].stops[*].authorization.type",
                                    true,
                                );
                                const enumList = ["QR"];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName:
                                                "REQUIRED_FULFILMENT_AUTH",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_AUTH**

- All elements of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","enumList":["QR"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_AUTH",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","enumList":["QR"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_FULFILMENT_AUTH_STATUS(
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
                                    "$.message.order.fulfillments[*].stops[*].authorization.status",
                                    true,
                                );
                                const enumList = ["CLAIMED", "UNCLAIMED"];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName:
                                                "REQUIRED_FULFILMENT_AUTH_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_FULFILMENT_AUTH_STATUS**

- All elements of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["CLAIMED", "UNCLAIMED"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","enumList":["CLAIMED","UNCLAIMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_AUTH_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","enumList":["CLAIMED","UNCLAIMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_ORDER_FULFILLMENT_STOPS,
                            REQUIRED_ORDER_FULFILLMENT_TIME,
                            REQUIRED_FULFILMENT_STATE,
                            REQUIRED_FULFILMENT_AUTH,
                            REQUIRED_FULFILMENT_AUTH_STATUS,
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
                            testName: "ENUM_FULFILLMENT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","enumList":["COMPLETED","IN_PROGRESS","CONFIRMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","enumList":["QR"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","enumList":["CLAIMED","UNCLAIMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_FULFILLMENT,
                    ENUM_FULFILLMENT,
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
                    testName: "ON_CANCEL_FULFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_FULFILLMENTS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_TOKEN","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_VALID_TO","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","enumList":["COMPLETED","IN_PROGRESS","CONFIRMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","enumList":["QR"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","enumList":["CLAIMED","UNCLAIMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_PROVIDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                    testName: "ON_CANCEL_PROVIDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_PROVIDER","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_CANCELLATION_TERMS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                    testName: "ON_CANCEL_CANCELLATION_TERMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_CANCELLATION_TERMS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_QUOTE(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

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
{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

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
{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

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
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

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
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"REQUIRED_QUOTE","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
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
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName: "ENUM_QUOTE_TITLE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **ENUM_QUOTE_TITLE**

- All elements of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "TAX", "ADD_ONS", "REFUND", "CANCELLATION_CHARGES"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
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
{"_NAME_":"ENUM_QUOTE","_RETURN_":[{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
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
                    testName: "ON_CANCEL_QUOTE",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_QUOTE","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_QUOTE","_RETURN_":[{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_PAYMENTS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function REQUIRED_PAYMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_PAYMENTS_ID(
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
                                    "$.message.order.payments[*].id",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_PAYMENTS_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_ID**

- $.message.order.payments[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_PAYMENTS_COLLECTOR(
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
                                    "$.message.order.payments[*].collected_by",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_PAYMENTS_COLLECTOR",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_COLLECTOR**

- $.message.order.payments[*].collected_by must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_COLLECTOR",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_PAYMENTS_STATUS(
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
                                    "$.message.order.payments[*].status",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_PAYMENTS_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_STATUS**

- $.message.order.payments[*].status must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_PAYMENTS_TYPE(
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
                                    "$.message.order.payments[*].type",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_PAYMENTS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_TYPE**

- $.message.order.payments[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_PAYMENTS_ID,
                            REQUIRED_PAYMENTS_COLLECTOR,
                            REQUIRED_PAYMENTS_STATUS,
                            REQUIRED_PAYMENTS_TYPE,
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
                            testName: "REQUIRED_PAYMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_PAYMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_PAYMENTS_COLLECTOR(
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
                                    "$.message.order.payments[*].collected_by",
                                    true,
                                );
                                const enumList = ["BAP", "BPP"];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName:
                                                "REQUIRED_PAYMENTS_COLLECTOR",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_COLLECTOR**

- All elements of $.message.order.payments[*].collected_by must be in ["BAP", "BPP"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","enumList":["BAP","BPP"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_COLLECTOR",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","enumList":["BAP","BPP"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_PAYMENTS_STATUS(
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
                                    "$.message.order.payments[*].status",
                                    true,
                                );
                                const enumList = ["PAID", "NOT-PAID"];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName:
                                                "REQUIRED_PAYMENTS_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_STATUS**

- All elements of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_PAYMENTS_TYPE(
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
                                    "$.message.order.payments[*].type",
                                    true,
                                );
                                const enumList = ["PRE-ORDER"];
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
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
                                            testName: "REQUIRED_PAYMENTS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_TYPE**

- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_PAYMENTS_COLLECTOR,
                            REQUIRED_PAYMENTS_STATUS,
                            REQUIRED_PAYMENTS_TYPE,
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
                            testName: "ENUM_PAYMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_PAYMENTS","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","enumList":["BAP","BPP"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_PARAMS(
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
                            "$.message.order.payments[*].params.transaction_id",
                            true,
                        );
                        const useCasePath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].status",
                            true,
                        );
                        const var_status = ["PAID"];

                        const skipCheck = !validations.equalTo(
                            var_status,
                            useCasePath,
                        );
                        if (skipCheck) continue;

                        function REQUIRED_PAYMENTS_TRANSACTION_ID(
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
                                    "$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );
                                const useCasePath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.payments[*].status",
                                    true,
                                );
                                const var_status = ["PAID"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_PAYMENTS_TRANSACTION_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_TRANSACTION_ID**

- $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_TRANSACTION_ID","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}
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
                                        "REQUIRED_PAYMENTS_TRANSACTION_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_TRANSACTION_ID","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_PAYMENTS_CURRENCY(
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
                                    "$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );
                                const useCasePath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.payments[*].status",
                                    true,
                                );
                                const var_status = ["PAID"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_PAYMENTS_CURRENCY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_CURRENCY**

- $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_CURRENCY","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_CURRENCY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_CURRENCY","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_PAYMENTS_AMOUNT(
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
                                    "$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id",
                                    true,
                                );
                                const action = ["on_cancel"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.error.code",
                                    true,
                                );
                                const useCasePath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.order.payments[*].status",
                                    true,
                                );
                                const var_status = ["PAID"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_PAYMENTS_AMOUNT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_PAYMENTS_AMOUNT**

- $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_AMOUNT","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PAYMENTS_AMOUNT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_AMOUNT","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_PAYMENTS_TRANSACTION_ID,
                            REQUIRED_PAYMENTS_CURRENCY,
                            REQUIRED_PAYMENTS_AMOUNT,
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
                            testName: "REQUIRED_PAYMENT_PARAMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_PARAMS","attr":"$.message.order.payments[*].params.transaction_id","useCasePath":"$.message.order.payments[*].status","var_status":["PAID"],"_CONTINUE_":"!(var_status equal to useCasePath)","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_TRANSACTION_ID","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]},{"_NAME_":"REQUIRED_PAYMENTS_CURRENCY","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]},{"_NAME_":"REQUIRED_PAYMENTS_AMOUNT","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_PAYMENTS,
                    ENUM_PAYMENTS,
                    REQUIRED_PAYMENT_PARAMS,
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
                    testName: "ON_CANCEL_PAYMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_PAYMENTS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_PAYMENTS","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","enumList":["BAP","BPP"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"REQUIRED_PAYMENT_PARAMS","attr":"$.message.order.payments[*].params.transaction_id","useCasePath":"$.message.order.payments[*].status","var_status":["PAID"],"_CONTINUE_":"!(var_status equal to useCasePath)","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_TRANSACTION_ID","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]},{"_NAME_":"REQUIRED_PAYMENTS_CURRENCY","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]},{"_NAME_":"REQUIRED_PAYMENTS_AMOUNT","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_PAYMENTS_TAG(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function PAYMENT_TAG_GROUP(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const validTags = ["BAP_TERMS", "BPP_TERMS"];
                        const tagPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.tags[*].descriptor.code",
                            true,
                        );
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const validate = validations.allIn(tagPath, validTags);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "PAYMENT_TAG_GROUP",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **PAYMENT_TAG_GROUP**

- All elements of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BPP_TERMS"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "PAYMENT_TAG_GROUP",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_TAG_BAP_TERMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                            true,
                        );
                        const validValues = [
                            "BUYER_FINDER_FEES_TYPE",
                            "BUYER_FINDER_FEES_PERCENTAGE",
                            "STATIC_TERMS",
                            "SETTLEMENT_BASIS",
                            "SETTLEMENT_WINDOW",
                        ];
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const skipCheck = !validations.arePresent(subTags);
                        if (skipCheck) continue;

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_TAG_BAP_TERMS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PAYMENT_TAG_BAP_TERMS**

- All elements of $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]

> **Skip if:**
>
>     - $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_TAG_BAP_TERMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_TAG_BPP_TERMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                            true,
                        );
                        const validValues = [
                            "BUYER_FINDER_FEES_TYPE",
                            "BUYER_FINDER_FEES_PERCENTAGE",
                            "STATIC_TERMS",
                            "MANDATORY_ARBITRATION",
                            "COURT_JURISDICTION",
                            "DELAY_INTEREST",
                            "SETTLEMENT_AMOUNT",
                            "SETTLEMENT_TYPE",
                            "SETTLEMENT_BANK_CODE",
                            "SETTLEMENT_BANK_ACCOUNT_NUMBER",
                        ];
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const skipCheck = !validations.arePresent(subTags);
                        if (skipCheck) continue;

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_TAG_BPP_TERMS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PAYMENT_TAG_BPP_TERMS**

- All elements of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "SETTLEMENT_AMOUNT", "SETTLEMENT_TYPE", "SETTLEMENT_BANK_CODE", "SETTLEMENT_BANK_ACCOUNT_NUMBER"]

> **Skip if:**
>
>     - $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","SETTLEMENT_AMOUNT","SETTLEMENT_TYPE","SETTLEMENT_BANK_CODE","SETTLEMENT_BANK_ACCOUNT_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_TAG_BPP_TERMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","SETTLEMENT_AMOUNT","SETTLEMENT_TYPE","SETTLEMENT_BANK_CODE","SETTLEMENT_BANK_ACCOUNT_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    PAYMENT_TAG_GROUP,
                    REQUIRED_PAYMENT_TAG_BAP_TERMS,
                    REQUIRED_PAYMENT_TAG_BPP_TERMS,
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
                    testName: "ON_CANCEL_PAYMENTS_TAG",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_PAYMENTS_TAG","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","SETTLEMENT_AMOUNT","SETTLEMENT_TYPE","SETTLEMENT_BANK_CODE","SETTLEMENT_BANK_ACCOUNT_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_CANCELLATION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function REQUIRED_CANCELLED_BY(
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
                            "$.message.order.cancellation.cancelled_by",
                            true,
                        );
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CANCELLED_BY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CANCELLED_BY**

- $.message.order.cancellation.cancelled_by must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CANCELLED_BY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_REASON_BY(
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
                            "$.message.order.cancellation.reason.descriptor.code",
                            true,
                        );
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_REASON_BY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_REASON_BY**

- $.message.order.cancellation.reason.descriptor.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_REASON_BY","attr":"$.message.order.cancellation.reason.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_REASON_BY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_REASON_BY","attr":"$.message.order.cancellation.reason.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_ENUM_REQUIRED_CANCELLED_BY(
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
                            "$.message.order.cancellation.cancelled_by",
                            true,
                        );
                        const enumList = ["CONSUMER", "PROVIDER"];
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const validate = validations.anyIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "VALID_ENUM_REQUIRED_CANCELLED_BY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_ENUM_REQUIRED_CANCELLED_BY**

- At least one of $.message.order.cancellation.cancelled_by must be in ["CONSUMER", "PROVIDER"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","enumList":["CONSUMER","PROVIDER"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_ENUM_REQUIRED_CANCELLED_BY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","enumList":["CONSUMER","PROVIDER"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_ENUM_CANCELLATION_REASON_ID(
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
                            "$.message.order.cancellation.reason.descriptor.code",
                            true,
                        );
                        const enumList = [
                            "000",
                            "001",
                            "002",
                            "003",
                            "004",
                            "005",
                            "011",
                            "012",
                            "013",
                            "014",
                        ];
                        const action = ["on_cancel"];
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const validate = validations.anyIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "VALID_ENUM_CANCELLATION_REASON_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_ENUM_CANCELLATION_REASON_ID**

- At least one of $.message.order.cancellation.reason.descriptor.code must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.descriptor.code","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_ENUM_CANCELLATION_REASON_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.descriptor.code","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_CANCELLED_BY,
                    REQUIRED_REASON_BY,
                    VALID_ENUM_REQUIRED_CANCELLED_BY,
                    VALID_ENUM_CANCELLATION_REASON_ID,
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
                    testName: "ON_CANCEL_CANCELLATION",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_CANCELLATION","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_REASON_BY","attr":"$.message.order.cancellation.reason.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"VALID_ENUM_REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","enumList":["CONSUMER","PROVIDER"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"VALID_ENUM_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.descriptor.code","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CANCELLATION_ERROR(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                if (!testObj || typeof testObj !== "object") continue;
                testObj._EXTERNAL = input.externalData;
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                    true,
                );

                const skipCheck = !validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function ERROR_CODE(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        if (!testObj || typeof testObj !== "object") continue;
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.error.code",
                            true,
                        );
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "ERROR_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ERROR_CODE**

- $.error.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ERROR_CODE","attr":"$.error.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ERROR_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ERROR_CODE","attr":"$.error.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ERROR_MESSAGE(
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
                            "$.error.message",
                            true,
                        );
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.error.code",
                            true,
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "ERROR_MESSAGE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **ERROR_MESSAGE**

- $.error.message must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ERROR_MESSAGE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    ERROR_CODE,
                    ERROR_MESSAGE,
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
                    testName: "CANCELLATION_ERROR",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CANCELLATION_ERROR","usecasepath":"$.error.code","_CONTINUE_":"!(usecasepath are present)","_RETURN_":[{"_NAME_":"ERROR_CODE","attr":"$.error.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_CANCEL_CONTEXT,
            ON_CANCEL_ORDER,
            ON_CANCEL_ITEMS,
            ON_CANCEL_FULFILLMENTS,
            ON_CANCEL_PROVIDER,
            ON_CANCEL_CANCELLATION_TERMS,
            ON_CANCEL_QUOTE,
            ON_CANCEL_PAYMENTS,
            ON_CANCEL_PAYMENTS_TAG,
            ON_CANCEL_CANCELLATION,
            CANCELLATION_ERROR,
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
            testName: "on_cancelValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_cancelValidations","_RETURN_":[{"_NAME_":"ON_CANCEL_CONTEXT","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]},{"_NAME_":"ON_CANCEL_ORDER","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ON_CONFIRM_ORDER","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"VALID_ENUM_ON_CONFIRM_ORDER","_RETURN_":[{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT_CANCEL","CONFIRM_CANCEL","ACTIVE","COMPLETED","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REGEX_ON_CONFIRM_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REGEX_ON_CONFIRM_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}]},{"_NAME_":"ON_CANCEL_ITEMS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_NAME","attr":"$.message.order.items[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.order.items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.order.items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_ITEMS_CODE","attr":"$.message.order.items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"REGEX_MESSAGE_ITEMS_IMAGES_URL","attr":"$.message.order.items[*].descriptor.images[*].url","reg":["^https:\\/\\/"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.order.items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.order.items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.order.items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_VAL","attr":"$.message.order.items[*].price.value","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY","attr":"$.message.order.items[*].price.currency","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX","attr":"$.message.order.items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN","attr":"$.message.order.items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.order.items[*].tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$.list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.message.order.items[*].descriptor.code","var_code":["ABSTRACT"]}]}]},{"_NAME_":"ON_CANCEL_FULFILLMENTS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_TOKEN","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_VALID_TO","attr":"$.message.order.fulfillments[*].stops[*].authorization.token","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_STATE","attr":"$.message.order.fulfillments[*].state.descriptor.code","enumList":["COMPLETED","IN_PROGRESS","CONFIRMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH","attr":"$.message.order.fulfillments[*].stops[*].authorization.type","enumList":["QR"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_FULFILMENT_AUTH_STATUS","attr":"$.message.order.fulfillments[*].stops[*].authorization.status","enumList":["CLAIMED","UNCLAIMED"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}]},{"_NAME_":"ON_CANCEL_PROVIDER","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME","attr":"$.message.order.provider.descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES","attr":"$.message.order.provider.descriptor.images[*].url","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.order.provider.locations[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS","attr":"$.message.order.provider.locations[*].gps","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.order.provider.locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.order.provider.locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ON_CANCEL_CANCELLATION_TERMS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.order.cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL","attr":"$.message.order.cancellation_terms[*].external_ref.url","useCasePath":"$.message.order.cancellation_terms[*].external_ref.url","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME","attr":"$.message.order.cancellation_terms[*].external_ref.mimetype","useCasePath":"$.message.order.cancellation_terms[*].external_ref.mimetype","_CONTINUE_":"!(useCasePath are present)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ON_CANCEL_QUOTE","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE","_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_ID","attr":"$.message.order.quote.breakup[*].item.id","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].item.price.currency","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_QUOTE_ITEM_PRICE_VALUE","attr":"$.message.order.quote.breakup[*].item.price.value","useCasePath":"$.message.order.quote.breakup[*].title","var_title":["TAX"],"_CONTINUE_":"(var_title equal to useCasePath)","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_QUOTE","_RETURN_":[{"_NAME_":"ENUM_QUOTE_TITLE","attr":"$.message.order.quote.breakup[*].title","enumList":["BASE_FARE","TAX","ADD_ONS","REFUND","CANCELLATION_CHARGES"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]}]},{"_NAME_":"ON_CANCEL_PAYMENTS","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ENUM_PAYMENTS","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_COLLECTOR","attr":"$.message.order.payments[*].collected_by","enumList":["BAP","BPP"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER"],"_RETURN_":"attr all in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"REQUIRED_PAYMENT_PARAMS","attr":"$.message.order.payments[*].params.transaction_id","useCasePath":"$.message.order.payments[*].status","var_status":["PAID"],"_CONTINUE_":"!(var_status equal to useCasePath)","_RETURN_":[{"_NAME_":"REQUIRED_PAYMENTS_TRANSACTION_ID","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]},{"_NAME_":"REQUIRED_PAYMENTS_CURRENCY","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]},{"_NAME_":"REQUIRED_PAYMENTS_AMOUNT","attr":"$._EXTERNAL._SELF.message.order.payments[*].params.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code","useCasePath":"$._EXTERNAL._SELF.message.order.payments[*].status","var_status":["PAID"]}]}]},{"_NAME_":"ON_CANCEL_PAYMENTS_TAG","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_TYPE","BUYER_FINDER_FEES_PERCENTAGE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","SETTLEMENT_AMOUNT","SETTLEMENT_TYPE","SETTLEMENT_BANK_CODE","SETTLEMENT_BANK_ACCOUNT_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"ON_CANCEL_CANCELLATION","action":["on_cancel"],"usecasepath":"$.error.code","_CONTINUE_":"(usecasepath are present)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"REQUIRED_REASON_BY","attr":"$.message.order.cancellation.reason.descriptor.code","_RETURN_":"attr are present","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"VALID_ENUM_REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","enumList":["CONSUMER","PROVIDER"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"VALID_ENUM_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.descriptor.code","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"],"usecasepath":"$._EXTERNAL._SELF.error.code"}]},{"_NAME_":"CANCELLATION_ERROR","usecasepath":"$.error.code","_CONTINUE_":"!(usecasepath are present)","_RETURN_":[{"_NAME_":"ERROR_CODE","attr":"$.error.code","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"},{"_NAME_":"ERROR_MESSAGE","attr":"$.error.message","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.error.code"}]}]}
`,
            },
        },
        ...subResults,
    ];
}

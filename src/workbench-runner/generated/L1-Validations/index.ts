import search from "./api-tests/search";
import on_search from "./api-tests/on_search";
import select from "./api-tests/select";
import on_select from "./api-tests/on_select";
import init from "./api-tests/init";
import on_init from "./api-tests/on_init";
import confirm from "./api-tests/confirm";
import on_confirm from "./api-tests/on_confirm";
import status from "./api-tests/status";
import on_status from "./api-tests/on_status";
import cancel from "./api-tests/cancel";
import on_cancel from "./api-tests/on_cancel";
import update from "./api-tests/update";
import on_update from "./api-tests/on_update";
import rating from "./api-tests/rating";
import on_rating from "./api-tests/on_rating";
import { ValidationConfig, validationOutput } from "./types/test-config";
import normalizeKeys from "./utils/json-normalizer";

/**
 * Perform Level-1 validations against a payload for a given action.
 *
 * @remarks
 * **Output shape** — {@link validationOutput} is an array of:
 * - `testName: string`
 * - `valid: boolean`
 * - `code: number`
 * - `description?: string`
 * - `_debugInfo?: { fedConfig?: string; outputCode?: unknown }`
 *
 * **Config** — {@link ValidationConfig} (partial accepted here):
 * - `onlyInvalid` (default `true`)
 * - `hideParentErrors` (default `true`)
 * - `_debug` (default `false`)
 *
 * @param action - One of {@link Action}.
 * @param payload - The JSON payload to validate.
 * @param config - Partial {@link ValidationConfig}. Merged with defaults.
 * @param externalData - Extra data accessible to rules (we set `_SELF` to the normalized payload).
 * @returns {@link validationOutput}
 *
 * @example
 * ```ts
 * import { performL1_validations } from "@your/pkg";
 *
 * const out = performL1_validations("search", payload, { onlyInvalid: false });
 * // e.g. out[0] => { testName, valid, code, description?, _debugInfo? }
 * ```
 */

export function performL1Validations(
    action: string,
    payload: any,
    config?: Partial<ValidationConfig>,
    externalData: any = {},
) {
    const completeConfig: ValidationConfig = {
        ...{
            onlyInvalid: true,
            standardLogs: false,
            hideParentErrors: true,
            _debug: false,
        },
        ...config,
    };
    const normalizedPayload = normalizeKeys(
        JSON.parse(JSON.stringify(payload)),
    );
    externalData._SELF = normalizedPayload;
    switch (action) {
        case "search":
            return search({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_search":
            return on_search({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "select":
            return select({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_select":
            return on_select({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "init":
            return init({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_init":
            return on_init({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "confirm":
            return confirm({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_confirm":
            return on_confirm({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "status":
            return status({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_status":
            return on_status({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "cancel":
            return cancel({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_cancel":
            return on_cancel({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "update":
            return update({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_update":
            return on_update({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "rating":
            return rating({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        case "on_rating":
            return on_rating({
                payload: normalizedPayload,
                externalData: externalData,
                config: completeConfig,
            });
        default:
            throw new Error("Action not found");
    }
}

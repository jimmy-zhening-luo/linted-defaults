import {
  ID,
  OFF,
} from "../../../_strings";

export const JsoncPluginDisable = {
  id: ID.Disable.Plugin.Plugin,
  rules: {
    // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF /* comments ARE allowed in JSONC */,
  } as const,
};

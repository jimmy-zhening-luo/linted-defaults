import {
  ID,
  ON,
  always_multiline,
} from "../../_strings";

export const JsoncCommaPluginDisable = {
  id: ID.Disable.Plugin.Plugin,
  rules: {
    // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/comma-dangle": [
      ON,
      always_multiline,
    ] /* trailing commas ARE allowed in JSONC */,
  } as const,
};

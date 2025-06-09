import {
  ID,
  ON,
  OFF,
  always_multiline,
} from "../../../strings";

export const JsoncPluginDisable = {
  id: ID.Disable.Plugin,
  rules: {
  // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF /* comments ARE allowed in JSONC */,
    "jsonc/comma-dangle": [
      ON,
      always_multiline,
    ] /* trailing commas ARE allowed in JSONC */,
  } as const,
};

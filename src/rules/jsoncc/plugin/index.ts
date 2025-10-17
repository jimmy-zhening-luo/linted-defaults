import {
  ON,
} from "../../_strings";

export default {
  id: "disable/plugin",
  rules: {
    // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/comma-dangle": [
      ON,
      "always-multiline",
    ] /* trailing commas ARE allowed in JSONC */,
  } as const,
};

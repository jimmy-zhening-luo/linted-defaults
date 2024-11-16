import {
  ID,
  ERROR,
  OFF,
  always_multiline,
} from "../../_strings";

export const JsoncOverride = [
  ID.Override,
  {
    // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF /* comments ARE allowed in JSONC */,
    "jsonc/comma-dangle": [
      ERROR,
      always_multiline,
    ] /* trailing commas ARE allowed in JSONC */,
  } as const,
] as const;

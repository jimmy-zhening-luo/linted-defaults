import {
  ID,
  ON,
  OFF,
} from "../../strings";

export const JsonEnable = {
  id: ID.Enable,
  rules: {
  // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/auto": OFF,
    "jsonc/key-name-casing": OFF,
    "jsonc/no-bigint-literals": ON,
    "jsonc/no-binary-expression": ON,
    "jsonc/no-binary-numeric-literals": ON,
    "jsonc/no-comments": ON /* comments are NOT allowed in JSON */,
    "jsonc/no-escape-sequence-in-identifier": ON,
    "jsonc/no-hexadecimal-numeric-literals": ON,
    "jsonc/no-infinity": ON,
    "jsonc/no-nan": ON,
    "jsonc/no-number-props": ON,
    "jsonc/no-numeric-separators": ON,
    "jsonc/no-octal-numeric-literals": ON,
    "jsonc/no-parenthesized": ON,
    "jsonc/no-plus-sign": ON,
    "jsonc/no-regexp-literals": ON,
    "jsonc/no-template-literals": ON,
    "jsonc/no-undefined-value": ON,
    "jsonc/no-unicode-codepoint-escapes": ON,
    "jsonc/sort-array-values": OFF,
    "jsonc/sort-keys": OFF,
    "jsonc/valid-json-number": ON,
    "jsonc/vue-custom-block/no-parsing-error": ON,
  } as const,
} as const;

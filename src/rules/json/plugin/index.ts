import { State } from "../../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
export default {
  rules: {
    // "jsonc/auto": State.OFF,
    // "jsonc/key-name-casing": State.OFF,
    // "jsonc/no-bigint-literals": State.OFF,
    // "jsonc/no-binary-expression": State.OFF,
    // "jsonc/no-binary-numeric-literals": State.OFF,
    "jsonc/no-comments": State.ON,
    // "jsonc/no-escape-sequence-in-identifier": State.OFF,
    // "jsonc/no-hexadecimal-numeric-literals": State.OFF,
    // "jsonc/no-infinity": State.OFF,
    // "jsonc/no-nan": State.OFF,
    // "jsonc/no-number-props": State.OFF,
    // "jsonc/no-numeric-separators": State.OFF,
    // "jsonc/no-octal-numeric-literals": State.OFF,
    // "jsonc/no-parenthesized": State.OFF,
    // "jsonc/no-plus-sign": State.OFF,
    // "jsonc/no-regexp-literals": State.OFF,
    // "jsonc/no-template-literals": State.OFF,
    // "jsonc/no-undefined-value": State.OFF,
    // "jsonc/no-unicode-codepoint-escapes": State.OFF,
    // "jsonc/sort-array-values": State.OFF,
    // "jsonc/sort-keys": State.OFF /* ESLint: json/sort-keys */,
    // "jsonc/valid-json-number": State.OFF,
    // "jsonc/vue-custom-block/no-parsing-error": State.OFF,
  } as const,
};

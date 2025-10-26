import { State } from "../../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
export default {
  rules: {
    // "jsonc/auto": State.OFF,
    // "jsonc/key-name-casing": State.OFF,
    "jsonc/no-bigint-literals": State.ON,
    "jsonc/no-binary-expression": State.ON,
    "jsonc/no-binary-numeric-literals": State.ON,
    "jsonc/no-comments": State.ON /* comments are NOT allowed in JSState.ON */,
    "jsonc/no-escape-sequence-in-identifier": State.ON,
    "jsonc/no-hexadecimal-numeric-literals": State.ON,
    "jsonc/no-infinity": State.ON,
    "jsonc/no-nan": State.ON,
    "jsonc/no-number-props": State.ON,
    "jsonc/no-numeric-separators": State.ON,
    "jsonc/no-octal-numeric-literals": State.ON,
    "jsonc/no-parenthesized": State.ON,
    "jsonc/no-plus-sign": State.ON,
    "jsonc/no-regexp-literals": State.ON,
    "jsonc/no-template-literals": State.ON,
    "jsonc/no-undefined-value": State.ON,
    "jsonc/no-unicode-codepoint-escapes": State.ON,
    // "jsonc/sort-array-values": State.OFF /* preference: this makes no sense, arrays can be ordered */,
    // "jsonc/sort-keys": State.OFF /* ESLint: json/sort-keys BUT preference: only sort keys manually when I'd like */,
    "jsonc/valid-json-number": State.ON,
    "jsonc/vue-custom-block/no-parsing-error": State.ON,
  } as const,
};

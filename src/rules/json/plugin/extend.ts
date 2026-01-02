import { State } from "../../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
export default {
  rules: {
    // "jsonc/array-bracket-newline": State.OFF /* BUG: DO NOT CONFIGURE */,
    "jsonc/array-bracket-spacing": State.WARN,
    "jsonc/array-element-newline": [
      State.WARN,
      "consistent",
    ],
    "jsonc/comma-dangle": State.ON,
    "jsonc/comma-style": State.WARN,
    "jsonc/indent": [
      State.WARN,
      2,
    ],
    "jsonc/key-spacing": State.WARN,
    // "jsonc/no-dupe-keys": State.OFF /* ESLint: json/no-duplicate-keys */,
    "jsonc/no-floating-decimal": State.ON,
    "jsonc/no-irregular-whitespace": [
      State.ON,
      {
        skipStrings: true,
        skipComments: true,
      },
    ],
    "jsonc/no-multi-str": State.ON,
    "jsonc/no-octal-escape": State.ON,
    "jsonc/no-octal": State.ON,
    "jsonc/no-sparse-arrays": State.ON,
    "jsonc/no-useless-escape": State.ON,
    "jsonc/object-curly-newline": [
      State.WARN,
      {
        consistent: true,
        multiline: true,
        minProperties: 2,
      },
    ],
    "jsonc/object-curly-spacing": [
      State.WARN,
      "always",
    ],
    "jsonc/object-property-newline": State.WARN,
    "jsonc/quote-props": State.ON,
    "jsonc/quotes": State.ON,
    "jsonc/space-unary-ops": State.ON,
  } as const,
};

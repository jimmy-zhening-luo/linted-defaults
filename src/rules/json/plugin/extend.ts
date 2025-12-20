import { State } from "../../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
export default {
  rules: {
    // "jsonc/array-bracket-newline": State.OFF /* BUG: DO NOT CONFIGURE */,
    "jsonc/array-bracket-spacing": State.WARN /* MUST match stylistic/array-bracket-spacing */,
    "jsonc/array-element-newline": [
      State.WARN,
      "consistent",
    ] /* WOULD match stylistic/array-element-newline, but jsonc plugin has slightly different options */,
    "jsonc/comma-dangle": State.ON,
    "jsonc/comma-style": State.WARN,
    "jsonc/indent": [
      State.WARN,
      2,
    ],
    "jsonc/key-spacing": State.WARN /* MUST match stylistic/key-spacing */,
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
        minProperties: 2 /* @OVERRIDE: instead of 3 in stylistic */,
      },
    ] /* @OVERRIDE stylistic/object-curly-newline */,
    "jsonc/object-curly-spacing": [
      State.WARN,
      "always",
    ] /* MUST match stylistic/object-curly-spacing (except unsupported 3rd options) */,
    "jsonc/object-property-newline": State.WARN /* MUST match stylistic/object-property-newline */,
    "jsonc/quote-props": State.ON,
    "jsonc/quotes": State.ON,
    "jsonc/space-unary-ops": State.ON,
  } as const,
};

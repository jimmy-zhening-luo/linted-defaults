// DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
export default {
  rules: {
    // "jsonc/array-bracket-newline": State.OFF /* @OVERRIDE: BIGGER BUG: i mean this basically just doesn't work, even with multiple lines it will still fail| BUG: the spec says: `requires line breaks if the number of elements is at least the given integer. If this is 0, this condition will act the same as the option "always". If this is null (the default), this condition is disabled`. However, when null, the jsonc plugin actually errors when there are linebreaks with a single item | (was: MUST match stylistic/array-bracket-newline) */,
    "jsonc/array-bracket-spacing": State.ON /* MUST match stylistic/array-bracket-spacing */,
    "jsonc/array-element-newline": [
      State.ON,
      "consistent",
    ] /* WOULD match stylistic/array-element-newline, but jsonc plugin has slightly different options */,
    "jsonc/comma-dangle": State.ON /* trailing commas are NOT allowed in JSState.ON */,
    "jsonc/comma-style": State.ON,
    "jsonc/indent": [
      State.ON,
      2,
    ],
    "jsonc/key-spacing": State.ON /* MUST match stylistic/key-spacing */,
    // "jsonc/no-dupe-keys": State.OFF /* ESLint: json/no-duplicate-keys */,
    "jsonc/no-floating-decimal": State.ON,
    "jsonc/no-irregular-whitespace": [
      State.ON,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "jsonc/no-multi-str": State.ON,
    "jsonc/no-octal-escape": State.ON,
    "jsonc/no-octal": State.ON,
    "jsonc/no-sparse-arrays": State.ON,
    "jsonc/no-useless-escape": State.ON,
    "jsonc/object-curly-newline": [
      State.ON,
      {
        consistent: true,
        multiline: true,
        minProperties: 2 /* instead of 3 in stylistic */,
      },
    ] /* @OVERRIDE stylistic/object-curly-newline */,
    "jsonc/object-curly-spacing": [
      State.ON,
      "always",
    ] /* MUST match stylistic/object-curly-spacing (except unsupported 3rd options) */,
    "jsonc/object-property-newline": State.ON /* MUST match stylistic/object-property-newline */,
    "jsonc/quote-props": State.ON,
    "jsonc/quotes": State.ON,
    "jsonc/space-unary-ops": State.ON,
  } as const,
};

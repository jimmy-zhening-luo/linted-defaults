import {
  ID,
  // OFF,
  ON,
  always,
  consistent,
} from "../../../_strings";

export const JsonEnablePluginExtension = {
  id: ID.Enable.Plugin.Extension,
  rules: {
    // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
    // "jsonc/array-bracket-newline": OFF /* @OVERRIDE: BIGGER BUG: i mean this basically just doesn't work, even with multiple lines it will still fail| BUG: the spec says: `requires line breaks if the number of elements is at least the given integer. If this is 0, this condition will act the same as the option "always". If this is null (the default), this condition is disabled`. However, when null, the jsonc plugin actually errors when there are linebreaks with a single item | (was: MUST match @stylistic/array-bracket-newline) */,
    "jsonc/array-bracket-spacing": ON /* MUST match @stylistic/array-bracket-spacing */,
    "jsonc/array-element-newline": [
      ON,
      consistent,
    ] /* WOULD match @stylistic/array-element-newline, but jsonc plugin has slightly different options */,
    "jsonc/comma-dangle": ON /* trailing commas are NOT allowed in JSON */,
    "jsonc/comma-style": ON,
    "jsonc/indent": [
      ON,
      2,
    ],
    "jsonc/key-spacing": ON /* MUST match @stylistic/key-spacing */,
    // "jsonc/no-dupe-keys": OFF /* ESLint: json/no-duplicate-keys */,
    "jsonc/no-floating-decimal": ON,
    "jsonc/no-irregular-whitespace": [
      ON,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "jsonc/no-multi-str": ON,
    "jsonc/no-octal-escape": ON,
    "jsonc/no-octal": ON,
    "jsonc/no-sparse-arrays": ON,
    "jsonc/no-useless-escape": ON,
    "jsonc/object-curly-newline": [
      ON,
      {
        consistent: true,
        multiline: true,
        minProperties: 2 /* instead of 3 in stylistic */,
      },
    ] /* @OVERRIDE @stylistic/object-curly-newline */,
    "jsonc/object-curly-spacing": [
      ON,
      always,
    ] /* MUST match @stylistic/object-curly-spacing */,
    "jsonc/object-property-newline": ON /* MUST match @stylistic/object-property-newline */,
    "jsonc/quote-props": ON,
    "jsonc/quotes": ON,
    "jsonc/space-unary-ops": ON,
  } as const,
};

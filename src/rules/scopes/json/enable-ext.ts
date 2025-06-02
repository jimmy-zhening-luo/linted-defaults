import {
  ID,
  ON,
  OFF,
  always,
  consistent,
  double,
  last,
  never,
  strict,
} from "../../strings";

export const JsonEnableExtension = {
  id: ID.EnableExtension,
  rules: {
  // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
    "jsonc/array-bracket-newline": OFF /* @OVERRIDE DO NOT CHANGE (? why?) @stylistic/array-bracket-newline */,
    "jsonc/array-bracket-spacing": [
      ON,
      never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ] /* MUST match @stylistic/array-bracket-spacing */,
    "jsonc/array-element-newline": [
      ON,
      consistent,
    ],
    "jsonc/comma-dangle": [ON, never] /* trailing commas are NOT allowed in JSON */,
    "jsonc/comma-style": [ON, last],
    "jsonc/indent": [ON, 2],
    "jsonc/key-spacing": [
      ON,
      {
        beforeColon: false,
        afterColon: true,
        mode: strict,
      },
    ] /* MUST match @stylistic/key-spacing */,
    "jsonc/no-dupe-keys": ON,
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
        minProperties: 2,
      },
    ] /* @OVERRIDE CHILD of @stylistic/object-curly-newline */,
    "jsonc/object-curly-spacing": [
      ON,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ] /* MUST match @stylistic/object-curly-spacing */,
    "jsonc/object-property-newline": [
      ON,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ] /* MUST match @stylistic/object-property-newline */,
    "jsonc/quote-props": [
      ON,
      always,
    ],
    "jsonc/quotes": [
      ON,
      double,
      {
        avoidEscape: false,
      },
    ],
    "jsonc/space-unary-ops": ON,
  } as const,
};

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
    "jsonc/array-bracket-newline": OFF /* DO NOT CHANGE */,
    "jsonc/array-bracket-spacing": [
      ON,
      never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ] /* MUST match ../js/stylistic.ts */,
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
    ] /* MUST match ../js/stylistic.ts */,
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
        minProperties: 3,
      },
    ] /* MUST match CHILD of ../js/stylistic.ts */,
    "jsonc/object-curly-spacing": [
      ON,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/object-property-newline": [
      ON,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/quote-props": [ON, always],
    "jsonc/quotes": [
      ON,
      double,
      {
        avoidEscape: false,
      },
    ],
    "jsonc/space-unary-ops": ON,
  },
};

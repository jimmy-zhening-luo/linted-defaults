import {
  ID,
  ERROR,
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
      ERROR,
      never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/array-element-newline": [
      ERROR,
      consistent,
    ],
    "jsonc/comma-dangle": [ERROR, never] /* trailing commas are NOT allowed in JSON */,
    "jsonc/comma-style": [ERROR, last],
    "jsonc/indent": [ERROR, 2],
    "jsonc/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: strict,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/no-dupe-keys": ERROR,
    "jsonc/no-floating-decimal": ERROR,
    "jsonc/no-irregular-whitespace": [
      ERROR,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "jsonc/no-multi-str": ERROR,
    "jsonc/no-octal-escape": ERROR,
    "jsonc/no-octal": ERROR,
    "jsonc/no-sparse-arrays": ERROR,
    "jsonc/no-useless-escape": ERROR,
    "jsonc/object-curly-newline": [
      ERROR,
      {
        consistent: true,
        multiline: true,
        minProperties: 4,
      },
    ] /* MUST match CHILD of ../js/stylistic.ts */,
    "jsonc/object-curly-spacing": [
      ERROR,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/object-property-newline": [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/quote-props": [ERROR, always],
    "jsonc/quotes": [
      ERROR,
      double,
      {
        avoidEscape: false,
      },
    ],
    "jsonc/space-unary-ops": ERROR,
  } as const,
} as const;

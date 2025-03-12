import {
  ID,
  ERROR,
  never,
  always,
  strict,
} from "../../_strings";

export const YmlEnableExtension = {
  id: ID.EnableExtension,
  rules: {
  // DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
    "yml/flow-mapping-curly-newline": [
      ERROR,
      {
        consistent: false,
        multiline: true,
        minProperties: 2,
      },
    ],
    "yml/flow-mapping-curly-spacing": [
      ERROR,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "yml/flow-sequence-bracket-newline": [
      ERROR,
      {
        multiline: true,
        minItems: null,
      },
    ],
    "yml/flow-sequence-bracket-spacing": [
      ERROR,
      never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "yml/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: strict,
      },
    ],
    "yml/no-irregular-whitespace": [
      ERROR,
      {
        skipQuotedScalars: true,
        skipComments: false,
      },
    ],
    "yml/no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "yml/spaced-comment": [
      ERROR,
      always,
    ],
  } as const,
} as const;

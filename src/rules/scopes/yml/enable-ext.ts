import {
  ID,
  ON,
  never,
  always,
  strict,
} from "../../strings";

export const YmlEnableExtension = {
  id: ID.EnableExtension,
  rules: {
  // DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
    "yml/flow-mapping-curly-newline": [
      ON,
      {
        consistent: false,
        multiline: true,
        minProperties: 2,
      },
    ],
    "yml/flow-mapping-curly-spacing": [
      ON,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "yml/flow-sequence-bracket-newline": [
      ON,
      {
        multiline: true,
        minItems: null,
      },
    ],
    "yml/flow-sequence-bracket-spacing": [
      ON,
      never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "yml/key-spacing": [
      ON,
      {
        beforeColon: false,
        afterColon: true,
        mode: strict,
      },
    ],
    "yml/no-irregular-whitespace": [
      ON,
      {
        skipQuotedScalars: true,
        skipComments: false,
      },
    ],
    "yml/no-multiple-empty-lines": [
      ON,
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "yml/spaced-comment": [
      ON,
      always,
    ],
  } as const,
} as const;

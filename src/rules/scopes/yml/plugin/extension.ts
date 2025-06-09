import {
  ID,
  ON,
  never,
  always,
  strict,
} from "../../../strings";

export const YmlEnablePluginExtension = {
  id: ID.Enable.Plugin.Extension,
  rules: {
  // DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
    "yml/flow-mapping-curly-newline": [
      ON,
      {
        consistent: true,
        multiline: true,
        minProperties: 2,
      },
    ] /* MUST match jsonc/object-curly-newline */,
    "yml/flow-mapping-curly-spacing": [
      ON,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ] /* MUST match jsonc/object-curly-spacing */,
    "yml/flow-sequence-bracket-newline": [
      ON,
      {
        multiline: true,
        minItems: null,
      },
    ] /* @OVERRIDE jsonc/array-bracket-newline, instead -> MUST match its parent: @stylistic/array-bracket-newline */,
    "yml/flow-sequence-bracket-spacing": [
      ON,
      never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ] /* MUST match jsonc/array-bracket-spacing */,
    "yml/key-spacing": [
      ON,
      {
        beforeColon: false,
        afterColon: true,
        mode: strict,
      },
    ] /* MUST match jsonc/key-spacing */,
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
    ] /* MUST match @stylistic/no-multiple-empty-lines */,
    "yml/spaced-comment": [
      ON,
      always,
      {
        exceptions: ["#"],
        markers: [
          "!",
          "@",
          "#",
          "##",
          "###",
          "####",
          "#####",
          "######",
          "region",
          "endregion",
        ],
      },
    ] /* @OVERRIDE @stylistic/spaced-comment */,
  } as const,
};

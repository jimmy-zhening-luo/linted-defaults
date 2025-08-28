import {
  ID,
  ON,
  always,
} from "../_strings";

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
    ] /* MUST match jsonc/object-curly-spacing */,
    "yml/flow-sequence-bracket-newline": ON /* @OVERRIDE jsonc/array-bracket-newline, instead -> MUST match its parent: @stylistic/array-bracket-newline */,
    "yml/flow-sequence-bracket-spacing": ON /* MUST match jsonc/array-bracket-spacing */,
    "yml/key-spacing": ON /* MUST match jsonc/key-spacing */,
    "yml/no-irregular-whitespace": ON,
    "yml/no-multiple-empty-lines": [
      ON,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0 /* INFO: auto-fix still keeps final line-break (eol character) at EOF even though unlike `stylistic`, `yml` does not have `eol-last` */,
      },
    ] /* MUST match @stylistic/no-multiple-empty-lines */,
    "yml/spaced-comment": [
      ON,
      always,
      {
        exceptions: ["#"],
        markers: [
          "-",
          "#",
          "##",
          "###",
          "####",
          "#####",
          "region",
          "endregion",
        ],
      },
    ] /* @OVERRIDE @stylistic/spaced-comment */,
  } as const,
};

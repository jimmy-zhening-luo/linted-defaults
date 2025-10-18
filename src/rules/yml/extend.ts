import { State } from "../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
export default {
  name: "enable/extension",
  rules: {
    "yml/flow-mapping-curly-newline": [
      State.ON,
      {
        consistent: true,
        multiline: true,
        minProperties: 2,
      },
    ] /* MUST match jsonc/object-curly-newline */,
    "yml/flow-mapping-curly-spacing": [
      State.ON,
      "always",
    ] /* MUST match jsonc/object-curly-spacing */,
    "yml/flow-sequence-bracket-newline": State.ON /* @OVERRIDE jsonc/array-bracket-newline, instead -> MUST match its parent: @stylistic/array-bracket-newline */,
    "yml/flow-sequence-bracket-spacing": State.ON /* MUST match jsonc/array-bracket-spacing */,
    "yml/key-spacing": State.ON /* MUST match jsonc/key-spacing */,
    "yml/no-irregular-whitespace": State.ON,
    "yml/no-multiple-empty-lines": [
      State.ON,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0 /* INFO: auto-fix still keeps final line-break (eol character) at EOF even though unlike `stylistic`, `yml` does not have `eol-last` */,
      },
    ] /* MUST match @stylistic/no-multiple-empty-lines */,
    "yml/spaced-comment": [
      State.ON,
      "always",
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

import { State } from "../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
export default {
  rules: {
    "yml/flow-mapping-curly-newline": [
      State.WARN,
      {
        consistent: true,
        multiline: true,
        minProperties: 2,
      },
    ] /* MUST match jsonc/object-curly-newline */,
    // "yml/flow-mapping-curly-spacing": State.OFF,
    "yml/flow-sequence-bracket-newline": State.WARN /* @OVERRIDE jsonc/array-bracket-newline */,
    // "yml/flow-sequence-bracket-spacing": State.OFF,
    "yml/key-spacing": State.WARN /* MUST match jsonc/key-spacing */,
    "yml/no-irregular-whitespace": State.ON,
    "yml/no-multiple-empty-lines": [
      State.WARN,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0 /* INFO: auto-fix still keeps final line-break (eol character) at EOF */,
      },
    ],
    "yml/spaced-comment": [
      State.WARN,
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
    ],
  } as const,
};

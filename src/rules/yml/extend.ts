import { State } from "../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
export default {
  rules: {
    // "yml/flow-mapping-curly-newline": State.OFF,
    // "yml/flow-mapping-curly-spacing": State.OFF,
    // "yml/flow-sequence-bracket-newline": State.OFF,
    // "yml/flow-sequence-bracket-spacing": State.OFF,
    // "yml/key-spacing": State.OFF,
    "yml/no-irregular-whitespace": State.ON,
    // "yml/no-multiple-empty-lines": State.OFF,
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

import yml from "./yml";
import extend from "./extend";

// DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
export default [
  {
    rules: {
      //#region Custom
      "yml/block-mapping-colon-indicator-newline": State.WARN,
      "yml/block-mapping-question-indicator-newline": State.WARN,
      "yml/block-mapping": State.WARN,
      "yml/block-sequence-hyphen-indicator-newline": State.WARN,
      "yml/block-sequence": State.WARN,
      // "yml/file-extension": State.OFF,
      // "yml/indent": State.OFF,
      // "yml/key-name-casing": State.OFF,
      // "yml/no-empty-document": State.OFF,
      "yml/no-empty-key": State.WARN,
      // "yml/no-empty-mapping-value": State.OFF /* @preference: breaks Home Assistant integration enablement shorthand style (would require a `{}` after) */,
      "yml/no-empty-sequence-entry": State.WARN,
      "yml/no-tab-indent": State.WARN,
      // "yml/no-trailing-zeros": State.OFF,
      // "yml/plain-scalar": State.OFF /* @CONFLICT: breaks any holdovers from YAML 1.1 or non-YAML 1.2 core implementers */,
      // "yml/quotes": State.OFF,
      "yml/require-string-key": State.WARN,
      // "yml/sort-keys": State.OFF,
      // "yml/sort-sequence-values": State.OFF,
      // "yml/vue-custom-block/no-parsing-error": State.OFF,
      //#endregion
      //#region Extension
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
      //#endregion
    } as const,
  },
];

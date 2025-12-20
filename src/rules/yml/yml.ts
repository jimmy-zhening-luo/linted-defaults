import { State } from "../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
export default {
  rules: {
    "yml/block-mapping-colon-indicator-newline": State.WARN,
    "yml/block-mapping-question-indicator-newline": State.WARN,
    "yml/block-mapping": State.WARN,
    "yml/block-sequence-hyphen-indicator-newline": State.WARN,
    "yml/block-sequence": State.WARN,
    // "yml/file-extension": State.OFF,
    "yml/indent": State.WARN,
    // "yml/key-name-casing": State.OFF,
    // "yml/no-empty-document": State.OFF,
    "yml/no-empty-key": State.WARN,
    // "yml/no-empty-mapping-value": State.OFF /* @preference: breaks Home Assistant integration enablement shorthand style (would require a `{}` after) */,
    "yml/no-empty-sequence-entry": State.WARN,
    "yml/no-tab-indent": State.WARN,
    "yml/no-trailing-zeros": State.WARN,
    // "yml/plain-scalar": State.OFF /* @CONFLICT: breaks any holdovers from YAML 1.1 or non-YAML 1.2 core implementers */,
    "yml/quotes": State.WARN,
    "yml/require-string-key": State.WARN,
    // "yml/sort-keys": State.OFF,
    // "yml/sort-sequence-values": State.OFF,
    // "yml/vue-custom-block/no-parsing-error": State.OFF,
  } as const,
};

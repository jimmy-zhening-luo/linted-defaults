import { State } from "../state";

// DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
export default {
  id: "enable",
  rules: {
    "yml/block-mapping-colon-indicator-newline": State.ON,
    "yml/block-mapping-question-indicator-newline": State.ON,
    "yml/block-mapping": State.ON,
    "yml/block-sequence-hyphen-indicator-newline": State.ON,
    "yml/block-sequence": State.ON,
    // "yml/file-extension": State.OFF,
    "yml/indent": State.ON,
    // "yml/key-name-casing": State.OFF,
    // "yml/no-empty-document": State.OFF,
    "yml/no-empty-key": State.ON,
    // "yml/no-empty-mapping-value": State.OFF /* PREFERENCE: breaks Home Assistant integration enablement shorthand style (would require a `{}` after) */,
    "yml/no-empty-sequence-entry": State.ON,
    "yml/no-tab-indent": State.ON,
    "yml/no-trailing-zeros": State.ON,
    // "yml/plain-scalar": State.OFF /* breaks any holdovers from YAML 1.1 or non-YAML 1.2 core implementers (god YAML is so fucking stupid, everyone should just use JSState.ON but noooo somebody had to try to be clever and make something "more readable", fucking feeble-minded fuck) */,
    // "yml/quotes": State.OFF /* doesn't allow enough flexibility for me to use single quotes and double quotes depending on string interpolation needs when there's extra engine logic outside of YAML spec */,
    "yml/require-string-key": State.ON,
    // "yml/sort-keys": State.OFF,
    // "yml/sort-sequence-values": State.OFF,
    // "yml/vue-custom-block/no-parsing-error": State.OFF /* I don't use Vue and I plan to continue not using it if I can help it */,
  } as const,
};

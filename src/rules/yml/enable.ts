import {
  ID,
  // OFF,
  ON,
} from "../_strings";

export const YmlEnablePlugin = {
  id: ID.Enable.Plugin.Plugin,
  rules: {
    // DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
    "yml/block-mapping-colon-indicator-newline": ON,
    "yml/block-mapping-question-indicator-newline": ON,
    "yml/block-mapping": ON,
    "yml/block-sequence-hyphen-indicator-newline": ON,
    "yml/block-sequence": ON,
    // "yml/file-extension": OFF,
    "yml/indent": ON,
    // "yml/key-name-casing": OFF,
    // "yml/no-empty-document": OFF,
    "yml/no-empty-key": ON,
    // "yml/no-empty-mapping-value": OFF /* PREFERENCE: breaks Home Assistant integration enablement shorthand style (would require a `{}` after) */,
    "yml/no-empty-sequence-entry": ON,
    "yml/no-tab-indent": ON,
    "yml/no-trailing-zeros": ON,
    // "yml/plain-scalar": OFF /* breaks any holdovers from YAML 1.1 or non-YAML 1.2 core implementers (god YAML is so fucking stupid, everyone should just use JSON but noooo somebody had to try to be clever and make something "more readable", fucking feeble-minded fuck) */,
    // "yml/quotes": OFF /* preference */,
    "yml/require-string-key": ON,
    // "yml/sort-keys": OFF,
    // "yml/sort-sequence-values": OFF,
    "yml/vue-custom-block/no-parsing-error": ON,
  } as const,
};

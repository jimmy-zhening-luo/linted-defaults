import {
  ID,
  ERROR,
  OFF,
  never,
  always,
  double,
} from "../../_strings";

export const YmlEnable = [
  ID.Enable,
  {
    // DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
    "yml/block-mapping-colon-indicator-newline": [
      ERROR,
      never,
    ],
    "yml/block-mapping-question-indicator-newline": [
      ERROR,
      never,
    ],
    "yml/block-mapping": [
      ERROR,
      {
        singleline: never,
        multiline: always,
      },
    ],
    "yml/block-sequence-hyphen-indicator-newline": [
      ERROR,
      never,
      {
        nestedHyphen: always,
        blockMapping: never,
      },
    ],
    "yml/block-sequence": [
      ERROR,
      {
        singleline: always,
        multiline: always,
      },
    ],
    "yml/file-extension": OFF,
    "yml/indent": [
      ERROR,
      2,
      {
        indentBlockSequences: true,
        indicatorValueIndent: 2,
      },
    ],
    "yml/key-name-casing": OFF,
    "yml/no-empty-document": ERROR,
    "yml/no-empty-key": ERROR,
    "yml/no-empty-mapping-value": ERROR,
    "yml/no-empty-sequence-entry": ERROR,
    "yml/no-tab-indent": ERROR,
    "yml/no-trailing-zeros": ERROR,
    "yml/plain-scalar": [
      ERROR,
      always,
    ],
    "yml/quotes": [
      ERROR,
      {
        prefer: double,
        avoidEscape: true,
      },
    ],
    "yml/require-string-key": ERROR,
    "yml/sort-keys": OFF,
    "yml/sort-sequence-values": OFF,
    "yml/vue-custom-block/no-parsing-error": ERROR,
  },
] as const;

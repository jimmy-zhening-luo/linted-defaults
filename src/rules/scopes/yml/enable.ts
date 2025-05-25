import {
  ID,
  ON,
  OFF,
  never,
  always,
  double,
} from "../../strings";

export const YmlEnable = {
  id: ID.Enable,
  rules: {
  // DOC: https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
    "yml/block-mapping-colon-indicator-newline": [
      ON,
      never,
    ],
    "yml/block-mapping-question-indicator-newline": [
      ON,
      never,
    ],
    "yml/block-mapping": [
      ON,
      {
        singleline: never,
        multiline: always,
      },
    ],
    "yml/block-sequence-hyphen-indicator-newline": [
      ON,
      never,
      {
        nestedHyphen: always,
        blockMapping: never,
      },
    ],
    "yml/block-sequence": [
      ON,
      {
        singleline: always,
        multiline: always,
      },
    ],
    "yml/file-extension": OFF,
    "yml/indent": [
      ON,
      2,
      {
        alignMultilineFlowScalars: true /* @default: false */,
        indentBlockSequences: true,
        indicatorValueIndent: 2,
      },
    ],
    "yml/key-name-casing": OFF,
    "yml/no-empty-document": ON,
    "yml/no-empty-key": ON,
    "yml/no-empty-mapping-value": ON,
    "yml/no-empty-sequence-entry": ON,
    "yml/no-tab-indent": ON,
    "yml/no-trailing-zeros": ON,
    "yml/plain-scalar": [
      ON,
      always,
    ],
    "yml/quotes": [
      ON,
      {
        prefer: double,
        avoidEscape: true,
      },
    ],
    "yml/require-string-key": ON,
    "yml/sort-keys": OFF,
    "yml/sort-sequence-values": OFF,
    "yml/vue-custom-block/no-parsing-error": ON,
  },
};

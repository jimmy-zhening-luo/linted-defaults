import {
  ID,
  OFF,
  ON,
  always,
  double,
  ignore,
  never,
} from "../../../_strings";

export const YmlEnablePlugin = {
  id: ID.Enable.Plugin.Plugin,
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
        singleline: ignore /* always | never | @default ignore */,
        multiline: always /* @default always | never | ignore */,
      },
    ],
    "yml/block-sequence-hyphen-indicator-newline": [
      ON,
      never,
      {
        nestedHyphen: always /* never | @default always */,
        blockMapping: never /* never | always | @default string option */,
      },
    ],
    "yml/block-sequence": [
      ON,
      {
        singleline: ignore /* always | never | @default ignore */,
        multiline: always /* @default always | never | ignore */,
      },
    ],
    "yml/file-extension": OFF,
    "yml/indent": [
      ON,
      2,
      {
        alignMultilineFlowScalars: true /* @default: false */,
        indentBlockSequences: true,
        indicatorValueIndent: 2 /* @default: number option */,
      },
    ],
    "yml/key-name-casing": OFF,
    "yml/no-empty-document": OFF,
    "yml/no-empty-key": ON,
    "yml/no-empty-mapping-value": OFF /* PREFERENCE: breaks Home Assistant integration enablement shorthand style (would require a `{}` after) */,
    "yml/no-empty-sequence-entry": ON,
    "yml/no-tab-indent": ON,
    "yml/no-trailing-zeros": ON,
    "yml/plain-scalar": [
      ON,
      always,
      /*
        {
          ignorePatterns: [
            "[\\v\\f\\u0085\\u00a0\\u1680\\u180e\\u2000-\\u200b\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]" // @default
          ],
          overrides: {
            [key]: null | "always" | "never",
          }
        }
      */
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
  } as const,
};

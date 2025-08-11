import {
  ID,
  // OFF,
  ON,
} from "../../_strings";

export const CssEnable = {
  id: ID.Enable.Enable,
  rules: {
    // DOC: https://github.com/eslint/css/tree/main/docs/rules
    "css/no-duplicate-imports": ON,
    "css/no-empty-blocks": ON,
    "css/no-important": ON,
    "css/no-invalid-at-rule-placement": ON,
    "css/no-invalid-at-rules": ON,
    "css/no-invalid-named-grid-areas": ON,
    // "css/no-invalid-properties": OFF /* BUG: disabled with PREJUDICE (see commit: https://github.com/jimmy-zhening-luo/linted-defaults/commit/702e6632328813e84df92cade730469661ee85db) */,
    "css/prefer-logical-properties": [
      ON,
      {
        allowProperties: [],
        allowUnits: [],
      },
    ],
    "css/relative-font-units": [
      ON,
      {
        allowUnits: [
          "rem",
          "%",
        ],
      },
    ],
    "css/use-baseline": [
      ON,
      {
        available: "widely" /* 2023 | number (year) | `newly` | @default `widely` */,
      },
    ],
    // "css/use-layers": OFF, /* not recommended by docs: https://github.com/eslint/css?tab=readme-ov-file#rules; also BUG: ESLint config inspector: css/use-layers: Invalid rule has no description [INVALID] */
  } as const,
};

import {
  ID,
  ON,
  OFF,
} from "../../strings";

export const CssEnable = {
  id: ID.Enable,
  rules: {
    // DOC: https://github.com/eslint/css/tree/main/docs/rules
    "css/no-duplicate-imports": ON,
    "css/no-empty-blocks": ON,
    "css/no-invalid-at-rules": ON,
    "css/no-invalid-properties": OFF /* BUG: disabled with PREJUDICE (see commit: ) */,
    "css/prefer-logical-properties": [
      ON,
      {
        allowProperties: [],
        allowUnits: [],
      },
    ],
    "css/use-baseline": [
      ON,
      {
        available: "widely" /* newly | @default widely */,
      },
    ],
    "css/use-layers": OFF, /* not recommended by docs: https://github.com/eslint/css?tab=readme-ov-file#rules; also BUG: ESLint config inspector: css/use-layers: Invalid rule has no description [INVALID] */
  } as const,
} as const;

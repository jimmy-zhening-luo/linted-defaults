import {
  ID,
  ERROR,
  OFF,
} from "../../_strings";

export const CssEnable = [
  ID.Enable,
  {
    // DOC: https://github.com/eslint/css?tab=readme-ov-file#rules
    "css/no-duplicate-imports": ERROR,
    "css/no-empty-blocks": ERROR,
    "css/no-invalid-at-rules": ERROR,
    "css/no-invalid-properties": ERROR,
    "css/require-baseline": [
      ERROR,
      {
        available: "widely" /* "newly" | @default "widely" */,
      },
    ],
    "css/use-layers": OFF /* not recommended by docs; also BUG: ESLint config inspector: css/use-layers: Invalid rule has no description [INVALID] */,
  } as const,
] as const;

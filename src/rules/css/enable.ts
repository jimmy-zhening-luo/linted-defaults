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
    "css/use-layers": OFF,
  } as const,
] as const;

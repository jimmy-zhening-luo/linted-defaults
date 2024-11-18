import {
  ID,
  OFF,
} from "../../_strings";

export const SvelteDisableTs = [
  ID.DisableTs,
  {
    "no-unused-vars": OFF /* ESLint */,
    "@typescript-eslint/no-unused-vars": OFF /* TS Extension */,
  } as const,
] as const;

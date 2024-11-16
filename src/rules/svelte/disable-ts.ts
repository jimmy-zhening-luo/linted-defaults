import {
  ID,
  OFF,
} from "../../_strings";

export const SvelteDisableTs = [
  `${ID.Disable}/ts`,
  {
    "no-unused-vars": OFF /* ESLint */,
    "@typescript-eslint/no-unused-vars": OFF /* TS Extension */,
  },
] as const;

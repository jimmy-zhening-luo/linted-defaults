import {
  ID,
  OFF,
} from "../../strings";

export const SvelteDisableTs = {
  id: ID.DisableTs,
  rules: {
    "no-unused-vars": OFF /* ESLint */,
    "@typescript-eslint/no-unused-vars": OFF /* TS Extension */,
  },
};

import {
  ID,
  OFF,
} from "../../_strings";

export const MochaDisableTs = {
  id: ID.DisableTs,
  rules: {
  // DOC: https://github.com/ihordiachenko/eslint-plugin-chai-friendly?tab=readme-ov-file#usage
    "no-unused-expressions": OFF,
    "@typescript-eslint/no-unused-expressions": OFF,
  } as const,
} as const;

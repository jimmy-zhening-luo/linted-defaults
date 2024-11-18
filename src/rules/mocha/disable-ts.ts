import {
  ID,
  OFF,
} from "../../_strings";

export const MochaDisableTs = [
  ID.DisableTs,
  {
    "no-unused-expressions": OFF,
    "@typescript-eslint/no-unused-expressions": OFF,
  } as const,
] as const;

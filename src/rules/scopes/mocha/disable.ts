import {
  ID,
  OFF,
} from "../../strings";

export const MochaDisable = {
  id: ID.Disable,
  rules: {
    "prefer-arrow-callback": OFF /* TS-capable */,
    "no-unused-expressions": OFF,
    // "@typescript-eslint/no-unused-expressions": OFF /* ESLint now supports TS */,
  } as const,
};

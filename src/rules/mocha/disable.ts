import {
  OFF,
} from "../state";

export default {
  id: "disable",
  rules: {
    "prefer-arrow-callback": OFF /* TS-capable */,
    "no-unused-expressions": OFF /* INFO: looks like these guys got the hint too ;) https://github.com/ihordiachenko/eslint-plugin-chai-friendly/releases/tag/v1.1.0 */,
    // "@typescript-eslint/no-unused-expressions": OFF /* ESLint now supports TS */,
  } as const,
};

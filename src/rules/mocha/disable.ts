import { State } from "../state";

export default {
  id: "disable",
  rules: {
    "prefer-arrow-callback": State.OFF /* TS-capable */,
    "no-unused-expressions": State.OFF /* INFO: looks like these guys got the hint too ;) https://github.com/ihordiachenko/eslint-plugin-chai-friendly/releases/tag/v1.1.0 */,
    // "@typescript-eslint/no-unused-expressions": State.OFF /* ESLint now supports TS */,
  } as const,
};

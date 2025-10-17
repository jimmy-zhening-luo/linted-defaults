import { State } from "../../state";

// DOC: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules
export default {
  id: "enable/extension",
  rules: {
    // "@typescript-eslint/class-methods-use-this": State.OFF /* ESLint now supports TS (preference -- eslint:State.OFF) */,
    // "@typescript-eslint/consistent-return": State.OFF /* tsc: noImplicitReturns */,
    // "@typescript-eslint/default-param-last": State.OFF /* ESLint now supports TS */,
    "@typescript-eslint/dot-notation": [
      State.ON,
      {
        // TS-only:
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    // "@typescript-eslint/init-declarations": State.OFF /* ESLint now supports TS */,
    // "@typescript-eslint/max-params": State.OFF /* preference, although ESLint now supports TS */,
    // "@typescript-eslint/no-array-constructor": State.OFF /* ESLint now supports TS */,
    // "@typescript-eslint/no-dupe-class-members": State.OFF /* tsc, although ESLint now supports TS */,
    // "@typescript-eslint/no-empty-function": State.OFF /* ESLint now supports TS */,
    "@typescript-eslint/no-implied-eval": State.ON,
    // "@typescript-eslint/no-invalid-this": State.OFF /* tsc: { strict, noImplicitThis }, although ESLint now supports TS */,
    // "@typescript-eslint/no-loop-func": State.OFF /* ESLint now supports TS */,
    // "@typescript-eslint/no-magic-numbers": State.OFF /* preference, although ESLint now supports TS */,
    // "@typescript-eslint/no-redeclare": State.OFF /* tsc (let, const, -var) */,
    // "@typescript-eslint/no-restricted-imports": State.OFF /* preference */,
    // "@typescript-eslint/no-shadow": State.OFF /* ESLint now supports TS (was: investigate) */,
    // "@typescript-eslint/no-unused-expressions": State.OFF /* ESLint now supports TS (preference -- eslint:State.OFF) */,
    "@typescript-eslint/no-unused-vars": State.ON,
    // "@typescript-eslint/no-use-before-define": State.OFF /* ESLint now supports TS */,
    // "@typescript-eslint/no-useless-constructor": State.OFF /* ESLint now supports TS */,
    "@typescript-eslint/only-throw-error": [
      State.ON,
      {
        allowThrowingAny: false,
      },
    ],
    "@typescript-eslint/prefer-destructuring": [
      State.ON,
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    "@typescript-eslint/prefer-promise-reject-errors": [
      State.ON,
      {
        allowThrowingUnknown: true,
      },
    ],
    "@typescript-eslint/require-await": State.ON,
  } as const,
};

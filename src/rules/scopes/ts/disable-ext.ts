import {
  ID,
  OFF,
} from "../../strings";

export const TsDisableExtension = {
  id: ID.DisableExtension,
  rules: {
    // DOC: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules
    // "class-methods-use-this": OFF /* ESLint now supports TS */,
    // "consistent-return": OFF /* tsc */,
    // "default-param-last": OFF /* ESLint now supports TS */,
    "dot-notation": OFF,
    // "init-declarations": OFF /* ESLint now supports TS */,
    "max-params": OFF,
    // "no-array-constructor": OFF /* ESLint now supports TS */,
    // "no-dupe-class-members": OFF /* tsc, although ESLint now supports TS */,
    "no-empty-function": OFF,
    "no-implied-eval": OFF,
    // "no-invalid-this": OFF /* tsc */,
    "no-loop-func": OFF,
    "no-magic-numbers": OFF,
    // "no-redeclare": OFF /* tsc */,
    "no-restricted-imports": OFF,
    "no-shadow": OFF,
    "no-throw-literal": OFF /* @typescript-eslint/only-throw-error */,
    "no-unused-expressions": OFF,
    "no-unused-vars": OFF,
    "no-use-before-define": OFF,
    // "no-useless-constructor": OFF /* ESLint now supports TS */,
    "prefer-destructuring": OFF,
    "prefer-promise-reject-errors": OFF,
    "require-await": OFF,
  } as const,
} as const;

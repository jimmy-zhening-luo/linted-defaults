import {
  OFF,
} from "../../_strings";

export default {
  id: "disable/extension",
  rules: {
    // DOC: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules
    // "class-methods-use-this": OFF /* ESLint now supports TS */,
    // "consistent-return": OFF /* tsc */,
    // "default-param-last": OFF /* ESLint now supports TS */,
    "dot-notation": OFF,
    // "init-declarations": OFF /* ESLint now supports TS */,
    // "max-params": OFF /* ESLint now supports TS */,
    // "no-array-constructor": OFF /* ESLint now supports TS */,
    // "no-dupe-class-members": OFF /* tsc, although ESLint now supports TS */,
    // "no-empty-function": OFF /* ESLint now supports TS */,
    "no-implied-eval": OFF,
    // "no-invalid-this": OFF /* tsc, although ESLint now supports TS */,
    // "no-loop-func": OFF /* ESLint now supports TS */,
    // "no-magic-numbers": OFF /* ESLint now supports TS */,
    // "no-redeclare": OFF /* tsc */,
    "no-restricted-imports": OFF,
    // "no-shadow": OFF /* ESLint now supports TS */,
    "no-throw-literal": OFF /* @typescript-eslint/only-throw-error */,
    // "no-unused-expressions": OFF /* ESLint now supports TS */,
    "no-unused-vars": OFF,
    // "no-use-before-define": OFF /* ESLint now supports TS */,
    // "no-useless-constructor": OFF /* ESLint now supports TS */,
    "prefer-destructuring": OFF,
    "prefer-promise-reject-errors": OFF,
    "require-await": OFF,
  } as const,
};

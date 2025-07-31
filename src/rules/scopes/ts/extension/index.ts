import {
  ID,
  OFF,
  ON,
  all,
} from "../../../strings";

export const TsEnableExtension = {
  id: ID.Enable.Extension,
  rules: {
    // DOC: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules
    // "@typescript-eslint/class-methods-use-this": OFF /* ESLint now supports TS (preference -- eslint:OFF) */,
    // "@typescript-eslint/consistent-return": OFF /* tsc: noImplicitReturns */,
    // "@typescript-eslint/default-param-last": OFF /* ESLint now supports TS */,
    "@typescript-eslint/dot-notation": [
      ON,
      {
        allowKeywords: true,

        // TS-only
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    // "@typescript-eslint/init-declarations": OFF /* ESLint now supports TS */,
    // "@typescript-eslint/max-params": OFF /* preference, although ESLint now supports TS */,
    // "@typescript-eslint/no-array-constructor": OFF /* ESLint now supports TS */,
    // "@typescript-eslint/no-dupe-class-members": OFF /* tsc, although ESLint now supports TS */,
    // "@typescript-eslint/no-empty-function": OFF /* ESLint now supports TS */,
    "@typescript-eslint/no-implied-eval": ON,
    // "@typescript-eslint/no-invalid-this": OFF /* tsc: { strict, noImplicitThis }, although ESLint now supports TS */,
    // "@typescript-eslint/no-loop-func": OFF /* ESLint now supports TS */,
    // "@typescript-eslint/no-magic-numbers": OFF /* preference, although ESLint now supports TS */,
    // "@typescript-eslint/no-redeclare": OFF /* tsc (let, const, -var) */,
    "@typescript-eslint/no-restricted-imports": OFF /* preference */,
    // "@typescript-eslint/no-shadow": OFF /* ESLint now supports TS (was: investigate) */,
    // "@typescript-eslint/no-unused-expressions": OFF /* ESLint now supports TS (preference -- eslint:OFF) */,
    "@typescript-eslint/no-unused-vars": [
      ON,
      {
        vars: all,
        args: all,
        caughtErrors: all,
        ignoreRestSiblings: false,
        ignoreClassWithStaticInitBlock: false,
        reportUsedIgnorePattern: true,
      },
    ],
    // "@typescript-eslint/no-use-before-define": OFF /* ESLint now supports TS */,
    // "@typescript-eslint/no-useless-constructor": OFF /* ESLint now supports TS */,
    "@typescript-eslint/only-throw-error": [
      ON,
      {
        allowRethrowing: true,
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],
    "@typescript-eslint/prefer-destructuring": [
      ON,
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
        enforceForDeclarationWithTypeAnnotation: false,
      },
    ],
    "@typescript-eslint/prefer-promise-reject-errors": [
      ON,
      {
        allowEmptyReject: false,
        allowThrowingAny: false,
        allowThrowingUnknown: true,
      },
    ],
    "@typescript-eslint/require-await": ON,
  } as const,
};

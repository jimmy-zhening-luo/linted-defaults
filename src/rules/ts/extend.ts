import { State } from "../state";

// DOC: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules
export default {
  name: "enable/extension",
  rules: {
    /* @OVERRIDE */ "dot-notation": State.OFF,
    "@typescript-eslint/dot-notation": [
      State.ON,
      {
        // TS-only:
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    /* @OVERRIDE */ "no-implied-eval": State.OFF,
    "@typescript-eslint/no-implied-eval": State.ON,
    // "@typescript-eslint/no-redeclare": State.OFF /* tsc (let, const, -var) */,
    /* @OVERRIDE */ "no-restricted-imports": State.OFF,
    // "@typescript-eslint/no-restricted-imports": State.OFF /* preference */,
    /* @OVERRIDE */ "no-unused-vars": State.OFF,
    "@typescript-eslint/no-unused-vars": State.ON,
    /* @OVERRIDE */ "no-throw-literal": State.OFF,
    "@typescript-eslint/only-throw-error": [
      State.ON,
      {
        allowThrowingAny: false,
      },
    ],
    /* @OVERRIDE */ "prefer-destructuring": State.OFF,
    "@typescript-eslint/prefer-destructuring": [
      State.ON,
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    /* @OVERRIDE */ "prefer-promise-reject-errors": State.OFF,
    "@typescript-eslint/prefer-promise-reject-errors": [
      State.ON,
      {
        allowThrowingUnknown: true,
      },
    ],
    /* @OVERRIDE */ "require-await": State.OFF,
    "@typescript-eslint/require-await": State.ON,
  } as const,
};

import { State } from "../state";

// DOC: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules
export default {
  rules: {
    /* @OVERRIDE */ "dot-notation": State.OFF,
    "ts/dot-notation": [
      State.ON,
      {
        // TS-only:
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    /* @OVERRIDE */ "no-implied-eval": State.OFF,
    "ts/no-implied-eval": State.ON,
    // "ts/no-redeclare": State.OFF /* tsc (let, const, -var) */,
    /* @OVERRIDE */ "no-restricted-imports": State.OFF,
    // "ts/no-restricted-imports": State.OFF /* preference */,
    /* @OVERRIDE */ "no-unused-vars": State.OFF,
    "ts/no-unused-vars": State.ON,
    /* @OVERRIDE */ "no-throw-literal": State.OFF,
    "ts/only-throw-error": [
      State.ON,
      {
        allowThrowingAny: false,
      },
    ],
    /* @OVERRIDE */ "prefer-destructuring": State.OFF,
    "ts/prefer-destructuring": [
      State.ON,
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    /* @OVERRIDE */ "prefer-promise-reject-errors": State.OFF,
    "ts/prefer-promise-reject-errors": [
      State.ON,
      {
        allowThrowingUnknown: true,
      },
    ],
    /* @OVERRIDE */ "require-await": State.OFF,
    "ts/require-await": State.ON,
  } as const,
};

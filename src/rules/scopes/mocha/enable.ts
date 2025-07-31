import {
  ID,
  OFF,
  ON,
} from "../../strings";

export const MochaEnable = {
  id: ID.Enable.Enable,
  rules: {
    // DOC: https://github.com/lo1tuma/eslint-plugin-mocha/tree/main?tab=readme-ov-file#rules
    "mocha/consistent-interface": OFF, /* unable, must choose BDD or TDD first */
    "mocha/consistent-spacing-between-blocks": OFF,
    "mocha/handle-done-callback": [
      ON,
      {
        ignorePending: false,
      },
    ],
    "mocha/max-top-level-suites": [
      ON,
      {
        limit: 1,
      },
    ],
    "mocha/no-async-suite": ON,
    "mocha/no-empty-title": ON,
    "mocha/no-exclusive-tests": ON,
    "mocha/no-exports": ON,
    "mocha/no-global-tests": ON,
    "mocha/no-hooks-for-single-case": OFF,
    "mocha/no-hooks": OFF,
    "mocha/no-identical-title": ON,
    "mocha/no-mocha-arrows": ON,
    "mocha/no-nested-tests": ON,
    "mocha/no-pending-tests": ON,
    "mocha/no-return-and-callback": ON,
    "mocha/no-return-from-async": ON,
    "mocha/no-setup-in-describe": OFF /* pointless and arbitrary */,
    "mocha/no-sibling-hooks": ON,
    "mocha/no-synchronous-tests": OFF,
    "mocha/no-top-level-hooks": ON,
    "mocha/prefer-arrow-callback": [
      ON,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ] /* MUST match ../js/enable.ts, which is TS-capable -- is this?? */,
    "mocha/valid-suite-title": OFF /* preference */,
    "mocha/valid-test-title": OFF /* preference */,
  } as const,
};

import { State } from "../state";

// DOC: https://github.com/lo1tuma/eslint-plugin-mocha/tree/main?tab=readme-ov-file#rules
export default {
  rules: {
    // "mocha/consistent-interface": State.OFF /* unable, must choose BDD or TDD first */,
    // "mocha/consistent-spacing-between-blocks": State.OFF,
    "mocha/handle-done-callback": State.ON,
    "mocha/max-top-level-suites": State.ON,
    "mocha/no-async-suite": State.ON,
    "mocha/no-empty-title": State.ON,
    "mocha/no-exclusive-tests": State.ON,
    "mocha/no-exports": State.ON,
    "mocha/no-global-tests": State.ON,
    // "mocha/no-hooks-for-single-case": State.OFF,
    // "mocha/no-hooks": State.OFF,
    "mocha/no-identical-title": State.ON,
    "mocha/no-mocha-arrows": State.ON,
    "mocha/no-nested-tests": State.ON,
    "mocha/no-pending-tests": State.ON,
    "mocha/no-return-and-callback": State.ON,
    "mocha/no-return-from-async": State.ON,
    // "mocha/no-setup-in-describe": State.OFF /* pointless and arbitrary */,
    "mocha/no-sibling-hooks": State.ON,
    // "mocha/no-synchronous-tests": State.OFF,
    "mocha/no-top-level-hooks": State.ON,
    /* @OVERRIDE */ "prefer-arrow-callback": State.OFF /* TS-capable */,
    "mocha/prefer-arrow-callback": State.ON /* MUST match ../js/enable.ts, which is TS-capable -- is this?? */,
    // "mocha/valid-suite-title": State.OFF /* preference */,
    // "mocha/valid-test-title": State.OFF /* preference */,
  } as const,
};

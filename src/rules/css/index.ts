// DOC: https://github.com/eslint/css/tree/main/docs/rules
export default [
  {
    rules: {
      "css/font-family-fallbacks": State.ON,
      "css/no-duplicate-imports": State.ON,
      "css/no-duplicate-keyframe-selectors": State.ON,
      "css/no-empty-blocks": State.ON,
      "css/no-important": State.ON,
      "css/no-invalid-at-rule-placement": State.ON,
      "css/no-invalid-at-rules": State.ON,
      "css/no-invalid-named-grid-areas": State.ON,
      // "css/no-invalid-properties": State.OFF /* BUG: this shit is still way too broken, it doens't recognize actual rules. in futue if it recognizes actual rules, turn on allow unknown values btw */,
      "css/no-unmatchable-selectors": State.ON,
      "css/prefer-logical-properties": State.ON,
      "css/relative-font-units": State.ON,
      // "css/selector-complexity": State.OFF /* preference, or rather too lazy to configure because its default state is literally infinitely permissable */,
      "css/use-baseline": State.ON,
    // "css/use-layers": State.OFF, /* not recommended by docs: https://github.com/eslint/css?tab=readme-ov-file#rules; also BUG: ESLint config inspector: css/use-layers: Invalid rule has no description [INVALID] */
    } as const,
  },
];

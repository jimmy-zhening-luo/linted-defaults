import { State } from "../state";

// DOC: https://github.com/eslint/css/tree/main/docs/rules
export default [
  {
    rules: {
      "css/font-family-fallbacks": State.WARN,
      "css/no-duplicate-imports": State.WARN,
      "css/no-duplicate-keyframe-selectors": State.WARN,
      "css/no-empty-blocks": State.WARN,
      "css/no-important": State.WARN,
      "css/no-invalid-at-rule-placement": State.ON,
      "css/no-invalid-at-rules": State.ON,
      "css/no-invalid-named-grid-areas": State.ON,
      // "css/no-invalid-properties": State.OFF /* BUG: this is still way too broken, it doens't recognize actual rules. in future if it recognizes actual rules, turn on allow unknown values btw */,
      "css/no-unmatchable-selectors": State.WARN,
      "css/prefer-logical-properties": State.WARN,
      "css/relative-font-units": State.WARN,
      // "css/selector-complexity": State.OFF /* @preference: or rather too lazy to configure because its default state is literally infinitely permissable */,
      "css/use-baseline": State.WARN,
    // "css/use-layers": State.OFF, /* not recommended by docs: https://github.com/eslint/css?tab=readme-ov-file#rules; also BUG: ESLint config inspector: css/use-layers: Invalid rule has no description [INVALID] */
    } as const,
  },
];

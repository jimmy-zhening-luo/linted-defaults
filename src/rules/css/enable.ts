import {
  ID,
  // OFF,
  ON,
} from "../_strings";

export const CssEnable = {
  id: ID.Enable.Enable,
  rules: {
    // DOC: https://github.com/eslint/css/tree/main/docs/rules
    "css/font-family-fallbacks": ON,
    "css/no-duplicate-imports": ON,
    "css/no-duplicate-keyframe-selectors": ON,
    "css/no-empty-blocks": ON,
    "css/no-important": ON,
    "css/no-invalid-at-rule-placement": ON,
    "css/no-invalid-at-rules": ON,
    "css/no-invalid-named-grid-areas": ON,
    // "css/no-invalid-properties": OFF /* BUG: this shit is still way too broken, it doens't recognize actual rules. in futue if it recognizes actual rules, turn on allow unknown values btw */,
    "css/prefer-logical-properties": ON,
    "css/relative-font-units": ON,
    // "css/selector-complexity": OFF /* preference, or rather too lazy to configure because its default state is literally infinitely permissable */,
    "css/use-baseline": ON,
    // "css/use-layers": OFF, /* not recommended by docs: https://github.com/eslint/css?tab=readme-ov-file#rules; also BUG: ESLint config inspector: css/use-layers: Invalid rule has no description [INVALID] */
  } as const,
};

import { State } from "../state";

// DOC: https://html-eslint.org/docs/rules
export default [
  {
    rules: {
    // #region BEST PRACTICE
    // DOC: https://html-eslint.org/docs/rules#best-practice
      "html/css-no-empty-blocks": State.WARN,
      // "html/max-element-depth": State.OFF /* @preference: simply do not care */,
      "html/no-duplicate-attrs": State.WARN,
      "html/no-duplicate-class": State.WARN,
      "html/no-duplicate-id": State.WARN,
      "html/no-duplicate-in-head": State.WARN,
      "html/no-ineffective-attrs": State.WARN,
      // "html/no-inline-styles": State.OFF /* @CONFLICT: breaks Svelte app.html */,
      "html/no-invalid-attr-value": State.ON,
      "html/no-invalid-entity": State.ON,
      "html/no-nested-interactive": State.WARN,
      "html/no-obsolete-tags": State.WARN,
      // "html/no-restricted-attr-values": State.OFF,
      // "html/no-restricted-attrs": State.OFF,
      // "html/no-restricted-tags": State.OFF,
      // "html/no-script-style-type": State.OFF,
      "html/no-target-blank": State.WARN,
      "html/no-whitespace-only-children": State.WARN,
      // "html/prefer-https": State.OFF /* @CONFLICT: not everything is https */,
      // "html/require-attrs": State.OFF,
      "html/require-button-type": State.WARN,
      "html/require-closing-tags": State.WARN,
      "html/require-doctype": State.WARN,
      // "html/require-explicit-size": State.OFF /* @preference: prefer using css */,
      "html/require-li-container": State.WARN,
      "html/require-meta-charset": State.WARN,
      "html/use-baseline": State.WARN,
      // #endregion

      // #region SEO
      // DOC: https://html-eslint.org/docs/rules#seo
      "html/no-multiple-h1": State.WARN,
      "html/require-lang": State.WARN,
      // "html/require-meta-description": State.OFF /* @CONFLICT: breaks Svelte which leaves meta descriptions to route leaves */,
      // "html/require-open-graph-protocol": State.OFF /* @CONFLICT: idk what this is, also it probably breaks Svelte */,
      // "html/require-title": State.OFF /* @CONFLICT: breaks Svelte which leaves title to route leaves */,
      // #endregion

      // #region ACCESSIBILITY
      // DOC: https://html-eslint.org/docs/rules#accessibility
      "html/no-abstract-roles": State.WARN,
      "html/no-accesskey-attrs": State.WARN,
      "html/no-aria-hidden-body": State.WARN,
      "html/no-aria-hidden-on-focusable": State.WARN,
      "html/no-empty-headings": State.WARN,
      "html/no-heading-inside-button": State.WARN,
      "html/no-invalid-role": State.WARN,
      "html/no-non-scalable-viewport": State.WARN,
      "html/no-positive-tabindex": State.WARN,
      "html/no-redundant-role": State.WARN,
      // "html/no-skip-heading-levels": State.OFF,
      "html/require-form-method": State.WARN,
      "html/require-frame-title": State.WARN,
      "html/require-img-alt": State.WARN,
      "html/require-input-label": State.WARN,
      "html/require-meta-viewport": State.WARN,
      // #endregion

      // #region STYLE
      // DOC: https://html-eslint.org/docs/rules#style
      // "html/attrs-newline": State.OFF,
      // "html/element-newline": State.OFF,
      // "html/id-naming-convention": State.OFF,
      // "html/indent": State.OFF,
      // "html/lowercase": State.OFF,
      // "html/no-extra-spacing-attrs": State.OFF,
      // "html/no-extra-spacing-text": State.OFF,
      // "html/no-multiple-empty-lines": State.OFF,
      // "html/no-trailing-spaces": State.OFF,
      // "html/quotes": State.OFF,
    // "html/sort-attrs": State.OFF,
    // #endregion
    } as const,
  },
];

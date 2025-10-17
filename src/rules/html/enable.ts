import { State } from "../state";

// DOC: https://html-eslint.org/docs/rules
export default {
  id: "enable",
  rules: {
    // #region BEST PRACTICE
    // DOC: https://html-eslint.org/docs/rules#best-practice
    // "@html-eslint/max-element-depth": State.OFF /* @preference: simply do not care */,
    "@html-eslint/no-duplicate-attrs": State.ON,
    "@html-eslint/no-duplicate-class": State.ON,
    "@html-eslint/no-duplicate-id": State.ON,
    "@html-eslint/no-duplicate-in-head": State.ON,
    "@html-eslint/no-ineffective-attrs": State.ON,
    // "@html-eslint/no-inline-styles": State.OFF /* @CONFLICT: breaks Svelte app.html */,
    "@html-eslint/no-invalid-entity": State.ON,
    "@html-eslint/no-nested-interactive": State.ON,
    "@html-eslint/no-obsolete-tags": State.ON,
    // "@html-eslint/no-restricted-attr-values": State.OFF,
    // "@html-eslint/no-restricted-attrs": State.OFF,
    // "@html-eslint/no-restricted-tags": State.OFF,
    // "@html-eslint/no-script-style-type": State.OFF,
    "@html-eslint/no-target-blank": State.ON,
    // "@html-eslint/prefer-https": State.OFF /* @CONFLICT: not everything is https */,
    // "@html-eslint/require-attrs": State.OFF,
    "@html-eslint/require-button-type": State.ON,
    "@html-eslint/require-closing-tags": State.ON,
    "@html-eslint/require-doctype": State.ON,
    // "@html-eslint/require-explicit-size": State.OFF /* preference, prefer using css */,
    "@html-eslint/require-li-container": State.ON,
    "@html-eslint/require-meta-charset": State.ON,
    "@html-eslint/use-baseline": State.ON,
    // #endregion

    // #region SEO
    // DOC: https://html-eslint.org/docs/rules#seo
    "@html-eslint/no-multiple-h1": State.ON,
    "@html-eslint/require-lang": State.ON,
    // "@html-eslint/require-meta-description": State.OFF /* @CONFLICT: breaks Svelte which leaves meta descriptions to route leaves */,
    // "@html-eslint/require-open-graph-protocol": State.OFF /* idk what this is, also it probably breaks Svelte */,
    // "@html-eslint/require-title": State.OFF /* @CONFLICT: breaks Svelte which leaves title to route leaves */,
    // #endregion

    // #region ACCESSIBILITY
    // DOC: https://html-eslint.org/docs/rules#accessibility
    "@html-eslint/no-abstract-roles": State.ON,
    "@html-eslint/no-accesskey-attrs": State.ON,
    "@html-eslint/no-aria-hidden-body": State.ON,
    "@html-eslint/no-aria-hidden-on-focusable": State.ON,
    "@html-eslint/no-empty-headings": State.ON,
    "@html-eslint/no-heading-inside-button": State.ON,
    "@html-eslint/no-invalid-role": State.ON,
    "@html-eslint/no-non-scalable-viewport": State.ON,
    "@html-eslint/no-positive-tabindex": State.ON,
    "@html-eslint/no-skip-heading-levels": State.ON,
    "@html-eslint/require-form-method": State.ON,
    "@html-eslint/require-frame-title": State.ON,
    "@html-eslint/require-img-alt": State.ON,
    "@html-eslint/require-input-label": State.ON,
    "@html-eslint/require-meta-viewport": State.ON,
    // #endregion

    // #region STYLE
    // DOC: https://html-eslint.org/docs/rules#style
    "@html-eslint/attrs-newline": [
      State.ON,
      {
        ifAttrsMoreThan: 0,
        // closeStyle: "newline" /* sameline | @default newline */,
      },
    ],
    "@html-eslint/element-newline": [
      State.ON,
      {
        skip: ["head"],
        inline: ["$inline"],
      },
    ],
    // "@html-eslint/id-naming-convention": State.OFF,
    "@html-eslint/indent": [
      State.ON,
      2 /* tab | number | @default 4 */,
      // {
      //   Attribute: 1 /* number | @default 1 */,
      //   tagChildrenIndent: {
      //     html: 0 /* number */,
      //   } /* @default {} */,
      // },
    ] /* TBD: @CONFIGURE: indents for specific child tags: https://html-eslint.org/docs/rules/indent */,
    "@html-eslint/lowercase": State.ON,
    "@html-eslint/no-extra-spacing-attrs": [
      State.ON,
      {
        // enforceBeforeSelfClose: false /* @default false */,
        disallowMissing: true /* @default false */,
        disallowTabs: true /* @default false */,
        disallowInAssignment: true /* @default false */,
      },
    ],
    "@html-eslint/no-extra-spacing-text": State.ON,
    "@html-eslint/no-multiple-empty-lines": [
      State.ON,
      {
        max: 1 /* number | @default 2 */,
      },
    ],
    "@html-eslint/no-trailing-spaces": State.ON,
    "@html-eslint/quotes": State.ON,
    // "@html-eslint/sort-attrs": State.OFF,
    // #endregion
  } as const,
};

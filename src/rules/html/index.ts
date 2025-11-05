// DOC: https://html-eslint.org/docs/rules
export default [
  {
    rules: {
    // #region BEST PRACTICE
    // DOC: https://html-eslint.org/docs/rules#best-practice
    // "html/max-element-depth": State.OFF /* @preference: simply do not care */,
      "html/no-duplicate-attrs": State.ON,
      "html/no-duplicate-class": State.ON,
      "html/no-duplicate-id": State.ON,
      "html/no-duplicate-in-head": State.ON,
      "html/no-ineffective-attrs": State.ON,
      // "html/no-inline-styles": State.OFF /* @CONFLICT: breaks Svelte app.html */,
      "html/no-invalid-entity": State.ON,
      "html/no-nested-interactive": State.ON,
      "html/no-obsolete-tags": State.ON,
      // "html/no-restricted-attr-values": State.OFF,
      // "html/no-restricted-attrs": State.OFF,
      // "html/no-restricted-tags": State.OFF,
      // "html/no-script-style-type": State.OFF,
      "html/no-target-blank": State.ON,
      // "html/prefer-https": State.OFF /* @CONFLICT: not everything is https */,
      // "html/require-attrs": State.OFF,
      "html/require-button-type": State.ON,
      "html/require-closing-tags": State.ON,
      "html/require-doctype": State.ON,
      // "html/require-explicit-size": State.OFF /* preference, prefer using css */,
      "html/require-li-container": State.ON,
      "html/require-meta-charset": State.ON,
      "html/use-baseline": State.ON,
      // #endregion

      // #region SEO
      // DOC: https://html-eslint.org/docs/rules#seo
      "html/no-multiple-h1": State.ON,
      "html/require-lang": State.ON,
      // "html/require-meta-description": State.OFF /* @CONFLICT: breaks Svelte which leaves meta descriptions to route leaves */,
      // "html/require-open-graph-protocol": State.OFF /* idk what this is, also it probably breaks Svelte */,
      // "html/require-title": State.OFF /* @CONFLICT: breaks Svelte which leaves title to route leaves */,
      // #endregion

      // #region ACCESSIBILITY
      // DOC: https://html-eslint.org/docs/rules#accessibility
      "html/no-abstract-roles": State.ON,
      "html/no-accesskey-attrs": State.ON,
      "html/no-aria-hidden-body": State.ON,
      "html/no-aria-hidden-on-focusable": State.ON,
      "html/no-empty-headings": State.ON,
      "html/no-heading-inside-button": State.ON,
      "html/no-invalid-role": State.ON,
      "html/no-non-scalable-viewport": State.ON,
      "html/no-positive-tabindex": State.ON,
      "html/no-skip-heading-levels": State.ON,
      "html/require-form-method": State.ON,
      "html/require-frame-title": State.ON,
      "html/require-img-alt": State.ON,
      "html/require-input-label": State.ON,
      "html/require-meta-viewport": State.ON,
      // #endregion

      // #region STYLE
      // DOC: https://html-eslint.org/docs/rules#style
      "html/attrs-newline": [
        State.ON,
        {
          ifAttrsMoreThan: 0,
        // closeStyle: "newline" /* sameline | @default newline */,
        },
      ],
      "html/element-newline": [
        State.ON,
        {
          skip: ["head"],
          inline: ["$inline"],
        },
      ],
      // "html/id-naming-convention": State.OFF,
      "html/indent": [
        State.ON,
        2 /* tab | number | @default 4 */,
      // {
      //   Attribute: 1 /* number | @default 1 */,
      //   tagChildrenIndent: {
      //     html: 0 /* number */,
      //   } /* @default {} */,
      // },
      ] /* TBD: @CONFIGURE: indents for specific child tags: https://html-eslint.org/docs/rules/indent */,
      "html/lowercase": State.ON,
      "html/no-extra-spacing-attrs": [
        State.ON,
        {
        // enforceBeforeSelfClose: false /* @default false */,
          disallowMissing: true /* @default false */,
          disallowTabs: true /* @default false */,
          disallowInAssignment: true /* @default false */,
        },
      ],
      "html/no-extra-spacing-text": State.ON,
      "html/no-multiple-empty-lines": [
        State.ON,
        {
          max: 1 /* number | @default 2 */,
        },
      ],
      "html/no-trailing-spaces": State.ON,
      "html/quotes": State.ON,
    // "html/sort-attrs": State.OFF,
    // #endregion
    } as const,
  },
];

import {
  ID,
  ERROR,
  OFF,
  never,
} from "../../_strings";

export const HtmlEnable = [
  ID.Enable,
  {
    // #region BEST PRACTICE
    // DOC: https://html-eslint.org/docs/rules#best-practice
    "@html-eslint/no-duplicate-attrs": ERROR,
    "@html-eslint/no-duplicate-id": ERROR,
    "@html-eslint/no-extra-spacing-text": [
      ERROR,
      {
        skip: [],
      },
    ],
    "@html-eslint/no-inline-styles": OFF /* @CONFLICT: breaks Svele app.html */,
    "@html-eslint/no-nested-interactive": ERROR,
    "@html-eslint/no-obsolete-tags": ERROR,
    "@html-eslint/no-restricted-attr-values": OFF,
    "@html-eslint/no-restricted-attrs": OFF,
    "@html-eslint/no-script-style-type": OFF,
    "@html-eslint/no-target-blank": ERROR,
    "@html-eslint/prefer-https": OFF /* @CONFLICT: not everything is https */,
    "@html-eslint/require-attrs": OFF,
    "@html-eslint/require-button-type": ERROR,
    "@html-eslint/require-closing-tags": [
      ERROR,
      {
        selfClosing: never,
        selfClosingCustomPatterns: [""] /* @CONFIGURE: regex[] = custom pattern */,
      },
    ],
    "@html-eslint/require-doctype": ERROR,
    "@html-eslint/require-explicit-size": OFF /* preference, prefer using css */,
    "@html-eslint/require-li-container": ERROR,
    "@html-eslint/require-meta-charset": ERROR,

    // #endregion BEST PRACTICE

    // #region SEO
    // DOC: https://html-eslint.org/docs/rules#seo
    "@html-eslint/no-multiple-h1": ERROR,
    "@html-eslint/require-lang": ERROR,
    "@html-eslint/require-meta-description": OFF /* @CONFLICT: breaks Svelte which leaves meta descriptions to route leaves */,
    "@html-eslint/require-open-graph-protocol": OFF /* idk what this is, also it probably breaks Svelte */,
    "@html-eslint/require-title": OFF /* @CONFLICT: breaks Svelte which leaves title to route leaves */,

    // #endregion SEO

    // #region ACCESSIBILITY
    // DOC: https://html-eslint.org/docs/rules#accessibility
    "@html-eslint/no-abstract-roles": ERROR,
    "@html-eslint/no-accesskey-attrs": ERROR,
    "@html-eslint/no-aria-hidden-body": ERROR,
    "@html-eslint/no-heading-inside-button": ERROR,
    "@html-eslint/no-invalid-role": ERROR,
    "@html-eslint/no-non-scalable-viewport": ERROR,
    "@html-eslint/no-positive-tabindex": ERROR,
    "@html-eslint/no-skip-heading-levels": ERROR,
    "@html-eslint/require-form-method": ERROR,
    "@html-eslint/require-frame-title": ERROR,
    "@html-eslint/require-img-alt": [
      ERROR,
      {
        substitute: [],
      },
    ],
    "@html-eslint/require-input-label": ERROR,
    "@html-eslint/require-meta-viewport": ERROR,

    // #endregion ACCESSIBILITY

    // #region STYLE
    // DOC: https://html-eslint.org/docs/rules#style

    // #endregion STYLE
    "@html-eslint/attrs-newline": [
      ERROR,
      {
        ifAttrsMoreThan: 0,
        closeStyle: "newline",
      },
    ],
    "@html-eslint/element-newline": [
      ERROR,
      {
        skip: ["head"],
        inline: ["$inline"],
      },
    ],
    "@html-eslint/id-naming-convention": OFF,
    "@html-eslint/indent": [
      ERROR,
      2,
    ] /* @CONFIGURE: indents for specific child tags: https://html-eslint.org/docs/rules/indent */,
    "@html-eslint/lowercase": ERROR,
    "@html-eslint/max-element-depth": OFF /* @preference: simply do not care */,
    "@html-eslint/no-extra-spacing-attrs": [
      ERROR,
      {
        enforceBeforeSelfClose: false,
        disallowMissing: true,
        disallowTabs: true,
        disallowInAssignment: true,
      },
    ],
    "@html-eslint/no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
      },
    ],
    "@html-eslint/no-trailing-spaces": ERROR,
    "@html-eslint/quotes": [
      ERROR,
      "double",
    ],
    "@html-eslint/sort-attrs": OFF,
  } as const,
] as const;

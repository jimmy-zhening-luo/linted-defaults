import {
  ID,
  ON,
  OFF,
  never,
} from "../../strings";

export const HtmlEnable = {
  id: ID.Enable,
  rules: {
  // #region BEST PRACTICE
  // DOC: https://html-eslint.org/docs/rules#best-practice
    "@html-eslint/no-duplicate-attrs": ON,
    "@html-eslint/no-duplicate-class": ON,
    "@html-eslint/no-duplicate-id": ON,
    "@html-eslint/no-extra-spacing-text": [
      ON,
      {
        skip: [],
      },
    ],
    "@html-eslint/no-inline-styles": OFF /* @CONFLICT: breaks Svele app.html */,
    "@html-eslint/no-nested-interactive": ON,
    "@html-eslint/no-obsolete-tags": ON,
    "@html-eslint/no-restricted-attr-values": OFF,
    "@html-eslint/no-restricted-attrs": OFF,
    "@html-eslint/no-script-style-type": OFF,
    "@html-eslint/no-target-blank": ON,
    "@html-eslint/prefer-https": OFF /* @CONFLICT: not everything is https */,
    "@html-eslint/require-attrs": OFF,
    "@html-eslint/require-button-type": ON,
    "@html-eslint/require-closing-tags": [
      ON,
      {
        selfClosing: never,
        selfClosingCustomPatterns: [""] /* @CONFIGURE: regex[] = custom pattern */,
      },
    ],
    "@html-eslint/require-doctype": ON,
    "@html-eslint/require-explicit-size": OFF /* preference, prefer using css */,
    "@html-eslint/require-li-container": ON,
    "@html-eslint/require-meta-charset": ON,
    "@html-eslint/use-baseline": [
      ON,
      {
        available: "widely" /* "widely" | "newly" | integer (year) */,
      },
    ],
    // #endregion

    // #region SEO
    // DOC: https://html-eslint.org/docs/rules#seo
    "@html-eslint/no-multiple-h1": ON,
    "@html-eslint/require-lang": ON,
    "@html-eslint/require-meta-description": OFF /* @CONFLICT: breaks Svelte which leaves meta descriptions to route leaves */,
    "@html-eslint/require-open-graph-protocol": OFF /* idk what this is, also it probably breaks Svelte */,
    "@html-eslint/require-title": OFF /* @CONFLICT: breaks Svelte which leaves title to route leaves */,
    // #endregion

    // #region ACCESSIBILITY
    // DOC: https://html-eslint.org/docs/rules#accessibility
    "@html-eslint/no-abstract-roles": ON,
    "@html-eslint/no-accesskey-attrs": ON,
    "@html-eslint/no-aria-hidden-body": ON,
    "@html-eslint/no-heading-inside-button": ON,
    "@html-eslint/no-invalid-role": ON,
    "@html-eslint/no-non-scalable-viewport": ON,
    "@html-eslint/no-positive-tabindex": ON,
    "@html-eslint/no-skip-heading-levels": ON,
    "@html-eslint/require-form-method": ON,
    "@html-eslint/require-frame-title": ON,
    "@html-eslint/require-img-alt": [
      ON,
      {
        substitute: [],
      },
    ],
    "@html-eslint/require-input-label": ON,
    "@html-eslint/require-meta-viewport": ON,
    // #endregion

    // #region STYLE
    // DOC: https://html-eslint.org/docs/rules#style
    "@html-eslint/attrs-newline": [
      ON,
      {
        ifAttrsMoreThan: 0,
        closeStyle: "newline",
      },
    ],
    "@html-eslint/element-newline": [
      ON,
      {
        skip: ["head"],
        inline: ["$inline"],
      },
    ],
    "@html-eslint/id-naming-convention": OFF,
    "@html-eslint/indent": [
      ON,
      2,
    ] /* @CONFIGURE: indents for specific child tags: https://html-eslint.org/docs/rules/indent */,
    "@html-eslint/lowercase": ON,
    "@html-eslint/max-element-depth": OFF /* @preference: simply do not care */,
    "@html-eslint/no-extra-spacing-attrs": [
      ON,
      {
        enforceBeforeSelfClose: false,
        disallowMissing: true,
        disallowTabs: true,
        disallowInAssignment: true,
      },
    ],
    "@html-eslint/no-multiple-empty-lines": [
      ON,
      {
        max: 1,
      },
    ],
    "@html-eslint/no-trailing-spaces": ON,
    "@html-eslint/quotes": [
      ON,
      "double",
    ],
    "@html-eslint/sort-attrs": OFF,
    // #endregion
  } as const,
} as const;

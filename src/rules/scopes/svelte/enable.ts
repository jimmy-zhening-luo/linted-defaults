import {
  ID,
  ERROR,
  OFF,
  all,
  always,
  below,
  double,
  ignore,
  never,
} from "../../strings";

export const SvelteEnable = {
  id: ID.Enable,
  rules: {
  // #region ERRORS
  // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#possible-errors
    "svelte/infinite-reactive-loop": ERROR,
    "svelte/no-dom-manipulating": ERROR,
    "svelte/no-dupe-else-if-blocks": ERROR,
    "svelte/no-dupe-on-directives": ERROR,
    "svelte/no-dupe-style-properties": ERROR,
    "svelte/no-dupe-use-directives": ERROR,
    "svelte/no-not-function-handler": ERROR,
    "svelte/no-object-in-text-mustaches": ERROR,
    "svelte/no-raw-special-elements": ERROR,
    "svelte/no-reactive-reassign": [
      ERROR,
      {
        props: true,
      },
    ],
    "svelte/no-shorthand-style-property-overrides": ERROR,
    "svelte/no-store-async": ERROR,
    "svelte/no-unknown-style-directive-property": [
      ERROR,
      {
        ignorePrefixed: true,
      },
    ],
    "svelte/require-store-callbacks-use-set-param": ERROR,
    "svelte/require-store-reactive-access": ERROR,
    "svelte/valid-compile": [
      ERROR,
      {
        ignoreWarnings: false,
      },
    ],
    "svelte/valid-style-parse": ERROR,

    // #endregion

    // #region SECURITY
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#security-vulnerability
    "svelte/no-at-html-tags": ERROR,
    "svelte/no-target-blank": [
      ERROR,
      {
        allowReferrer: false,
        enforceDynamicLinks: always,
      },
    ],

    // #endregion

    // #region BEST PRACTICES
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#best-practices
    "svelte/block-lang": [
      ERROR,
      {
        enforceScriptPresent: true,
        enforceStylePresent: false,
        script: ["ts"],
        style: [
          "css",
          "scss",
        ],
      },
    ], /* INVESTIGATE: */
    "svelte/button-has-type": [
      ERROR,
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    "svelte/no-at-debug-tags": ERROR,
    "svelte/no-ignored-unsubscribe": ERROR,
    "svelte/no-immutable-reactive-statements": ERROR,
    "svelte/no-inline-styles": [
      ERROR,
      {
        allowTransitions: false,
      },
    ],
    "svelte/no-reactive-functions": ERROR,
    "svelte/no-reactive-literals": ERROR,
    "svelte/no-svelte-internal": ERROR,
    "svelte/no-unnecessary-state-wrap": [
      ERROR,
      {
        additionalReactiveClasses: [],
        allowReassign: false,
      },
    ],
    "svelte/no-unused-class-name": OFF /* incompatible: breaks if css class is located in another file; BUG: ESLint error if array empty */,
    "svelte/no-unused-props": [
      ERROR,
      {
        checkImportedTypes: true,
        ignorePropertyPatterns: [],
        ignoreTypePatterns: [],
      },
    ],
    "svelte/no-unused-svelte-ignore": ERROR,
    "svelte/no-useless-children-snippet": ERROR,
    "svelte/no-useless-mustaches": [
      ERROR,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    "svelte/prefer-const": [
      ERROR,
      {
        destructuring: all,
        ignoreReadBeforeAssign: false /* BUG: doc says `ignoreReadonly`, but actually same as ESLint/prefer-const: `ignoreReadBeforeAssign` */,
      },
    ] /* same options: prefer-const */,
    "svelte/prefer-destructured-store-props": ERROR,
    "svelte/require-each-key": ERROR,
    "svelte/require-event-dispatcher-types": ERROR,
    "svelte/require-optimized-style-attribute": ERROR,
    "svelte/require-stores-init": ERROR,
    "svelte/valid-each-key": ERROR,

    // #endregion

    // #region STYLE
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#stylistic-issues
    "svelte/consistent-selector-style": [
      ERROR,
      {
        checkGlobal: true /* @default: false */,
        style: [
          "type",
          "id",
          "class",
        ],
      },
    ],
    "svelte/derived-has-same-inputs-outputs": ERROR,
    "svelte/first-attribute-linebreak": [
      ERROR,
      {
        multiline: below,
        singleline: below,
      },
    ],
    "svelte/html-closing-bracket-new-line": [
      ERROR,
      {
        singleline: never,
        multiline: always,
        selfClosingTag: {
          singleline: never,
          multiline: always,
        },
      },
    ],
    "svelte/html-closing-bracket-spacing": [
      ERROR,
      {
        startTag: never,
        endTag: never,
        selfClosingTag: never,
      },
    ],
    "svelte/html-quotes": [
      ERROR,
      {
        prefer: double,
        dynamic: {
          quoted: false,
          avoidInvalidUnquotedInHTML: true,
        },
      },
    ],
    "svelte/html-self-closing": [
      ERROR,
      {
        "void": always,
        component: always,
        svelte: always,
        normal: ignore,
      } /* always | never | ignore */,
    ] /* BUG: `foreign` option was deprecated */,
    "svelte/indent": [
      ERROR,
      {
        indent: 2,
        indentScript: true,
        ignoredNodes: [],
        switchCase: 1,
        alignAttributesVertically: false,
      },
    ],
    "svelte/max-attributes-per-line": [
      ERROR,
      {
        multiline: 1,
        singleline: 1,
      },
    ],
    "svelte/mustache-spacing": [
      ERROR,
      {
        textExpressions: never /* or ALWAYS */,
        attributesAndProps: never /* or ALWAYS */,
        directiveExpressions: never /* or ALWAYS */,
        tags: {
          openingBrace: never /* or ALWAYS */,
          closingBrace: never /* or ALWAYS or "always-after-expression" */,
        },
      },
    ],
    "svelte/no-extra-reactive-curlies": ERROR,
    "svelte/no-restricted-html-elements": OFF,
    "svelte/no-spaces-around-equal-signs-in-attribute": ERROR,
    "svelte/prefer-class-directive": [
      ERROR,
      {
        prefer: "empty",
      },
    ],
    "svelte/prefer-style-directive": ERROR,
    "svelte/shorthand-attribute": [
      ERROR,
      {
        prefer: always,
      },
    ],
    "svelte/shorthand-directive": [
      ERROR,
      {
        prefer: always,
      },
    ],
    "svelte/sort-attributes": OFF /* INVESTIGATE: */,
    "svelte/spaced-html-comment": [
      ERROR,
      always,
    ],

    // #endregion

    // #region SVELTE-KIT
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#svelte-kit
    "svelte/no-export-load-in-svelte-module-in-kit-pages": ERROR,
    "svelte/no-navigation-without-base": [
      ERROR,
      {
        ignoreGoto: false,
        ignoreLinks: true /* ignore <a> links | @default: false */,
        ignorePushState: false,
        ignoreReplaceState: false,
      },
    ],
    "svelte/valid-prop-names-in-kit-pages": ERROR,

    // #endregion

    // #region REQUIRED
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#system
    "svelte/comment-directive": [
      ERROR,
      {
        reportUnusedDisableDirectives: true,
      },
    ],
    "svelte/system": ERROR,

    // #endregion

  } as const,
} as const;

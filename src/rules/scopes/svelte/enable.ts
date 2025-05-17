import {
  ID,
  ON,
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
    "svelte/infinite-reactive-loop": ON,
    "svelte/no-dom-manipulating": ON,
    "svelte/no-dupe-else-if-blocks": ON,
    "svelte/no-dupe-on-directives": ON,
    "svelte/no-dupe-style-properties": ON,
    "svelte/no-dupe-use-directives": ON,
    "svelte/no-not-function-handler": ON,
    "svelte/no-object-in-text-mustaches": ON,
    "svelte/no-raw-special-elements": ON,
    "svelte/no-reactive-reassign": [
      ON,
      {
        props: true,
      },
    ],
    "svelte/no-shorthand-style-property-overrides": ON,
    "svelte/no-store-async": ON,
    "svelte/no-top-level-browser-globals": ON,
    "svelte/no-unknown-style-directive-property": [
      ON,
      {
        ignorePrefixed: true,
      },
    ],
    "svelte/require-store-callbacks-use-set-param": ON,
    "svelte/require-store-reactive-access": ON,
    "svelte/valid-compile": [
      ON,
      {
        ignoreWarnings: false,
      },
    ],
    "svelte/valid-style-parse": ON,

    // #endregion

    // #region SECURITY
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#security-vulnerability
    "svelte/no-at-html-tags": ON,
    "svelte/no-target-blank": [
      ON,
      {
        allowReferrer: false,
        enforceDynamicLinks: always,
      },
    ],

    // #endregion

    // #region BEST PRACTICES
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#best-practices
    "svelte/block-lang": [
      ON,
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
      ON,
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    "svelte/no-add-event-listener": ON,
    "svelte/no-at-debug-tags": ON,
    "svelte/no-ignored-unsubscribe": ON,
    "svelte/no-immutable-reactive-statements": ON,
    "svelte/no-inline-styles": [
      ON,
      {
        allowTransitions: false,
      },
    ],
    "svelte/no-reactive-functions": ON,
    "svelte/no-reactive-literals": ON,
    "svelte/no-svelte-internal": ON,
    "svelte/no-unnecessary-state-wrap": [
      ON,
      {
        additionalReactiveClasses: [],
        allowReassign: false,
      },
    ],
    "svelte/no-unused-class-name": OFF /* incompatible: breaks if css class is located in another file; BUG: ESLint error if array empty */,
    "svelte/no-unused-props": [
      ON,
      {
        checkImportedTypes: true,
        ignorePropertyPatterns: [],
        ignoreTypePatterns: [],
        allowUnusedNestedProperties: false,
      },
    ],
    "svelte/no-unused-svelte-ignore": ON,
    "svelte/no-useless-children-snippet": ON,
    "svelte/no-useless-mustaches": [
      ON,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    "svelte/prefer-const": [
      ON,
      {
        destructuring: all,
        ignoreReadBeforeAssign: false /* BUG: doc says `ignoreReadonly`, but actually same as ESLint/prefer-const: `ignoreReadBeforeAssign` */,
      },
    ] /* same options: prefer-const */,
    "svelte/prefer-destructured-store-props": ON,
    "svelte/prefer-writable-derived": ON,
    "svelte/require-each-key": ON,
    "svelte/require-event-dispatcher-types": ON,
    "svelte/require-optimized-style-attribute": ON,
    "svelte/require-stores-init": ON,
    "svelte/valid-each-key": ON,

    // #endregion

    // #region STYLE
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#stylistic-issues
    "svelte/consistent-selector-style": [
      ON,
      {
        checkGlobal: true /* @default: false */,
        style: [
          "type",
          "id",
          "class",
        ],
      },
    ],
    "svelte/derived-has-same-inputs-outputs": ON,
    "svelte/first-attribute-linebreak": [
      ON,
      {
        multiline: below,
        singleline: below,
      },
    ],
    "svelte/html-closing-bracket-new-line": [
      ON,
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
      ON,
      {
        startTag: never,
        endTag: never,
        selfClosingTag: never,
      },
    ],
    "svelte/html-quotes": [
      ON,
      {
        prefer: double,
        dynamic: {
          quoted: false,
          avoidInvalidUnquotedInHTML: true,
        },
      },
    ],
    "svelte/html-self-closing": [
      ON,
      {
        "void": always,
        component: always,
        svelte: always,
        normal: ignore,
      } /* always | never | ignore */,
    ] /* BUG: `foreign` option was deprecated */,
    "svelte/indent": [
      ON,
      {
        indent: 2,
        indentScript: true,
        ignoredNodes: [],
        switchCase: 1,
        alignAttributesVertically: false,
      },
    ],
    "svelte/max-attributes-per-line": [
      ON,
      {
        multiline: 1,
        singleline: 1,
      },
    ],
    "svelte/mustache-spacing": [
      ON,
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
    "svelte/no-extra-reactive-curlies": ON,
    "svelte/no-restricted-html-elements": OFF,
    "svelte/no-spaces-around-equal-signs-in-attribute": ON,
    "svelte/prefer-class-directive": [
      ON,
      {
        prefer: "empty",
      },
    ],
    "svelte/prefer-style-directive": ON,
    "svelte/require-event-prefix": [
      ON,
      {
        checkAsyncFunctions: false,
      },
    ],
    "svelte/shorthand-attribute": [
      ON,
      {
        prefer: always,
      },
    ],
    "svelte/shorthand-directive": [
      ON,
      {
        prefer: always,
      },
    ],
    "svelte/sort-attributes": OFF /* INVESTIGATE: */,
    "svelte/spaced-html-comment": [
      ON,
      always,
    ],

    // #endregion

    // #region SVELTE-KIT
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#svelte-kit
    "svelte/no-export-load-in-svelte-module-in-kit-pages": ON,
    "svelte/no-navigation-without-base": [
      ON,
      {
        ignoreGoto: false,
        ignoreLinks: true /* ignore <a> links | @default: false */,
        ignorePushState: false,
        ignoreReplaceState: false,
      },
    ],
    "svelte/valid-prop-names-in-kit-pages": ON,

    // #endregion

    // #region REQUIRED
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#system
    "svelte/comment-directive": [
      ON,
      {
        reportUnusedDisableDirectives: true,
      },
    ],
    "svelte/system": ON,

    // #endregion

  } as const,
} as const;

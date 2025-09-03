import {
  ID,
  // OFF,
  ON,
  all,
  below,
  double,
  never,
} from "../_strings";

export const SvelteEnable = {
  id: ID.Enable.Enable,
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
    "svelte/no-reactive-reassign": ON,
    "svelte/no-shorthand-style-property-overrides": ON,
    "svelte/no-store-async": ON,
    "svelte/no-top-level-browser-globals": ON,
    "svelte/no-unknown-style-directive-property": ON,
    "svelte/prefer-svelte-reactivity": ON,
    "svelte/require-store-callbacks-use-set-param": ON,
    "svelte/require-store-reactive-access": ON,
    "svelte/valid-compile": ON,
    "svelte/valid-style-parse": ON,
    // #endregion

    // #region SECURITY
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#security-vulnerability
    "svelte/no-at-html-tags": ON,
    "svelte/no-target-blank": ON,
    // #endregion

    // #region BEST PRACTICES
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#best-practices
    "svelte/block-lang": [
      ON,
      {
        script: ["ts"],
        style: ["css"],
      },
    ], /* INVESTIGATE: */
    "svelte/button-has-type": ON,
    "svelte/no-add-event-listener": ON,
    "svelte/no-at-debug-tags": ON,
    "svelte/no-ignored-unsubscribe": ON,
    "svelte/no-immutable-reactive-statements": ON,
    "svelte/no-inline-styles": ON,
    "svelte/no-reactive-functions": ON,
    "svelte/no-reactive-literals": ON,
    "svelte/no-svelte-internal": ON,
    "svelte/no-unnecessary-state-wrap": ON,
    // "svelte/no-unused-class-name": OFF /* incompatible: breaks if css class is located in another file; BUG: ESLint error if array empty */,
    "svelte/no-unused-props": [
      ON,
      {
        checkImportedTypes: true,
      },
    ],
    "svelte/no-unused-svelte-ignore": ON,
    "svelte/no-useless-children-snippet": ON,
    "svelte/no-useless-mustaches": ON,
    "svelte/prefer-const": [
      ON,
      {
        destructuring: all,
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
        checkGlobal: true /* @default false */,
      },
    ],
    "svelte/derived-has-same-inputs-outputs": ON,
    "svelte/first-attribute-linebreak": [
      ON,
      {
        singleline: below,
      },
    ],
    "svelte/html-closing-bracket-new-line": ON,
    "svelte/html-closing-bracket-spacing": [
      ON,
      {
        selfClosingTag: never,
      },
    ],
    "svelte/html-quotes": [
      ON,
      {
        prefer: double /* @default ? */,
        dynamic: {
          avoidInvalidUnquotedInHTML: true,
        },
      },
    ],
    "svelte/html-self-closing": ON,
    "svelte/indent": ON,
    "svelte/max-attributes-per-line": ON,
    "svelte/mustache-spacing": ON,
    "svelte/no-extra-reactive-curlies": ON,
    // "svelte/no-restricted-html-elements": OFF,
    "svelte/no-spaces-around-equal-signs-in-attribute": ON,
    "svelte/prefer-class-directive": [
      ON,
      {
        prefer: "empty",
      },
    ],
    "svelte/prefer-style-directive": ON,
    "svelte/require-event-prefix": ON,
    "svelte/shorthand-attribute": ON,
    "svelte/shorthand-directive": ON,
    // "svelte/sort-attributes": OFF /* INVESTIGATE: */,
    "svelte/spaced-html-comment": ON /* INFO: does not have third object option (exceptions/markers), unlike @stylistic/spaced-comment */,
    // #endregion

    // #region SVELTE-KIT
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#svelte-kit
    "svelte/no-export-load-in-svelte-module-in-kit-pages": ON,
    "svelte/no-navigation-without-resolve": ON,
    "svelte/valid-prop-names-in-kit-pages": ON,
    // #endregion

    // #region REQUIRED
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#system
    "svelte/comment-directive": ON,
    "svelte/system": ON,
    // #endregion
  } as const,
};

import { State } from "../state";

// DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/
export default {
  id: "enable",
  rules: {
    // #region ERRORS
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#possible-errors
    "svelte/infinite-reactive-loop": State.ON,
    "svelte/no-dom-manipulating": State.ON,
    "svelte/no-dupe-else-if-blocks": State.ON,
    "svelte/no-dupe-on-directives": State.ON,
    "svelte/no-dupe-style-properties": State.ON,
    "svelte/no-dupe-use-directives": State.ON,
    "svelte/no-not-function-handler": State.ON,
    "svelte/no-object-in-text-mustaches": State.ON,
    "svelte/no-raw-special-elements": State.ON,
    "svelte/no-reactive-reassign": State.ON,
    "svelte/no-shorthand-style-property-overrides": State.ON,
    "svelte/no-store-async": State.ON,
    "svelte/no-top-level-browser-globals": State.ON,
    "svelte/no-unknown-style-directive-property": State.ON,
    "svelte/prefer-svelte-reactivity": State.ON,
    "svelte/require-store-callbacks-use-set-param": State.ON,
    "svelte/require-store-reactive-access": State.ON,
    "svelte/valid-compile": State.ON,
    "svelte/valid-style-parse": State.ON,
    // #endregion

    // #region SECURITY
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#security-vulnerability
    "svelte/no-at-html-tags": State.ON,
    "svelte/no-target-blank": State.ON,
    // #endregion

    // #region BEST PRACTICES
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#best-practices
    "svelte/block-lang": [
      State.ON,
      {
        script: ["ts"],
        style: ["css"],
      },
    ], /* INVESTIGATE: */
    "svelte/button-has-type": State.ON,
    "svelte/no-add-event-listener": State.ON,
    "svelte/no-at-debug-tags": State.ON,
    "svelte/no-ignored-unsubscribe": State.ON,
    "svelte/no-immutable-reactive-statements": State.ON,
    "svelte/no-inline-styles": State.ON,
    "svelte/no-reactive-functions": State.ON,
    "svelte/no-reactive-literals": State.ON,
    "svelte/no-svelte-internal": State.ON,
    "svelte/no-unnecessary-state-wrap": State.ON,
    // "svelte/no-unused-class-name": State.OFF /* incompatible: breaks if css class is located in another file; BUG: ESLint error if array empty */,
    "svelte/no-unused-props": [
      State.ON,
      {
        checkImportedTypes: true,
      },
    ],
    "svelte/no-unused-svelte-ignore": State.ON,
    "svelte/no-useless-children-snippet": State.ON,
    "svelte/no-useless-mustaches": State.ON,
    "svelte/prefer-const": [
      State.ON,
      {
        destructuring: "all",
      },
    ] /* same options: prefer-const */,
    "svelte/prefer-destructured-store-props": State.ON,
    "svelte/prefer-writable-derived": State.ON,
    "svelte/require-each-key": State.ON,
    "svelte/require-event-dispatcher-types": State.ON,
    "svelte/require-optimized-style-attribute": State.ON,
    "svelte/require-stores-init": State.ON,
    "svelte/valid-each-key": State.ON,
    // #endregion

    // #region STYLE
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#stylistic-issues
    "svelte/consistent-selector-style": [
      State.ON,
      {
        checkGlobal: true /* @default false */,
      },
    ],
    "svelte/derived-has-same-inputs-outputs": State.ON,
    "svelte/first-attribute-linebreak": [
      State.ON,
      {
        singleline: "below",
      },
    ],
    "svelte/html-closing-bracket-new-line": State.ON,
    "svelte/html-closing-bracket-spacing": [
      State.ON,
      {
        selfClosingTag: "never",
      },
    ],
    // "svelte/html-quotes": State.OFF /* BUG: incompatible with object props, which should not be stringified */,
    "svelte/html-self-closing": State.ON,
    "svelte/indent": State.ON,
    "svelte/max-attributes-per-line": State.ON,
    "svelte/mustache-spacing": State.ON,
    "svelte/no-extra-reactive-curlies": State.ON,
    // "svelte/no-restricted-html-elements": State.OFF,
    "svelte/no-spaces-around-equal-signs-in-attribute": State.ON,
    "svelte/prefer-class-directive": [
      State.ON,
      {
        prefer: "empty",
      },
    ],
    "svelte/prefer-style-directive": State.ON,
    "svelte/require-event-prefix": State.ON,
    "svelte/shorthand-attribute": State.ON,
    "svelte/shorthand-directive": State.ON,
    // "svelte/sort-attributes": State.OFF /* INVESTIGATE: */,
    "svelte/spaced-html-comment": State.ON /* INFO: does not have third object option (exceptions/markers), unlike @stylistic/spaced-comment */,
    // #endregion

    // #region SVELTE-KIT
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#svelte-kit
    "svelte/no-export-load-in-svelte-module-in-kit-pages": State.ON,
    "svelte/no-navigation-without-resolve": State.ON,
    "svelte/valid-prop-names-in-kit-pages": State.ON,
    // #endregion

    // #region REQUIRED
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#system
    "svelte/comment-directive": State.ON,
    "svelte/system": State.ON,
    // #endregion
  } as const,
};

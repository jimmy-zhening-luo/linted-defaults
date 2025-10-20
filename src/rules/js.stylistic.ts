import { State } from "./state";

// DOC: https://eslint.style/rules
export default {
  name: "enable/stylistic",
  rules: {
    "stylistic/array-bracket-newline": State.ON,
    "stylistic/array-bracket-spacing": State.ON,
    "stylistic/array-element-newline": [
      State.ON,
      {
        consistent: true,
        multiline: true,
        minItems: 3,
      } /* never | consistent | @default always | { ... } */,
    ],
    "stylistic/arrow-parens": [
      State.ON,
      "as-needed" /* as-needed | @default always */,
    ],
    "stylistic/arrow-spacing": State.ON,
    "stylistic/block-spacing": State.ON,
    "stylistic/brace-style": [
      State.ON,
      "stroustrup" /* stroustrup | allman | @default 1tbs */,
      {
        allowSingleLine: true /* @default false */,
      },
    ],
    "stylistic/comma-dangle": [
      State.ON,
      "always-multiline",
    ],
    "stylistic/comma-spacing": State.ON,
    "stylistic/comma-style": State.ON,
    "stylistic/computed-property-spacing": State.ON,
    "stylistic/curly-newline": State.ON,
    "stylistic/dot-location": [
      State.ON,
      "property" /* property | @default object */,
    ],
    "stylistic/eol-last": State.ON,
    "stylistic/function-call-argument-newline": [
      State.ON,
      "consistent" /* consistent | never | @default always */,
    ],
    "stylistic/function-call-spacing": State.ON,
    "stylistic/function-paren-newline": [
      State.ON,
      "multiline-arguments",
    ] /* BUG: https://github.com/eslint-stylistic/eslint-stylistic/issues/290 */,
    "stylistic/generator-star-spacing": State.ON,
    "stylistic/implicit-arrow-linebreak": State.ON,
    "stylistic/indent": [
      State.ON,
      2 /* tab | number | @default 4 */,
      {
        assignmentOperator: 0,
        VariableDeclarator: {
          "var": 0,
          let: 0,
          "const": 0,
        },
        outerIIFEBody: 0,
        offsetTernaryExpressions: true,
      },
    ],
    "stylistic/indent-binary-ops": [
      State.ON,
      2 /* MUST be same as `stylistic/indent`[1] */,
    ],
    "stylistic/key-spacing": State.ON,
    "stylistic/keyword-spacing": State.ON,
    // "stylistic/line-comment-position": State.OFF,
    // "stylistic/lines-around-comment": State.OFF,
    "stylistic/lines-between-class-members": [
      State.ON,
      {
        enforce: [
          {
            prev: "field",
            next: "field",
            blankLine: "never",
          },
          {
            prev: "field",
            next: "method",
            blankLine: "always",
          },
          {
            prev: "method",
            next: "*",
            blankLine: "always",
          },
        ],
      },
    ],
    "stylistic/max-len": [
      State.ON,
      {
        code: 300 /* @default 80 */,
        // tabWidth: 4,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "stylistic/max-statements-per-line": State.ON,
    "stylistic/member-delimiter-style": State.ON,
    // "stylistic/multiline-comment-style": State.OFF,
    "stylistic/multiline-ternary": [
      State.ON,
      "always-multiline" /* never | always-multiline | @default always */,
    ],
    // "stylistic/new-parens": State.OFF,
    "stylistic/newline-per-chained-call": State.ON,
    // "stylistic/no-confusing-arrow": State.OFF,
    "stylistic/no-extra-parens": State.ON,
    "stylistic/no-extra-semi": State.ON,
    "stylistic/no-floating-decimal": State.ON,
    // "stylistic/no-mixed-operators": State.OFF,
    "stylistic/no-mixed-spaces-and-tabs": State.ON,
    "stylistic/no-multi-spaces": [
      State.ON,
      {
        exceptions: {
          Property: false,
          ImportAttributes: false,
        },
      },
    ],
    "stylistic/no-multiple-empty-lines": [
      State.ON,
      {
        max: 1 /* @default 2 */,
        maxBOF: 0,
        maxEOF: 0 /* combine with `eol-last` to ensure file still ends with a single line-break (eol character) */,
      },
    ],
    "stylistic/no-tabs": State.ON,
    "stylistic/no-trailing-spaces": State.ON,
    "stylistic/no-whitespace-before-property": State.ON,
    "stylistic/nonblock-statement-body-position": [
      State.ON,
      "below" /* any | below | @default beside */,
    ],
    "stylistic/object-curly-newline": [
      State.ON,
      {
        consistent: true,
        multiline: true,
        minProperties: 3,
      },
    ],
    "stylistic/object-curly-spacing": [
      State.ON,
      "always" /* always | @default never */,
      {
        emptyObjects: "never",
      },
    ],
    "stylistic/object-property-newline": State.ON,
    "stylistic/one-var-declaration-per-line": [
      State.ON,
      "always" /* always | @default initializations */,
    ],
    "stylistic/operator-linebreak": [
      State.ON,
      "before" /* ignore | none | before | @default after */,
    ],
    "stylistic/padded-blocks": [
      State.ON,
      "never" /* never | start | end | @default always */,
      {
        allowSingleLineBlocks: true,
      },
    ],
    // "stylistic/padding-line-between-statements": State.OFF /* preference | BUG: when in editor, always removes too many lines and ends up crushing two lines into one statement, which then cannot be autofixed */,
    "stylistic/quote-props": [
      State.ON,
      "as-needed",
      {
        keywords: true,
      },
    ],
    "stylistic/quotes": [
      State.ON,
      "double" /* @default double */,
      {
        avoidEscape: true,
        allowTemplateLiterals: "always" /* always | avoidEscape | @default never */,
      },
    ],
    "stylistic/rest-spread-spacing": State.ON,
    "stylistic/semi": State.ON,
    "stylistic/semi-spacing": State.ON,
    "stylistic/semi-style": State.ON,
    "stylistic/space-before-blocks": State.ON,
    "stylistic/space-before-function-paren": [
      State.ON,
      {
        named: "never",
      },
    ],
    "stylistic/space-in-parens": State.ON,
    "stylistic/space-infix-ops": State.ON,
    "stylistic/space-unary-ops": State.ON,
    "stylistic/spaced-comment": [
      State.ON,
      "always",
      {
        line: {
          exceptions: [
            "/",
            "-",
            "+",
            "=",
          ],
          markers: [
            "!",
            "@",
            "#",
            "/",
            "#region",
            "#endregion",
            "#part",
            "/#region",
            "/#endregion",
            "/#part",
          ],
        },
        block: {
          exceptions: ["*"],
          markers: ["*"],
          balanced: true,
        },
      },
    ],
    "stylistic/switch-colon-spacing": State.ON,
    "stylistic/template-curly-spacing": State.ON,
    "stylistic/template-tag-spacing": State.ON,
    "stylistic/type-annotation-spacing": [
      State.ON,
      {
        before: true,
        after: true,
        overrides: {
          colon: {
            before: false,
            after: true,
          },
        },
      } /* non-overriden rule affects all type annotations (arrows, "as" keyword, "satisfies" keyword) except colons */,
    ],
    "stylistic/type-generic-spacing": State.ON,
    "stylistic/type-named-tuple-spacing": State.ON,
    "stylistic/wrap-iife": [
      State.ON,
      "inside",
      {
        functionPrototypeMethods: true,
      },
    ],
    "stylistic/wrap-regex": State.ON,
    "stylistic/yield-star-spacing": State.ON,
  } as const,
};

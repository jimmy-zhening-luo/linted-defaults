import { State } from "./state";

// DOC: https://eslint.style/rules
export default {
  rules: {
    "stylistic/array-bracket-newline": State.WARN,
    "stylistic/array-bracket-spacing": State.WARN,
    "stylistic/array-element-newline": [
      State.WARN,
      {
        consistent: true,
        multiline: true,
        minItems: 3,
      },
    ],
    "stylistic/arrow-parens": [
      State.WARN,
      "as-needed",
    ],
    "stylistic/arrow-spacing": State.WARN,
    "stylistic/block-spacing": State.WARN,
    "stylistic/brace-style": [
      State.WARN,
      "stroustrup",
      {
        allowSingleLine: true,
      },
    ],
    "stylistic/comma-dangle": [
      State.WARN,
      "always-multiline",
    ],
    "stylistic/comma-spacing": State.WARN,
    "stylistic/comma-style": State.WARN,
    "stylistic/computed-property-spacing": State.WARN,
    "stylistic/curly-newline": State.WARN,
    "stylistic/dot-location": [
      State.WARN,
      "property",
    ],
    // "stylistic/eol-last": State.OFF /* @global */,
    "stylistic/function-call-argument-newline": [
      State.WARN,
      "consistent",
    ],
    "stylistic/function-call-spacing": State.WARN,
    "stylistic/function-paren-newline": [
      State.WARN,
      "multiline-arguments",
    ] /* BUG: https://github.com/eslint-stylistic/eslint-stylistic/issues/290 */,
    "stylistic/generator-star-spacing": State.WARN,
    "stylistic/implicit-arrow-linebreak": State.WARN,
    "stylistic/indent": [
      State.WARN,
      2,
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
      State.WARN,
      2 /* MUST be same as `stylistic/indent`[1] */,
    ],
    "stylistic/key-spacing": State.WARN,
    "stylistic/keyword-spacing": State.WARN,
    // "stylistic/line-comment-position": State.OFF,
    // "stylistic/linebreak-style": State.OFF /* @global */,
    // "stylistic/lines-around-comment": State.OFF,
    "stylistic/lines-between-class-members": [
      State.WARN,
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
      State.WARN,
      {
        code: 300,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "stylistic/max-statements-per-line": State.WARN,
    "stylistic/member-delimiter-style": State.WARN,
    // "stylistic/multiline-comment-style": State.OFF,
    "stylistic/multiline-ternary": [
      State.WARN,
      "always-multiline",
    ],
    // "stylistic/new-parens": State.OFF,
    "stylistic/newline-per-chained-call": State.WARN,
    // "stylistic/no-confusing-arrow": State.OFF,
    "stylistic/no-extra-parens": State.WARN,
    "stylistic/no-extra-semi": State.WARN,
    "stylistic/no-floating-decimal": State.WARN,
    // "stylistic/no-mixed-operators": State.OFF,
    "stylistic/no-mixed-spaces-and-tabs": State.WARN,
    "stylistic/no-multi-spaces": [
      State.WARN,
      {
        exceptions: {
          Property: false,
          ImportAttributes: false,
        },
      },
    ],
    "stylistic/no-multiple-empty-lines": [
      State.WARN,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0 /* INFO: combine with `eol-last` to ensure file still ends with a single line-break (eol character) */,
      },
    ],
    "stylistic/no-tabs": State.WARN,
    "stylistic/no-trailing-spaces": State.WARN,
    "stylistic/no-whitespace-before-property": State.WARN,
    "stylistic/nonblock-statement-body-position": [
      State.WARN,
      "below",
    ],
    "stylistic/object-curly-newline": [
      State.WARN,
      {
        consistent: true,
        multiline: true,
        minProperties: 3,
      },
    ],
    "stylistic/object-curly-spacing": [
      State.WARN,
      "always",
      {
        emptyObjects: "never",
      },
    ],
    "stylistic/object-property-newline": State.WARN,
    "stylistic/one-var-declaration-per-line": [
      State.WARN,
      "always",
    ],
    "stylistic/operator-linebreak": [
      State.WARN,
      "before",
    ],
    "stylistic/padded-blocks": [
      State.WARN,
      "never",
      {
        allowSingleLineBlocks: true,
      },
    ],
    // "stylistic/padding-line-between-statements": State.OFF /* BUG: when in editor, always removes too many lines and ends up crushing two lines into one statement, which then cannot be autofixed */,
    "stylistic/quote-props": [
      State.WARN,
      "as-needed",
      {
        keywords: true,
      },
    ],
    "stylistic/quotes": [
      State.WARN,
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: "always",
      },
    ],
    "stylistic/rest-spread-spacing": State.WARN,
    "stylistic/semi": State.WARN,
    "stylistic/semi-spacing": State.WARN,
    "stylistic/semi-style": State.WARN,
    "stylistic/space-before-blocks": State.WARN,
    "stylistic/space-before-function-paren": [
      State.WARN,
      {
        named: "never",
      },
    ],
    "stylistic/space-in-parens": State.WARN,
    "stylistic/space-infix-ops": State.WARN,
    "stylistic/space-unary-ops": State.WARN,
    "stylistic/spaced-comment": [
      State.WARN,
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
    "stylistic/switch-colon-spacing": State.WARN,
    "stylistic/template-curly-spacing": State.WARN,
    "stylistic/template-tag-spacing": State.WARN,
    "stylistic/type-annotation-spacing": [
      State.WARN,
      {
        before: true,
        after: true,
        overrides: {
          colon: {
            before: false,
            after: true,
          },
        },
      } /* BUG: non-overriden rule affects all type annotations (arrows, "as" keyword, "satisfies" keyword) except colons */,
    ],
    "stylistic/type-generic-spacing": State.WARN,
    "stylistic/type-named-tuple-spacing": State.WARN,
    "stylistic/wrap-iife": [
      State.WARN,
      "inside",
      {
        functionPrototypeMethods: true,
      },
    ],
    "stylistic/wrap-regex": State.WARN,
    "stylistic/yield-star-spacing": State.WARN,
  } as const,
};

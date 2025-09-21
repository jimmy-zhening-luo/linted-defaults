import {
  ID,
  // OFF,
  WARN,
  ON,
  always_multiline,
  always,
  as_needed,
  before,
  below,
  consistent,
  double,
  inside,
  never,
  wildcard,
} from "./_strings";

export default {
  id: ID.Enable.Style,
  rules: {
    // DOC: https://eslint.style/rules
    "@stylistic/array-bracket-newline": ON,
    "@stylistic/array-bracket-spacing": ON,
    "@stylistic/array-element-newline": [
      ON,
      {
        consistent: true,
        multiline: true,
        minItems: 3,
      } /* never | consistent | @default always | { ... } */,
    ],
    "@stylistic/arrow-parens": [
      ON,
      as_needed /* as-needed | @default always */,
    ],
    "@stylistic/arrow-spacing": ON,
    "@stylistic/block-spacing": ON,
    "@stylistic/brace-style": [
      ON,
      "stroustrup" /* stroustrup | allman | @default 1tbs */,
      {
        allowSingleLine: true /* @default false */,
      },
    ],
    "@stylistic/comma-dangle": [
      ON,
      always_multiline,
    ],
    "@stylistic/comma-spacing": ON,
    "@stylistic/comma-style": ON,
    "@stylistic/computed-property-spacing": ON,
    "@stylistic/curly-newline": ON,
    "@stylistic/dot-location": [
      ON,
      "property" /* property | @default object */,
    ],
    "@stylistic/eol-last": ON,
    "@stylistic/function-call-argument-newline": [
      ON,
      consistent /* consistent | never | @default always */,
    ],
    "@stylistic/function-call-spacing": ON,
    "@stylistic/function-paren-newline": [
      ON,
      "multiline-arguments",
    ] /* BUG: https://github.com/eslint-stylistic/eslint-stylistic/issues/290 */,
    "@stylistic/generator-star-spacing": ON,
    "@stylistic/implicit-arrow-linebreak": ON,
    "@stylistic/indent": [
      ON,
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
    "@stylistic/indent-binary-ops": [
      ON,
      2 /* MUST be same as `@stylistic/indent`[1] */,
    ],
    "@stylistic/key-spacing": ON,
    "@stylistic/keyword-spacing": ON,
    // "@stylistic/line-comment-position": OFF,
    // "@stylistic/lines-around-comment": OFF,
    "@stylistic/lines-between-class-members": [
      ON,
      {
        enforce: [
          {
            prev: "field",
            next: "field",
            blankLine: never,
          },
          {
            prev: "field",
            next: "method",
            blankLine: always,
          },
          {
            prev: "method",
            next: wildcard,
            blankLine: always,
          },
        ],
      },
    ],
    "@stylistic/max-len": [
      ON,
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
    "@stylistic/max-statements-per-line": ON,
    "@stylistic/member-delimiter-style": ON,
    // "@stylistic/multiline-comment-style": OFF,
    "@stylistic/multiline-ternary": [
      ON,
      always_multiline /* never | always-multiline | @default always */,
    ],
    // "@stylistic/new-parens": OFF,
    "@stylistic/newline-per-chained-call": ON,
    // "@stylistic/no-confusing-arrow": OFF,
    "@stylistic/no-extra-parens": ON,
    "@stylistic/no-extra-semi": ON,
    "@stylistic/no-floating-decimal": ON,
    // "@stylistic/no-mixed-operators": OFF,
    "@stylistic/no-mixed-spaces-and-tabs": ON,
    "@stylistic/no-multi-spaces": [
      ON,
      {
        exceptions: {
          Property: false,
          ImportAttributes: false,
        },
      },
    ],
    "@stylistic/no-multiple-empty-lines": [
      ON,
      {
        max: 1 /* @default 2 */,
        maxBOF: 0,
        maxEOF: 0 /* combine with `eol-last` to ensure file still ends with a single line-break (eol character) */,
      },
    ],
    "@stylistic/no-tabs": ON,
    "@stylistic/no-trailing-spaces": ON,
    "@stylistic/no-whitespace-before-property": ON,
    "@stylistic/nonblock-statement-body-position": [
      ON,
      below /* any | below | @default beside */,
    ],
    "@stylistic/object-curly-newline": [
      ON,
      {
        consistent: true,
        multiline: true,
        minProperties: 3,
      },
    ],
    "@stylistic/object-curly-spacing": [
      ON,
      always /* always | @default never */,
    ],
    "@stylistic/object-property-newline": ON,
    "@stylistic/one-var-declaration-per-line": [
      ON,
      always /* always | @default initializations */,
    ],
    "@stylistic/operator-linebreak": [
      ON,
      before /* ignore | none | before | @default after */,
    ],
    "@stylistic/padded-blocks": [
      ON,
      never /* never | start | end | @default always */,
      {
        allowSingleLineBlocks: true,
      },
    ],
    "@stylistic/padding-line-between-statements": [
      WARN,
      // #region *<
      {
        blankLine: never,
        prev: [
          "block-like",
          "block",
          "break",
          "case",
          "cjs-export",
          "cjs-import",
          "class",
          "const",
          "continue",
          "debugger",
          "default",
          "directive",
          "do",
          "empty",
          "enum",
          "export",
          // "expression" /* aren't most of these expressions? */,
          "for",
          "function-overload",
          "function",
          "if",
          "iife",
          "import",
          "interface",
          "let",
          "return",
          "switch",
          "throw",
          "try",
          "type",
          "using",
          "var",
          "while",
          "with",
        ],
        next: wildcard,
      },
      // #endregion
      // #region <Block>
      {
        blankLine: always,
        prev: [
          "block-like",
          "block",
          "class",
          "debugger",
          "directive",
          "do",
          "empty",
          "for",
          "function-overload",
          "function",
          "if",
          "interface",
          "switch",
          "try",
          "using",
          "while",
          "with",
        ],
        next: wildcard,
      },
      {
        blankLine: always,
        prev: wildcard,
        next: [
          "block-like",
          "block",
          "class",
          "debugger",
          "directive",
          "do",
          "empty",
          "for",
          "function-overload",
          "function",
          "if",
          "interface",
          "switch",
          "try",
          "using",
          "while",
          "with",
        ],
      },
      // #endregion
      // #region Declaration>
      {
        blankLine: never,
        prev: "interface",
        next: [
          "class",
          "function-overload",
          "function",
        ],
      },
      {
        blankLine: never,
        prev: "function-overload",
        next: [
          "function-overload",
          "function",
        ],
      },
      // #endregion
      // #region <=[]
      {
        blankLine: always,
        prev: [
          "const",
          "enum",
          "let",
          "type",
          "var",
        ],
        next: [
          "expression",
          "iife",
        ],
      },
      // #endregion
      // #region Import[]>
      {
        blankLine: always,
        prev: [
          "cjs-import",
          "import",
        ],
        next: wildcard,
      },
      {
        blankLine: never,
        prev: [
          "cjs-import",
          "import",
        ],
        next: [
          "cjs-import",
          "import",
        ],
      },
      // #endregion
      // #region <Export[]>
      {
        blankLine: always,
        prev: [
          "cjs-export",
          "export",
        ],
        next: wildcard,
      },
      {
        blankLine: always,
        prev: wildcard,
        next: [
          "cjs-export",
          "export",
        ],
      },
      {
        blankLine: never,
        prev: [
          "cjs-export",
          "export",
        ],
        next: [
          "cjs-export",
          "export",
        ],
      },
      // #endregion
      // #region <Return>
      {
        blankLine: always,
        prev: [
          "break",
          "continue",
          "return",
          "throw",
        ],
        next: wildcard,
      },
      {
        blankLine: always,
        prev: wildcard,
        next: [
          "break",
          "continue",
          "return",
          "throw",
        ],
      },
      // #endregion
    ],
    "@stylistic/quote-props": [
      ON,
      as_needed,
      {
        keywords: true,
      },
    ],
    "@stylistic/quotes": [
      ON,
      double /* @default double */,
      {
        avoidEscape: true,
        allowTemplateLiterals: always /* always | avoidEscape | @default never */,
      },
    ],
    "@stylistic/rest-spread-spacing": ON,
    "@stylistic/semi": ON,
    "@stylistic/semi-spacing": ON,
    "@stylistic/semi-style": ON,
    "@stylistic/space-before-blocks": ON,
    "@stylistic/space-before-function-paren": [
      ON,
      {
        named: never,
      },
    ],
    "@stylistic/space-in-parens": ON,
    "@stylistic/space-infix-ops": ON,
    "@stylistic/space-unary-ops": ON,
    "@stylistic/spaced-comment": [
      ON,
      always,
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
    "@stylistic/switch-colon-spacing": ON,
    "@stylistic/template-curly-spacing": ON,
    "@stylistic/template-tag-spacing": ON,
    "@stylistic/type-annotation-spacing": [
      ON,
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
    "@stylistic/type-generic-spacing": ON,
    "@stylistic/type-named-tuple-spacing": ON,
    "@stylistic/wrap-iife": [
      ON,
      inside,
      {
        functionPrototypeMethods: true,
      },
    ],
    "@stylistic/wrap-regex": ON,
    "@stylistic/yield-star-spacing": ON,
  } as const,
};

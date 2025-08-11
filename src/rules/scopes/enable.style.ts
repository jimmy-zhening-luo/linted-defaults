import {
  ID,
  // OFF,
  WARN,
  ON,
  all,
  always_multiline,
  always,
  as_needed,
  before,
  below,
  consistent,
  double,
  inside,
  last,
  never,
  wildcard,
} from "../_strings";

export const EnableStyle = {
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
        // ignoredNodes: [],
        SwitchCase: 1,
        VariableDeclarator: {
          "var": 0,
          let: 0,
          "const": 0,
        },
        outerIIFEBody: 0,
        // MemberExpression: 1,
        // FunctionDeclaration: {
        //   parameters: 1,
        //   body: 1,
        //   returnType: 1,
        // },
        // FunctionExpression: {
        //   parameters: 1,
        //   body: 1,
        //   returnType: 1,
        // },
        // StaticBlock: {
        //   body: 1,
        // },
        // CallExpression: {
        //   arguments: 1,
        // },
        // ArrayExpression: 1,
        // ObjectExpression: 1,
        // ImportDeclaration: 1,
        // flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        // offsetTernaryExpressionsOffsetCallExpressions: true,
        // ignoreComments: false,
        tabLength: 2 /* @default 4 */,
      },
    ],
    "@stylistic/indent-binary-ops": [
      ON,
      2,
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
      {
        exceptAfterSingleLine: false,
        exceptAfterOverload: true /* TS-only */,
      },
    ],
    "@stylistic/max-len": [
      ON,
      {
        code: 300,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "@stylistic/max-statements-per-line": [
      ON,
      {
        max: 1,
      },
    ],
    "@stylistic/member-delimiter-style": [
      ON,
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    // "@stylistic/multiline-comment-style": OFF,
    "@stylistic/multiline-ternary": [
      ON,
      always_multiline,
    ],
    // "@stylistic/new-parens": OFF,
    "@stylistic/newline-per-chained-call": [
      ON,
      {
        ignoreChainWithDepth: 2,
      },
    ],
    // "@stylistic/no-confusing-arrow": OFF,
    "@stylistic/no-extra-parens": [
      ON,
      all,
      {
        conditionalAssign: true,
        returnAssign: true,
        nestedBinaryExpressions: true,
        ternaryOperandBinaryExpressions: true,
        // ignoreJSX: "none" /* all | multi-line | single-line | @default: none */,
        enforceForArrowConditionals: true,
        enforceForSequenceExpressions: true,
        enforceForNewInMemberExpressions: true,
        enforceForFunctionPrototypeMethods: true,
        // allowParensAfterCommentPattern: "" /* regex */,
        nestedConditionalExpressions: true,
        allowNodesInSpreadElement: {
          ConditionalExpression: false,
          LogicalExpression: false,
          AwaitExpression: false,
        } /* @default: all true */,
      },
    ],
    "@stylistic/no-extra-semi": ON,
    "@stylistic/no-floating-decimal": ON,
    // "@stylistic/no-mixed-operators": OFF,
    "@stylistic/no-mixed-spaces-and-tabs": ON,
    "@stylistic/no-multi-spaces": [
      ON,
      {
        ignoreEOLComments: false /* @OVERRIDE */,
        exceptions: {
          Property: false /* @OVERRIDE */,
          ImportAttributes: false /* @OVERRIDE */,
        },
        includeTabs: true /* @OVERRIDE */,
      },
    ],
    "@stylistic/no-multiple-empty-lines": [
      ON,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0 /* combine with `eol-last` to ensure file still ends with a single line-break (eol character) */,
      },
    ],
    "@stylistic/no-tabs": [
      ON,
      {
        allowIndentationTabs: false,
      },
    ],
    "@stylistic/no-trailing-spaces": [
      ON,
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    "@stylistic/no-whitespace-before-property": ON,
    "@stylistic/nonblock-statement-body-position": [
      ON,
      below,
      {
        overrides: {
        } /* if | else | while | do | for */,
      },
    ],
    "@stylistic/object-curly-newline": [
      ON,
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
          minProperties: 3,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
          minProperties: 3,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 3,
        },
        TSTypeLiteral: {
          consistent: true,
          multiline: true,
          minProperties: 3,
        },
        TSInterfaceBody: {
          consistent: true,
          multiline: true,
          minProperties: 3,
        },
        TSEnumBody: {
          consistent: true,
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    "@stylistic/object-curly-spacing": [
      ON,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "@stylistic/object-property-newline": ON,
    "@stylistic/one-var-declaration-per-line": [
      ON,
      always,
    ],
    "@stylistic/operator-linebreak": [
      ON,
      before,
      {
        overrides: {} /* e.g., = | ? | : |  @default: { "?": "before", ":": "before" } */,
      },
    ],
    "@stylistic/padded-blocks": [
      ON,
      never /* @OVERRIDE || { blocks, classes, switches } */,
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
          "multiline-block-like",
          "multiline-const",
          "multiline-export",
          // "multiline-expression" /* aren't most of these expressions? */,
          "multiline-let",
          "multiline-var",
          "return",
          "singleline-const",
          "singleline-export",
          "singleline-let",
          "singleline-var",
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
      // #region < Block >
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
          "multiline-block-like",
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
          "multiline-block-like",
          "switch",
          "try",
          "using",
          "while",
          "with",
        ],
      },
      // #endregion
      // #region Declaration >
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
      // #region < =[]
      {
        blankLine: always,
        prev: [
          "const",
          "enum",
          "let",
          "multiline-const",
          "multiline-let",
          "multiline-var",
          "singleline-const",
          "singleline-let",
          "singleline-var",
          "type",
          "var",
        ],
        next: [
          "expression",
          "multiline-expression",
          "iife",
        ],
      },
      // #endregion
      // #region Import[] >
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
      // #region < Export[] >
      {
        blankLine: always,
        prev: [
          "cjs-export",
          "export",
          "multiline-export",
          "singleline-export",
        ],
        next: wildcard,
      },
      {
        blankLine: always,
        prev: wildcard,
        next: [
          "cjs-export",
          "export",
          "multiline-export",
          "singleline-export",
        ],
      },
      {
        blankLine: never,
        prev: [
          "cjs-export",
          "export",
          "multiline-export",
          "singleline-export",
        ],
        next: [
          "cjs-export",
          "export",
          "multiline-export",
          "singleline-export",
        ],
      },
      // #endregion
      // #region < Return >
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
        unnecessary: true,
        numbers: false,
      },
    ],
    "@stylistic/quotes": [
      ON,
      double,
      {
        avoidEscape: true,
        allowTemplateLiterals: always /* always, avoidEscape, @default: never */,
        ignoreStringLiterals: false,
      },
    ],
    "@stylistic/rest-spread-spacing": [
      ON,
      never,
    ],
    "@stylistic/semi": [
      ON,
      always,
      {
        omitLastInOneLineBlock: false,
        omitLastInOneLineClassBody: false,
      },
    ],
    "@stylistic/semi-spacing": [
      ON,
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/semi-style": [
      ON,
      last,
    ],
    "@stylistic/space-before-blocks": [
      ON,
      {
        functions: always,
        keywords: always,
        classes: always,
      },
    ],
    "@stylistic/space-before-function-paren": [
      ON,
      {
        anonymous: always,
        named: never,
        asyncArrow: always,
        "catch": always,
      },
    ],
    "@stylistic/space-in-parens": [
      ON,
      never,
    ],
    "@stylistic/space-infix-ops": [
      ON,
      {
        int32Hint: true,
        ignoreTypes: false,
      },
    ],
    "@stylistic/space-unary-ops": [
      ON,
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
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
    "@stylistic/switch-colon-spacing": [
      ON,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/template-curly-spacing": [
      ON,
      never,
    ],
    "@stylistic/template-tag-spacing": [
      ON,
      never,
    ],
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
    "@stylistic/yield-star-spacing": [
      ON,
      {
        before: false,
        after: true,
      },
    ],
  } as const,
};

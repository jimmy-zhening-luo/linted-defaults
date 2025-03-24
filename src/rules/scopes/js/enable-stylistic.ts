import {
  ID,
  ERROR,
  OFF,
  all,
  always_multiline,
  always,
  as_needed,
  before,
  below,
  beside,
  consistent,
  double,
  inside,
  last,
  never,
  wildcard,
  strict,
} from "../../strings";

export const EnableStylistic = {
  id: ID.EnableStylistic,
  rules: {
  // DOC: https://eslint.style/rules
    "@stylistic/array-bracket-newline": [
      ERROR,
      {
        multiline: true,
        minItems: null,
      },
    ],
    "@stylistic/array-bracket-spacing": [
      ERROR,
      never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "@stylistic/array-element-newline": [
      ERROR,
      {
        ArrayExpression: {
          consistent: true,
          multiline: true,
          minItems: 3,
        },
        ArrayPattern: {
          consistent: true,
          multiline: true,
          minItems: 3,
        },
      },
    ],
    "@stylistic/arrow-parens": [
      ERROR,
      as_needed,
      {
        requireForBlockBody: false,
      },
    ],
    "@stylistic/arrow-spacing": [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    "@stylistic/block-spacing": [
      ERROR,
      always,
    ],
    "@stylistic/brace-style": [
      ERROR,
      "stroustrup",
      {
        allowSingleLine: true,
      },
    ],
    "@stylistic/comma-dangle": [
      ERROR,
      always_multiline,
    ],
    "@stylistic/comma-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/comma-style": [
      ERROR,
      last,
      {
        exceptions: {
          ArrayExpression: false /* ignores comma style in array literals */,
          ArrayPattern: false /* ignores comma style in array patterns of destructuring */,
          ArrowFunctionExpression: false /* ignores comma style in the parameters of arrow function expressions */,
          CallExpression: false /* ignores comma style in the arguments of function calls */,
          FunctionDeclaration: false /* ignores comma style in the parameters of function declarations */,
          FunctionExpression: false /* ignores comma style in the parameters of function expressions */,
          ImportDeclaration: false /* ignores comma style in the specifiers / import attributes of import declarations */,
          ObjectExpression: false /* ignores comma style in object literals */,
          ObjectPattern: false /* ignores comma style in object patterns of destructuring */,
          VariableDeclaration: false /* ignores comma style in variable declarations */,
          NewExpression: false /* ignores comma style in the parameters of constructor expressions */,
          ExportAllDeclaration: false /* ignores comma style in the import attributes of export all declarations */,
          ExportNamedDeclaration: false /* ignores comma style in the specifiers / import attributes of export named declarations */,
          ImportExpression: false /* ignores comma style in the arguments of import expressions */,
          SequenceExpression: false /* ignores comma style in sequence expressions */,
          ClassDeclaration: false /* ignores comma style in the TypeScript implements of class declarations */,
          ClassExpression: false /* ignores comma style in the TypeScript implements of class declarations */,
          TSDeclareFunction: false /* ignores comma style in the parameters of TypeScript declare functions */,
          TSFunctionType: false /* ignores comma style in the parameters of TypeScript function types */,
          TSConstructorType: false /* ignores comma style in the parameters of TypeScript constructor types */,
          TSEmptyBodyFunctionExpression: false /* ignores comma style in the parameters of TypeScript empty body function expressions */,
          TSMethodSignature: false /* ignores comma style in the parameters of TypeScript method signatures */,
          TSCallSignatureDeclaration: false /* ignores comma style in the parameters of TypeScript call signature declarations */,
          TSConstructSignatureDeclaration: false /* ignores comma style in the parameters of TypeScript construct signature declarations */,
          TSEnumBody: false /* ignores comma style in the members of TypeScript enums */,
          TSTypeLiteral: false /* ignores comma style in the members of TypeScript type literals */,
          TSInterfaceBody: false /* ignores comma style in the members of TypeScript interfaces */,
          TSIndexSignature: false /* ignores comma style in the key parameters of TypeScript index signatures */,
          TSInterfaceDeclaration: false /* ignores comma style in the extend classes of TypeScript interfaces */,
          TSTupleType: false /* ignores comma style in the elements of TypeScript tuple types */,
          TSTypeParameterDeclaration: false /* ignores comma style in the type parameters of TypeScript type parameter declarations */,
          TSTypeParameterInstantiation: false /* ignores comma style in the type arguments of TypeScript type parameter instantiations */,
        },
      },
    ],
    "@stylistic/computed-property-spacing": [
      ERROR,
      never,
      {
        enforceForClassMembers: true,
      },
    ],
    "@stylistic/dot-location": [
      ERROR,
      "property",
    ],
    "@stylistic/eol-last": [
      ERROR,
      always,
    ],
    "@stylistic/function-call-argument-newline": [
      ERROR,
      consistent,
    ],
    "@stylistic/function-call-spacing": [
      ERROR,
      never,
    ],

    "@stylistic/function-paren-newline": [
      ERROR,
      "multiline-arguments",
    ] /* BUG: https://github.com/eslint-stylistic/eslint-stylistic/issues/290 */,
    "@stylistic/generator-star-spacing": [
      ERROR,
      {
        before: true,
        after: false,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": [
      ERROR,
      beside,
    ],
    "@stylistic/indent": [
      ERROR,
      2,
      {
        ignoredNodes: [],
        SwitchCase: 1,
        VariableDeclarator: { "var": 0, let: 0, "const": 0 },
        outerIIFEBody: 0,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        StaticBlock: { body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        offsetTernaryExpressionsOffsetCallExpressions: true,
        ignoreComments: false,
      },
    ],
    "@stylistic/indent-binary-ops": [
      ERROR,
      2,
    ],
    "@stylistic/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: strict,
        ignoredNodes: [],
      },
    ],
    "@stylistic/keyword-spacing": [
      ERROR,
      {
        before: true,
        after: true,
        overrides: {},
      },
    ],
    "@stylistic/line-comment-position": OFF,
    "@stylistic/lines-around-comment": OFF,
    "@stylistic/lines-between-class-members": [
      ERROR,
      {
        enforce: [
          { prev: "field", next: "field", blankLine: never },
          { prev: "field", next: "method", blankLine: always },
          { prev: "method", next: wildcard, blankLine: always },
        ],
      },
      {
        exceptAfterSingleLine: false,
        exceptAfterOverload: true /* TS-only */,
      },
    ],
    "@stylistic/max-len": [
      ERROR,
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
      ERROR,
      {
        max: 1,
      },
    ],
    "@stylistic/member-delimiter-style": [
      ERROR,
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
    "@stylistic/multiline-comment-style": OFF,
    "@stylistic/multiline-ternary": [
      ERROR,
      always_multiline,
    ],
    "@stylistic/new-parens": [
      OFF,
      never,
    ],
    "@stylistic/newline-per-chained-call": [
      ERROR,
      {
        ignoreChainWithDepth: 2,
      },
    ],
    "@stylistic/no-confusing-arrow": OFF,
    "@stylistic/no-extra-parens": [
      ERROR,
      all,
      {
        conditionalAssign: true,
        returnAssign: true,
        nestedBinaryExpressions: true,
        nestedConditionalExpressions: true,
        ternaryOperandBinaryExpressions: true,
        enforceForArrowConditionals: true,
        enforceForSequenceExpressions: true,
        enforceForNewInMemberExpressions: true,
        enforceForFunctionPrototypeMethods: true,
      },
    ],
    "@stylistic/no-extra-semi": ERROR,
    "@stylistic/no-floating-decimal": ERROR,
    "@stylistic/no-mixed-operators": OFF,
    "@stylistic/no-mixed-spaces-and-tabs": ERROR,
    "@stylistic/no-multi-spaces": [
      ERROR,
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
      ERROR,
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "@stylistic/no-tabs": [
      ERROR,
      {
        allowIndentationTabs: false,
      },
    ],
    "@stylistic/no-trailing-spaces": [
      ERROR,
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    "@stylistic/no-whitespace-before-property": ERROR,
    "@stylistic/nonblock-statement-body-position": [
      ERROR,
      below,
      {
        overrides: {
        } /* if | else | while | do | for */,
      },
    ],
    "@stylistic/object-curly-newline": [
      ERROR,
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
      },
    ],
    "@stylistic/object-curly-spacing": [
      ERROR,
      always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "@stylistic/object-property-newline": [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "@stylistic/one-var-declaration-per-line": [
      ERROR,
      always,
    ],
    "@stylistic/operator-linebreak": [
      ERROR,
      before,
      {
        overrides: {
        } /* e.g., = | ? | : |  @default: { "?": "before", ":": "before" } */,
      },
    ],
    "@stylistic/padded-blocks": [
      ERROR,
      never /* @OVERRIDE || { blocks, classes, switches } */,
      {
        allowSingleLineBlocks: true,
      },
    ],
    "@stylistic/padding-line-between-statements": [
      ERROR,
      // #region * No Line
      {
        blankline: never,
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
          "var",
          "while",
          "with",
        ],
        next: wildcard,
      },
      // #endregion
      // #region Block >
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
          "while",
          "with",
        ],
        next: wildcard,
      },
      // #endregion
      // #region >Function >
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
      // #region >Module<
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
      // #region < Return
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
      ERROR,
      as_needed,
      {
        keywords: true,
        unnecessary: true,
        numbers: false,
      },
    ],
    "@stylistic/quotes": [
      ERROR,
      double,
      {
        avoidEscape: true,
        allowTemplateLiterals: always /* always, avoidEscape, @default: never */,
        ignoreStringLiterals: false,
      },
    ],
    "@stylistic/rest-spread-spacing": [
      ERROR,
      never,
    ],
    "@stylistic/semi": [
      ERROR,
      always,
      {
        omitLastInOneLineBlock: false,
        omitLastInOneLineClassBody: false,
      },
    ],
    "@stylistic/semi-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/semi-style": [
      ERROR,
      last,
    ],
    "@stylistic/space-before-blocks": [
      ERROR,
      {
        functions: always,
        keywords: always,
        classes: always,
      },
    ],
    "@stylistic/space-before-function-paren": [
      ERROR,
      {
        anonymous: always,
        named: never,
        asyncArrow: always,
      },
    ],
    "@stylistic/space-in-parens": [
      ERROR,
      never,
    ],
    "@stylistic/space-infix-ops": [
      ERROR,
      {
        int32Hint: true,
        ignoreTypes: false,
      },
    ],
    "@stylistic/space-unary-ops": [
      ERROR,
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    "@stylistic/spaced-comment": [
      ERROR,
      always,
    ],
    "@stylistic/switch-colon-spacing": [
      ERROR,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/template-curly-spacing": [
      ERROR,
      never,
    ],
    "@stylistic/template-tag-spacing": [
      ERROR,
      never,
    ],
    "@stylistic/type-annotation-spacing": [
      ERROR,
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
    "@stylistic/type-generic-spacing": ERROR,
    "@stylistic/type-named-tuple-spacing": ERROR,
    "@stylistic/wrap-iife": [
      ERROR,
      inside,
      {
        functionPrototypeMethods: true,
      },
    ],
    "@stylistic/wrap-regex": ERROR,
    "@stylistic/yield-star-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
  } as const,
} as const;

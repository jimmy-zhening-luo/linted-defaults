import {
  ID,
  ERROR,
  OFF,
  never,
  always,
  always_multiline,
  consistent,
  as_needed,
  strict,
  all,
  star,
  last,
  before,
  after,
  below,
  beside,
  inside,
  double,
} from "../../_strings";

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
          minItems: 4,
        },
        ArrayPattern: {
          consistent: true,
          multiline: true,
          minItems: 4,
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
          { prev: "method", next: star, blankLine: always },
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
        code: 150,
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
        ignoreEOLComments: false,
        exceptions: {
          Property: false,
          ImportAttributes: false,
        },
        includeTabs: true,
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
          "if": below,
          "else": below,
          "while": below,
          "do": below,
          "for": below,
        },
      },
    ],
    "@stylistic/object-curly-newline": [
      ERROR,
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
          minProperties: 4,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
          minProperties: 4,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 4,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 4,
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
          "=": after,
        },
      },
    ],
    "@stylistic/padded-blocks": [
      ERROR,
      {
        blocks: never,
        classes: never,
        switches: never,
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    "@stylistic/padding-line-between-statements": [
      ERROR,
      {
        prev: "directive",
        next: star,
        blankLine: always,
      },
      {
        prev: "directive",
        next: "directive",
        blankLine: never,
      },
      {
        prev: ["import", "cjs-import"],
        next: star,
        blankLine: always,
      },
      {
        prev: ["import", "cjs-import"],
        next: ["import", "cjs-import"],
        blankLine: never,
      },
      {
        prev: [
          "class",
          "interface",
          "try",
          "for",
          "if",
          "do",
          "while",
          "switch",
          "block",
          "block-like",
          "iife",
          "empty",
          "debugger",
          "with",
        ],
        next: star,
        blankLine: always,
      },
      {
        prev: "case",
        next: star,
        blankLine: always,
      },
      {
        prev: "case",
        next: ["case", "default"],
        blankLine: always,
      },
      {
        prev: "default",
        next: star,
        blankLine: always,
      },
      {
        prev: "type",
        next: star,
        blankLine: always,
      },
      {
        prev: "type",
        next: "type",
        blankLine: never,
      },
      {
        prev: "function",
        next: star,
        blankLine: always,
      },
      {
        prev: "function-overload",
        next: star,
        blankLine: always,
      },
      {
        prev: "function-overload",
        next: "function-overload",
        blankLine: never,
      },
      {
        prev: "function-overload",
        next: "function",
        blankLine: never,
      },
      {
        prev: ["const", "let", "var"],
        next: star,
        blankLine: always,
      },
      {
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
        blankLine: never,
      },
      {
        prev: "expression",
        next: star,
        blankLine: always,
      },
      {
        prev: "expression",
        next: "expression",
        blankLine: never,
      },
      {
        prev: star,
        next: [
          "throw",
          "return",
          "break",
          "continue",
        ],
        blankLine: always,
      },
      {
        prev: star,
        next: ["export", "cjs-export"],
        blankLine: always,
      },
      {
        prev: ["export", "cjs-export"],
        next: ["export", "cjs-export"],
        blankLine: never,
      },
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

import {
  ID,
  ON,
  OFF,
  never,
  always,
  as_needed,
  consecutive,
  allow,
  all,
  multi,
  both,
} from "../strings";

export const Enable = {
  id: ID.Enable.Enable,
  rules: {
    // #region PROBLEMS
    // DOC: https://eslint.org/docs/latest/rules/#possible-problems
    "array-callback-return": [
      ON,
      {
        allowImplicit: false,
        checkForEach: true,
        allowVoid: true,
      },
    ],
    "constructor-super": ON /* tsc */,
    "for-direction": ON,
    "getter-return": [
      ON,
      {
        allowImplicit: false,
      },
    ] /* tsc */,
    "no-async-promise-executor": ON,
    "no-await-in-loop": ON,
    "no-class-assign": ON,
    "no-compare-neg-zero": ON,
    "no-cond-assign": [
      ON,
      always,
    ],
    "no-const-assign": ON /* tsc */,
    "no-constant-binary-expression": ON,
    "no-constant-condition": [
      ON,
      {
        checkLoops: true,
      },
    ] /* BUG: incorrect option description (claims "all" is ok): https://eslint.org/docs/latest/rules/no-constant-condition */,
    "no-constructor-return": ON,
    "no-control-regex": ON,
    "no-debugger": ON,
    "no-dupe-args": ON /* tsc */,
    "no-dupe-class-members": ON /* TS-capable BUT tsc */,
    "no-dupe-else-if": ON,
    "no-dupe-keys": ON /* tsc */,
    "no-duplicate-case": ON,
    "no-duplicate-imports": OFF /* BUG: breaks separation of TS type-only imports from value imports */,
    "no-empty-character-class": ON,
    "no-empty-pattern": [
      ON,
      {
        allowObjectPatternsAsParameters: false,
      },
    ],
    "no-ex-assign": ON,
    "no-fallthrough": [
      ON,
      {
        allowEmptyCase: true,
        reportUnusedFallthroughComment: true,
      },
    ],
    "no-func-assign": ON /* tsc */,
    "no-import-assign": ON /* tsc (except Object.assign()) */,
    "no-inner-declarations": [
      ON,
      both,
      {
        blockScopedFunctions: allow,
      },
    ],
    "no-invalid-regexp": [
      ON,
      {
        allowConstructorFlags: [],
      },
    ],
    "no-irregular-whitespace": [
      ON,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "no-loss-of-precision": ON /* TS-capable, originally had TSLint rule but was deprecated */,
    "no-misleading-character-class": ON,
    "no-new-native-nonconstructor": ON,
    "no-obj-calls": ON /* tsc */,
    "no-promise-executor-return": [
      ON,
      {
        allowVoid: true,
      },
    ],
    "no-prototype-builtins": ON,
    "no-self-assign": [
      ON,
      {
        props: true,
      },
    ],
    "no-self-compare": ON,
    "no-setter-return": ON /* tsc */,
    "no-sparse-arrays": ON,
    "no-template-curly-in-string": ON,
    "no-this-before-super": ON /* tsc */,
    "no-unassigned-vars": ON,
    "no-undef": ON /* tsc */,
    "no-unexpected-multiline": ON,
    "no-unmodified-loop-condition": ON,
    "no-unreachable": ON /* tsc */,
    "no-unreachable-loop": [
      ON,
      {
        ignore: [] /* WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement */,
      },
    ],
    "no-unsafe-finally": ON,
    "no-unsafe-negation": [
      ON,
      {
        enforceForOrderingRelations: true,
      },
    ] /* tsc */,
    "no-unsafe-optional-chaining": [
      ON,
      {
        disallowArithmeticOperators: true,
      },
    ],
    "no-unused-private-class-members": ON,
    "no-unused-vars": [
      ON,
      {
        vars: all,
        args: all,
        caughtErrors: all,
        ignoreRestSiblings: false,
        ignoreClassWithStaticInitBlock: false,
        reportUsedIgnorePattern: true,
      },
    ] /* TSLint */,
    "no-use-before-define": [
      ON,
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
        enums: true,
        typedefs: false /* changed 14.2.2 (still questionable) */,
        ignoreTypeReferences: true,
      },
    ] /* TS-capable */,
    "no-useless-assignment": ON,
    "no-useless-backreference": ON,
    "require-atomic-updates": [
      ON,
      {
        allowProperties: false,
      },
    ],
    "use-isnan": [
      ON,
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": [
      ON,
      {
        requireStringLiterals: true,
      },
    ],
    // #endregion

    // #region SUGGESTIONS
    // [ https://eslint.org/docs/latest/rules/#suggestions ]
    "accessor-pairs": [
      ON,
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    "arrow-body-style": [
      ON,
      as_needed,
      {
        requireReturnForObjectLiteral: true,
      },
    ],
    "block-scoped-var": ON,
    camelcase: OFF /* preference */,
    "capitalized-comments": OFF /* preference */,
    "class-methods-use-this": OFF /* TS-capable; (preference) */,
    complexity: OFF /* preference */,
    "consistent-return": [
      ON,
      {
        treatUndefinedAsUnspecified: false,
      },
    ] /* tsc -- TSLint:OFF: tsconfig: noImplicitReturns */,
    "consistent-this": ON,
    curly: [
      ON,
      multi,
    ],
    "default-case": OFF /* preference: don't care */,
    "default-case-last": ON,
    "default-param-last": ON /* TS-capable */,
    "dot-notation": [
      ON,
      {
        allowKeywords: true,
      },
    ] /* TSLint */,
    eqeqeq: [
      ON,
      always,
    ],
    "func-name-matching": OFF /* preference */,
    "func-names": OFF /* preference */,
    "func-style": OFF /* TS-capable BUT preference */,
    "grouped-accessor-pairs": OFF /* preference -- BUG: requires adjacency, not as described in documentation */,
    "guard-for-in": OFF /* preference - not helpful because using for-in on non-literal objects is bad practice and this rule doesn't guard against that anyway, while adding a pointless check to known object literals */,
    "id-denylist": OFF /* preference */,
    "id-length": OFF /* preference */,
    "id-match": OFF /* preference */,
    "init-declarations": [
      ON,
      always,
    ] /* TS-capable */,
    "logical-assignment-operators": [
      ON,
      always,
      {
        enforceForIfStatements: true,
      },
    ],
    "max-classes-per-file": OFF /* preference */,
    "max-depth": OFF /* preference */,
    "max-lines": OFF /* preference */,
    "max-lines-per-function": OFF /* preference */,
    "max-nested-callbacks": OFF /* preference */,
    "max-params": OFF /* TS-capable BUT preference -- TSLint:OFF: preference */,
    "max-statements": OFF /* preference */,
    "multiline-comment-style": OFF /* preference */,
    "new-cap": OFF /* preference -- breaks Scriptable */,
    "no-alert": ON,
    "no-array-constructor": ON /* TS-capable */,
    "no-bitwise": [
      ON,
      {
        allow: [],
        int32Hint: true,
      },
    ],
    "no-caller": ON,
    "no-case-declarations": ON,
    "no-console": OFF /* preference -- breaks Node.js console applications and Scriptable, and otherwise unnecessarily hampers browser test code */,
    "no-continue": ON,
    "no-delete-var": ON,
    "no-div-regex": ON,
    "no-else-return": OFF /* preference */,
    "no-empty": [
      ON,
      {
        allowEmptyCatch: false,
      },
    ],
    "no-empty-function": [
      ON,
      {
        allow: [
          "constructors",
          "privateConstructors",
          "protectedConstructors",
          "decoratedFunctions",
          "overrideMethods",
        ],
      }, /* functions, arrowFunctions, generatorFunctions, methods, generatorMethods, getters, setters, constructors, asyncFunctions, asyncMethods; TS-ONLY: privateConstructors, protectedConstructors, decoratedFunctions, overrideMethods */
    ] /* TS-capable */,
    "no-empty-static-block": ON,
    "no-eq-null": ON,
    "no-eval": [
      ON,
      {
        allowIndirect: false,
      },
    ],
    "no-extend-native": [
      ON,
      {
        exceptions: [],
      },
    ],
    "no-extra-bind": ON,
    "no-extra-boolean-cast": [
      ON,
      {
        enforceForLogicalOperands: true,
      },
    ],
    "no-extra-label": ON,
    "no-global-assign": [
      ON,
      {
        exceptions: [],
      },
    ],
    "no-implicit-coercion": [
      ON,
      {
        "boolean": true,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
        allow: [] /**  "~" | "!!" | "+" | "- -" | "-" | "*"  */,
      },
    ],
    "no-implicit-globals": OFF /* investigate (breaks Scriptable? breaks Sveltekit?) */,
    "no-implied-eval": ON /* TSLint */,
    "no-inline-comments": OFF /* preference */,
    "no-invalid-this": [
      ON,
      { capIsConstructor: false },
    ] /* TS-capable BUT tsc: TSLint:OFF: tsconfig: { strict, noImplicitThis } */,
    "no-iterator": ON,
    "no-label-var": ON,
    "no-lone-blocks": ON,
    "no-lonely-if": OFF /* preference */,
    "no-loop-func": ON /* TS-capable */,
    "no-magic-numbers": OFF /* TS-capable BUT preference - breaks TypeScript number literals, even with most liberal exceptions */,
    "no-multi-assign": [
      ON,
      {
        ignoreNonDeclaration: false,
      },
    ],
    "no-multi-str": ON,
    "no-negated-condition": OFF /* preference */,
    "no-nested-ternary": OFF /* preference */,
    "no-new": ON,
    "no-new-func": ON,
    "no-new-wrappers": ON,
    "no-nonoctal-decimal-escape": ON,
    "no-object-constructor": ON,
    "no-octal": ON,
    "no-octal-escape": ON,
    "no-param-reassign": [
      ON,
      {
        props: true,
        ignorePropertyModificationsFor: [],
        ignorePropertyModificationsForRegex: [],
      },
    ],
    "no-plusplus": [
      ON,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-proto": ON,
    "no-redeclare": [
      ON,
      { builtinGlobals: true },
    ] /* tsc -- TSLint:OFF: tsc (let, const, -var) */,
    "no-regex-spaces": OFF /* preference */,
    "no-restricted-exports": OFF /* preference */,
    "no-restricted-globals": OFF /* preference */,
    "no-restricted-imports": OFF /* preference -- TSLint:OFF */,
    "no-restricted-properties": OFF /* preference */,
    "no-restricted-syntax": OFF /* preference */,
    "no-return-assign": OFF /* "always" | "except-parens" (disallow assignments unless enclosed in parens) */,
    "no-script-url": ON,
    "no-sequences": [
      ON,
      {
        allowInParentheses: true,
      },
    ],
    "no-shadow": OFF /* TS-capable BUT investigate */,
    "no-shadow-restricted-names": [
      ON,
      {
        reportGlobalThis: false,
      },
    ],
    "no-ternary": OFF /* preference */,
    "no-throw-literal": ON /* TSLint */,
    "no-undef-init": ON,
    "no-undefined": OFF /* investigate (breaks Scriptable? breaks Sveltekit?) */,
    "no-underscore-dangle": OFF /* preference */,
    "no-unneeded-ternary": [
      ON,
      {
        defaultAssignment: false,
      },
    ],
    "no-unused-expressions": [
      ON,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
        ignoreDirectives: false,
      },
    ] /* TS-capable */,
    "no-unused-labels": ON,
    "no-useless-call": ON,
    "no-useless-catch": ON,
    "no-useless-computed-key": [
      ON,
      {
        enforceForClassMembers: true,
      },
    ],
    "no-useless-concat": ON,
    "no-useless-constructor": ON /* TS-capable */,
    "no-useless-escape": [
      ON,
      {
        allowRegexCharacters: ["-"],
      },
    ],
    "no-useless-rename": [
      ON,
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
    "no-useless-return": ON,
    "no-var": ON,
    "no-void": [
      ON,
      {
        allowAsStatement: true,
      },
    ],
    "no-warning-comments": OFF /* preference */,
    "no-with": ON,
    "object-shorthand": [
      ON,
      always,
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false,
      },
    ],
    "one-var": [
      ON,
      {
        "var": consecutive,
        let: consecutive,
        "const": consecutive,
        separateRequires: true,
      },
    ],
    "operator-assignment": [
      ON,
      always,
    ],
    "prefer-arrow-callback": [
      ON,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ] /* TS-capable */,
    "prefer-const": [
      ON,
      {
        destructuring: all,
        ignoreReadBeforeAssign: false,
      },
    ],
    "prefer-destructuring": [
      ON,
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      { enforceForRenamedProperties: true },
    ] /* TSLint */,
    "prefer-exponentiation-operator": ON,
    "prefer-named-capture-group": OFF,
    "prefer-numeric-literals": ON,
    "prefer-object-has-own": ON,
    "prefer-object-spread": ON,
    "prefer-promise-reject-errors": [
      ON,
      {
        allowEmptyReject: false,
      },
    ],
    "prefer-regex-literals": [
      ON,
      {
        disallowRedundantWrapping: true,
      },
    ] /* TSLint */,
    "prefer-rest-params": ON,
    "prefer-spread": ON,
    "prefer-template": OFF /* preference: performance */,
    radix: [
      ON,
      as_needed,
    ],
    "require-await": ON /* TSLint */,
    "require-unicode-regexp": ON,
    "require-yield": ON,
    "sort-imports": OFF /* preference */,
    "sort-keys": OFF /* preference */,
    "sort-vars": OFF /* preference */,
    strict: OFF /* preference */,
    "symbol-description": OFF /* preference */,
    "vars-on-top": ON,
    yoda: [
      ON,
      never,
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],
    // #endregion

    // #region FORMATTING
    // [ https://eslint.org/docs/latest/rules/#layout--formatting ]
    "unicode-bom": OFF /* preference: don't care */,
    // #endregion
  } as const,
};

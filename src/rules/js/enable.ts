import {
  ID,
  ERROR,
  OFF,
  never,
  always,
  as_needed,
  consecutive,
  allow,
  all,
  multi,
  both,
} from "../_strings";

export const Enable = {
  id: ID.Enable,
  rules: {
  // #region PROBLEMS
  // DOC: https://eslint.org/docs/latest/rules/#possible-problems
    "array-callback-return": [
      ERROR,
      {
        allowImplicit: false,
        checkForEach: true,
        allowVoid: true,
      },
    ],
    "constructor-super": ERROR /* tsc */,
    "for-direction": ERROR,
    "getter-return": [
      ERROR,
      {
        allowImplicit: false,
      },
    ] /* tsc */,
    "no-async-promise-executor": ERROR,
    "no-await-in-loop": ERROR,
    "no-class-assign": ERROR,
    "no-compare-neg-zero": ERROR,
    "no-cond-assign": [
      ERROR,
      always,
    ],
    "no-const-assign": ERROR /* tsc */,
    "no-constant-binary-expression": ERROR,
    "no-constant-condition": [
      ERROR,
      {
        checkLoops: true,
      },
    ] /* BUG: incorrect option description (claims "all" is ok): https://eslint.org/docs/latest/rules/no-constant-condition */,
    "no-constructor-return": ERROR,
    "no-control-regex": ERROR,
    "no-debugger": ERROR,
    "no-dupe-args": ERROR /* tsc */,
    "no-dupe-class-members": ERROR /* tsc -- TSLint:off: tsc */,
    "no-dupe-else-if": ERROR,
    "no-dupe-keys": ERROR /* tsc */,
    "no-duplicate-case": ERROR,
    "no-duplicate-imports": OFF /* BUG: breaks separation of TS type-only imports from value imports */,
    "no-empty-character-class": ERROR,
    "no-empty-pattern": [
      ERROR,
      {
        allowObjectPatternsAsParameters: false,
      },
    ],
    "no-ex-assign": ERROR,
    "no-fallthrough": [
      ERROR,
      {
        allowEmptyCase: true,
        reportUnusedFallthroughComment: true,
      },
    ],
    "no-func-assign": ERROR /* tsc */,
    "no-import-assign": ERROR /* tsc (except Object.assign()) */,
    "no-inner-declarations": [
      ERROR,
      both,
      {
        blockScopedFunctions: allow,
      },
    ],
    "no-invalid-regexp": [
      ERROR,
      {
        allowConstructorFlags: [],
      },
    ],
    "no-irregular-whitespace": [
      ERROR,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "no-loss-of-precision": ERROR /* TSLint */,
    "no-misleading-character-class": ERROR,
    "no-new-native-nonconstructor": ERROR,
    "no-obj-calls": ERROR /* tsc */,
    "no-promise-executor-return": [
      ERROR,
      {
        allowVoid: true,
      },
    ],
    "no-prototype-builtins": ERROR,
    "no-self-assign": [
      ERROR,
      {
        props: true,
      },
    ],
    "no-self-compare": ERROR,
    "no-setter-return": ERROR /* tsc */,
    "no-sparse-arrays": ERROR,
    "no-template-curly-in-string": ERROR,
    "no-this-before-super": ERROR /* tsc */,
    "no-undef": ERROR /* tsc */,
    "no-unexpected-multiline": ERROR,
    "no-unmodified-loop-condition": ERROR,
    "no-unreachable": ERROR /* tsc */,
    "no-unreachable-loop": [
      ERROR,
      {
        ignore: [] /* WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement */,
      },
    ],
    "no-unsafe-finally": ERROR,
    "no-unsafe-negation": [
      ERROR,
      {
        enforceForOrderingRelations: true,
      },
    ] /* tsc */,
    "no-unsafe-optional-chaining": [
      ERROR,
      {
        disallowArithmeticOperators: true,
      },
    ],
    "no-unused-private-class-members": ERROR,
    "no-unused-vars": [
      ERROR,
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
      ERROR,
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ] /* TSLint */,
    "no-useless-assignment": ERROR,
    "no-useless-backreference": ERROR,
    "require-atomic-updates": [
      ERROR,
      {
        allowProperties: false,
      },
    ],
    "use-isnan": [
      ERROR,
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": [
      ERROR,
      {
        requireStringLiterals: true,
      },
    ],

    // #endregion PROBLEMS

    // #region SUGGESTIONS
    // [ https://eslint.org/docs/latest/rules/#suggestions ]
    "accessor-pairs": [
      ERROR,
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    "arrow-body-style": [
      ERROR,
      as_needed,
      {
        requireReturnForObjectLiteral: true,
      },
    ],
    "block-scoped-var": ERROR,
    camelcase: OFF /* preference */,
    "capitalized-comments": OFF /* preference */,
    "class-methods-use-this": OFF /* preference -- TSLint */,
    complexity: OFF /* preference */,
    "consistent-return": [
      ERROR,
      {
        treatUndefinedAsUnspecified: false,
      },
    ] /* tsc -- TSLint:off: tsconfig: noImplicitReturns */,
    "consistent-this": ERROR,
    curly: [
      ERROR,
      multi,
    ],
    "default-case": OFF /* preference: don't care */,
    "default-case-last": ERROR,
    "default-param-last": ERROR /* TSLint */,
    "dot-notation": [
      ERROR,
      {
        allowKeywords: true,
      },
    ] /* TSLint */,
    eqeqeq: [
      ERROR,
      always,
    ],
    "func-name-matching": OFF /* preference */,
    "func-names": OFF /* preference */,
    "func-style": OFF /* preference */,
    "grouped-accessor-pairs": OFF /* preference -- BUG: requires adjacency, not as described in documentation */,
    "guard-for-in": OFF /* preference - not helpful because using for-in on non-literal objects is bad practice and this rule doesn't guard against that anyway, while adding a pointless check to known object literals */,
    "id-denylist": OFF /* preference */,
    "id-length": OFF /* preference */,
    "id-match": OFF /* preference */,
    "init-declarations": [
      ERROR,
      always,
    ] /* TSLint */,
    "logical-assignment-operators": [
      ERROR,
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
    "max-params": OFF /* preference -- TSLint:off: preference */,
    "max-statements": OFF /* preference */,
    "multiline-comment-style": OFF /* preference */,
    "new-cap": OFF /* preference -- breaks Scriptable */,
    "no-alert": ERROR,
    "no-array-constructor": ERROR /* TSLint */,
    "no-bitwise": [
      ERROR,
      {
        allow: [],
        int32Hint: true,
      },
    ],
    "no-caller": ERROR,
    "no-case-declarations": ERROR,
    "no-console": OFF /* preference -- breaks Node.js console applications and Scriptable, and otherwise unnecessarily hampers browser test code */,
    "no-continue": ERROR,
    "no-delete-var": ERROR,
    "no-div-regex": ERROR,
    "no-else-return": OFF /* preference */,
    "no-empty": [
      ERROR,
      {
        allowEmptyCatch: false,
      },
    ],
    "no-empty-function": [
      ERROR,
      {
        allow:
         ["constructors"] /**  functions, arrowFunctions, generatorFunctions, methods, generatorMethods, getters, setters, constructors, asyncFunctions, asyncMethods; TS-ONLY: private-constructors, protected-constructors, decoratedFunctions, overrideMethods  */,
      },
    ] /* TSLint */,
    "no-empty-static-block": ERROR,
    "no-eq-null": ERROR,
    "no-eval": [
      ERROR,
      {
        allowIndirect: false,
      },
    ],
    "no-extend-native": [
      ERROR,
      {
        exceptions: [],
      },
    ],
    "no-extra-bind": ERROR,
    "no-extra-boolean-cast": [
      ERROR,
      {
        enforceForLogicalOperands: true,
      },
    ],
    "no-extra-label": ERROR,
    "no-global-assign": [
      ERROR,
      {
        exceptions: [],
      },
    ],
    "no-implicit-coercion": [
      ERROR,
      {
        "boolean": true,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
        allow: [] /**  "~" | "!!" | "+" | "- -" | "-" | "*"  */,
      },
    ],
    "no-implicit-globals": OFF /* investigate (breaks Scriptable? breaks Sveltekit?) */,
    "no-implied-eval": ERROR /* TSLint */,
    "no-inline-comments": OFF /* preference */,
    "no-invalid-this": [
      ERROR,
      { capIsConstructor: false },
    ] /* TSLint:off: tsconfig: { strict, noImplicitThis } */,
    "no-iterator": ERROR,
    "no-label-var": ERROR,
    "no-lone-blocks": ERROR,
    "no-lonely-if": OFF /* preference */,
    "no-loop-func": ERROR /* TSLint */,
    "no-magic-numbers": OFF /* preference - breaks TypeScript number literals, even with most liberal exceptions */,
    "no-multi-assign": [
      ERROR,
      {
        ignoreNonDeclaration: false,
      },
    ],
    "no-multi-str": ERROR,
    "no-negated-condition": OFF /* preference */,
    "no-nested-ternary": OFF /* preference */,
    "no-new": ERROR,
    "no-new-func": ERROR,
    "no-new-wrappers": ERROR,
    "no-nonoctal-decimal-escape": ERROR,
    "no-object-constructor": ERROR,
    "no-octal": ERROR,
    "no-octal-escape": ERROR,
    "no-param-reassign": [
      ERROR,
      {
        props: true,
        ignorePropertyModificationsFor: [],
        ignorePropertyModificationsForRegex: [],
      },
    ],
    "no-plusplus": [
      ERROR,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-proto": ERROR,
    "no-redeclare": [
      ERROR,
      { builtinGlobals: true },
    ] /* tsc -- TSLint:off: tsc (let, const, -var) */,
    "no-regex-spaces": OFF /* preference */,
    "no-restricted-exports": OFF /* preference */,
    "no-restricted-globals": OFF /* preference */,
    "no-restricted-imports": OFF /* preference -- TSLint:off */,
    "no-restricted-properties": OFF /* preference */,
    "no-restricted-syntax": OFF /* preference */,
    "no-return-assign": OFF /* "always" | "except-parens" (disallow assignments unless enclosed in parens) */,
    "no-script-url": ERROR,
    "no-sequences": [
      ERROR,
      {
        allowInParentheses: true,
      },
    ],
    "no-shadow": OFF /* investigate -- TSLint:off: investigate */,
    "no-shadow-restricted-names": ERROR,
    "no-ternary": OFF /* preference */,
    "no-throw-literal": ERROR /* TSLint */,
    "no-undef-init": ERROR,
    "no-undefined": OFF /* investigate (breaks Scriptable? breaks Sveltekit?) */,
    "no-underscore-dangle": OFF /* preference */,
    "no-unneeded-ternary": [
      ERROR,
      {
        defaultAssignment: false,
      },
    ],
    "no-unused-expressions": [
      ERROR,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ] /* TSLint */,
    "no-unused-labels": ERROR,
    "no-useless-call": ERROR,
    "no-useless-catch": ERROR,
    "no-useless-computed-key": [
      ERROR,
      {
        enforceForClassMembers: true,
      },
    ],
    "no-useless-concat": ERROR,
    "no-useless-constructor": ERROR /* TSLint */,
    "no-useless-escape": ERROR,
    "no-useless-rename": [
      ERROR,
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
    "no-useless-return": ERROR,
    "no-var": ERROR,
    "no-void": [
      ERROR,
      {
        allowAsStatement: true,

      },
    ],
    "no-warning-comments": OFF /* preference */,
    "no-with": ERROR,
    "object-shorthand": [
      ERROR,
      always,
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false,
      },
    ],
    "one-var": [
      ERROR,
      {
        "var": consecutive,
        let: consecutive,
        "const": consecutive,
        separateRequires: true,
      },
    ],
    "operator-assignment": [
      ERROR,
      always,
    ],
    "prefer-arrow-callback": [
      ERROR,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "prefer-const": [
      ERROR,
      {
        destructuring: all,
        ignoreReadBeforeAssign: false,
      },
    ],
    "prefer-destructuring": [
      ERROR,
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
    "prefer-exponentiation-operator": ERROR,
    "prefer-named-capture-group": OFF,
    "prefer-numeric-literals": ERROR,
    "prefer-object-has-own": ERROR,
    "prefer-object-spread": ERROR,
    "prefer-promise-reject-errors": [
      ERROR,
      {
        allowEmptyReject: false,
      },
    ],
    "prefer-regex-literals": [
      ERROR,
      {
        disallowRedundantWrapping: true,
      },
    ] /* TSLint */,
    "prefer-rest-params": ERROR,
    "prefer-spread": ERROR,
    "prefer-template": ERROR,
    radix: [
      ERROR,
      as_needed,
    ],
    "require-await": ERROR /* TSLint */,
    "require-unicode-regexp": ERROR,
    "require-yield": ERROR,
    "sort-imports": OFF /* preference */,
    "sort-keys": OFF /* preference */,
    "sort-vars": OFF /* preference */,
    strict: OFF /* preference */,
    "symbol-description": OFF /* preference */,
    "vars-on-top": ERROR,
    yoda: [
      ERROR,
      never,
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],

    // #endregion SUGGESTIONS

    // #region LAYOUT & FORMATTING
    // [ https://eslint.org/docs/latest/rules/#layout--formatting ]
    "unicode-bom": OFF /* preference: don't care */,

  // #endregion LAYOUT & FORMATTING
  } as const,
} as const;

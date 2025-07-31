import {
  ID,
  OFF,
  ON,
  never,
  explicit,
} from "../../strings";

export const TsEnable = {
  id: ID.Enable.Enable,
  rules: {
    // DOC: https://typescript-eslint.io/rules/?=xextension-xdeprecated#rules
    "@typescript-eslint/adjacent-overload-signatures": OFF,
    "@typescript-eslint/array-type": OFF /* preference: ideally, I'd like to don't-care mutable arrays while requiring readonly [] syntax for immutable arrays, but there is no way to do that with the current rule options */,
    "@typescript-eslint/await-thenable": ON,
    "@typescript-eslint/ban-ts-comment": [
      ON,
      {
        "ts-check": false,
        "ts-expect-error": {
          descriptionFormat: "^:? (?:TEST|BUG): .+$",
        },
        "ts-ignore": true,
        "ts-nocheck": true,
        minimumDescriptionLength: 10,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": ON,
    "@typescript-eslint/class-literal-property-style": [
      ON,
      "fields",
    ],
    "@typescript-eslint/consistent-generic-constructors": [
      ON,
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      ON,
      "record",
    ],
    "@typescript-eslint/consistent-type-assertions": [
      ON,
      {
        assertionStyle: "as",
        arrayLiteralTypeAssertions: never,
        objectLiteralTypeAssertions: never,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": OFF,
    "@typescript-eslint/consistent-type-exports": [
      ON,
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      ON,
      {
        disallowTypeAnnotations: true,
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/explicit-member-accessibility": [
      ON,
      {
        accessibility: explicit,
        ignoredMethodNames: [],
        overrides: {
          properties: explicit,
          constructors: "no-public",
          accessors: explicit,
          methods: explicit,
          parameterProperties: explicit,
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/member-ordering": [
      ON,
      {
        "default": {
          memberTypes: [
          // Index signature
            "signature",
            "call-signature",

            // Fields
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "#private-static-field",

            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",

            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "#private-instance-field",

            "public-abstract-field",
            "protected-abstract-field",

            "public-field",
            "protected-field",
            "private-field",
            "#private-field",

            "static-field",
            "instance-field",
            "abstract-field",
            "decorated-field",
            "field",

            // Static initialization
            "static-initialization",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",
            "constructor",

            // Accessors
            "public-static-accessor",
            "protected-static-accessor",
            "private-static-accessor",
            "#private-static-accessor",

            "public-decorated-accessor",
            "protected-decorated-accessor",
            "private-decorated-accessor",

            "public-instance-accessor",
            "protected-instance-accessor",
            "private-instance-accessor",
            "#private-instance-accessor",

            "public-abstract-accessor",
            "protected-abstract-accessor",

            "public-accessor",
            "protected-accessor",
            "private-accessor",
            "#private-accessor",

            "static-accessor",
            "instance-accessor",
            "abstract-accessor",
            "decorated-accessor",
            "accessor",

            // Getters
            "public-static-get",
            "protected-static-get",
            "private-static-get",
            "#private-static-get",

            "public-decorated-get",
            "protected-decorated-get",
            "private-decorated-get",

            "public-instance-get",
            "protected-instance-get",
            "private-instance-get",
            "#private-instance-get",

            "public-abstract-get",
            "protected-abstract-get",

            "public-get",
            "protected-get",
            "private-get",
            "#private-get",

            "static-get",
            "instance-get",
            "abstract-get",
            "decorated-get",
            "get",

            // Setters
            "public-static-set",
            "protected-static-set",
            "private-static-set",
            "#private-static-set",

            "public-decorated-set",
            "protected-decorated-set",
            "private-decorated-set",

            "public-instance-set",
            "protected-instance-set",
            "private-instance-set",
            "#private-instance-set",

            "public-abstract-set",
            "protected-abstract-set",

            "public-set",
            "protected-set",
            "private-set",
            "#private-set",

            "static-set",
            "instance-set",
            "abstract-set",
            "decorated-set",
            "set",

            // Methods
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "#private-static-method",

            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",

            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "#private-instance-method",

            "public-abstract-method",
            "protected-abstract-method",

            "public-method",
            "protected-method",
            "private-method",
            "#private-method",

            "static-method",
            "instance-method",
            "abstract-method",
            "decorated-method",
            "method",
          ],
          optionalityOrder: "required-first",
          order: "as-written",
        },

      },
    ],
    "@typescript-eslint/method-signature-style": [
      ON,
      "property",
    ],
    "@typescript-eslint/naming-convention": OFF,
    "@typescript-eslint/no-array-delete": ON,
    "@typescript-eslint/no-base-to-string": [
      ON,
      {
        checkUnknown: false /* PREFERENCE & @default */,
        ignoredTypeNames: [
          "Error",
          "RegExp",
          "URL",
          "URLSearchParams",
        ] /* @default */,
      },
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": ON,
    "@typescript-eslint/no-confusing-void-expression": [
      ON,
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
        ignoreVoidReturningFunctions: true,
      },
    ],
    "@typescript-eslint/no-deprecated": OFF /* incompatible: Cannot be used with jsDocParsingMode: "none" */,
    "@typescript-eslint/no-duplicate-enum-values": ON,
    "@typescript-eslint/no-duplicate-type-constituents": [
      ON,
      {
        ignoreIntersections: false,
        ignoreUnions: false,
      },
    ],
    "@typescript-eslint/no-dynamic-delete": ON,
    "@typescript-eslint/no-empty-object-type": [
      ON,
      {
      // allowWithName: /regex/,
        allowInterfaces: never,
        allowObjectTypes: never,
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      ON,
      {
        fixToUnknown: true,
        ignoreRestArgs: false,
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": ON,
    "@typescript-eslint/no-extraneous-class": [
      ON,
      {
        allowConstructorOnly: false,
        allowEmpty: true,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      ON,
      {
        checkThenables: true,
        ignoreVoid: true,
        ignoreIIFE: false,
      },
    ],
    "@typescript-eslint/no-for-in-array": ON,
    "@typescript-eslint/no-import-type-side-effects": ON,
    "@typescript-eslint/no-inferrable-types": [
      ON,
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    "@typescript-eslint/no-invalid-void-type": [
      ON,
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
      },
    ],
    "@typescript-eslint/no-meaningless-void-operator": [
      ON,
      {
        checkNever: true,
      },
    ],
    "@typescript-eslint/no-misused-new": ON,
    "@typescript-eslint/no-misused-promises": [
      ON,
      {
        checksConditionals: true,
        checksSpreads: true,
        checksVoidReturn: {
          arguments: true,
          attributes: true,
          properties: true,
          returns: true,
          variables: true,
        },
      },
    ],
    "@typescript-eslint/no-misused-spread": [
      ON,
      {
        allow: [],
      },
    ],
    "@typescript-eslint/no-mixed-enums": ON,
    "@typescript-eslint/no-namespace": OFF,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ON,
    "@typescript-eslint/no-non-null-asserted-optional-chain": ON,
    "@typescript-eslint/no-non-null-assertion": OFF /* preference */,
    "@typescript-eslint/no-redundant-type-constituents": ON,
    "@typescript-eslint/no-restricted-types": OFF /* preference - no shared custom types across all projects that I wish to ban */,
    "@typescript-eslint/no-require-imports": [
      ON,
      {
        allow: [],
      },
    ],
    "@typescript-eslint/no-this-alias": [
      ON,
      {
        allowDestructuring: true,
        allowedNames: [],
      },
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      ON,
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],
    "@typescript-eslint/no-unnecessary-condition": [
      ON,
      {
        allowConstantLoopConditions: never,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": ON,
    "@typescript-eslint/no-unnecessary-qualifier": ON,
    "@typescript-eslint/no-unnecessary-template-expression": ON,
    "@typescript-eslint/no-unnecessary-type-arguments": ON,
    "@typescript-eslint/no-unnecessary-type-assertion": [
      ON,
      {
        checkLiteralConstAssertions: false,
        typesToIgnore: [],
      },
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": ON,
    "@typescript-eslint/no-unnecessary-type-conversion": ON,
    "@typescript-eslint/no-unnecessary-type-parameters": ON,
    "@typescript-eslint/no-unsafe-argument": ON,
    "@typescript-eslint/no-unsafe-assignment": ON,
    "@typescript-eslint/no-unsafe-call": ON,
    "@typescript-eslint/no-unsafe-declaration-merging": ON,
    "@typescript-eslint/no-unsafe-enum-comparison": ON,
    "@typescript-eslint/no-unsafe-function-type": ON,
    "@typescript-eslint/no-unsafe-member-access": ON,
    "@typescript-eslint/no-unsafe-return": ON,
    "@typescript-eslint/no-unsafe-type-assertion": OFF,
    "@typescript-eslint/no-unsafe-unary-minus": ON,
    "@typescript-eslint/no-useless-empty-export": ON,
    "@typescript-eslint/no-wrapper-object-types": ON,
    "@typescript-eslint/non-nullable-type-assertion-style": OFF /* preference */,
    "@typescript-eslint/parameter-properties": [
      ON,
      {
        prefer: "parameter-property" /*  "parameter-property" | "class-property"  */,
      },
    ],
    "@typescript-eslint/prefer-as-const": ON,
    "@typescript-eslint/prefer-enum-initializers": ON,
    "@typescript-eslint/prefer-find": ON,
    "@typescript-eslint/prefer-for-of": ON,
    "@typescript-eslint/prefer-function-type": ON,
    "@typescript-eslint/prefer-includes": ON,
    "@typescript-eslint/prefer-literal-enum-member": [
      ON,
      {
        allowBitwiseExpressions: false,
      },
    ],
    "@typescript-eslint/prefer-namespace-keyword": ON,
    "@typescript-eslint/prefer-nullish-coalescing": [
      ON,
      {
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        ignoreBooleanCoercion: false,
        ignoreConditionalTests: false,
        ignoreIfStatements: false,
        ignoreMixedLogicalExpressions: false,
        ignorePrimitives: {
          bigint: false,
          "boolean": false,
          number: false,
          string: false,
        },
        ignoreTernaryTests: false,
      },
    ], /* requires tsconfig: strictNullChecks */
    "@typescript-eslint/prefer-optional-chain": [
      ON,
      {
        allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
        checkAny: true,
        checkBigInt: true,
        checkBoolean: true,
        checkNumber: true,
        checkString: true,
        checkUnknown: true,
        requireNullish: false,
      },
    ],
    "@typescript-eslint/prefer-readonly": [
      ON,
      {
        onlyInlineLambdas: false,
      },
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": OFF /* preference - WAY too restrictive */,
    "@typescript-eslint/prefer-reduce-type-parameter": ON,
    "@typescript-eslint/prefer-regexp-exec": ON,
    "@typescript-eslint/prefer-return-this-type": ON,
    "@typescript-eslint/prefer-string-starts-ends-with": [
      ON,
      {
        allowSingleElementEquality: never,
      },
    ],
    "@typescript-eslint/promise-function-async": [
      ON,
      {
        allowAny: false,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    "@typescript-eslint/related-getter-setter-pairs": ON,
    "@typescript-eslint/require-array-sort-compare": [
      ON,
      {
        ignoreStringArrays: true,
      },
    ],
    "@typescript-eslint/restrict-plus-operands": [
      ON,
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        skipCompoundAssignments: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      ON,
      {
        allowAny: true,
        allowArray: true,
        allowBoolean: true,
        allowNullish: false,
        allowNumber: true,
        allowNever: false,
        allowRegExp: false,
      }, /* investigate: make stricter */
    ],
    "@typescript-eslint/return-await": [
      ON,
      "in-try-catch",
    ] /* BUG: doc incorrectly states that this extends the DEPRECATED (since 8.46) no-return-await: https://typescript-eslint.io/rules/return-await */,
    "@typescript-eslint/strict-boolean-expressions": [
      ON,
      {
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        allowAny: false,
        allowNumber: true,
        allowString: false,
        allowNullableBoolean: false,
        allowNullableEnum: false,
        allowNullableNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
      },
    ], /* requires tsconfig: strictNullChecks */
    "@typescript-eslint/switch-exhaustiveness-check": [
      ON,
      {
        allowDefaultCaseForExhaustiveSwitch: false,
        considerDefaultExhaustiveForUnions: true,
        requireDefaultForNonUnion: true,
      },
    ],
    "@typescript-eslint/triple-slash-reference": [
      ON,
      {
        lib: never /** always | never */,
        path: never /** always | never */,
        types: never /** always | never | prefer-import */,
      },
    ],
    "@typescript-eslint/typedef": OFF /* tsconfig: { noImplicitAny, strictPropertyInitialization } */,
    "@typescript-eslint/unbound-method": [
      ON,
      {
        ignoreStatic: false,
      },
    ],
    "@typescript-eslint/unified-signatures": [
      ON,
      {
        ignoreDifferentlyNamedParameters: false,
      },
    ],
    "@typescript-eslint/use-unknown-in-catch-callback-variable": ON,
  } as const,
};

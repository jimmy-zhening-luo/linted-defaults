import { State } from "../state";

// DOC: https://typescript-eslint.io/rules/?=xextension-xdeprecated#rules
export default {
  rules: {
    // "ts/adjacent-overload-signatures": State.OFF,
    // "ts/array-type": State.OFF /* @preference: ideally, I'd like to don't-care mutable arrays while requiring readonly [] syntax for immutable arrays, but there is no way to do that with the current rule options */,
    "ts/await-thenable": State.ON,
    "ts/ban-ts-comment": State.WARN,
    "ts/ban-tslint-comment": State.WARN,
    "ts/class-literal-property-style": State.WARN,
    "ts/consistent-generic-constructors": State.WARN,
    // "ts/consistent-indexed-object-style": State.OFF,
    "ts/consistent-type-assertions": [
      State.WARN,
      {
        arrayLiteralTypeAssertions: "never",
        objectLiteralTypeAssertions: "never",
      },
    ],
    // "ts/consistent-type-definitions": State.OFF,
    "ts/consistent-type-exports": State.WARN,
    "ts/consistent-type-imports": State.WARN,
    // "ts/explicit-function-return-type": State.OFF,
    "ts/explicit-member-accessibility": [
      State.WARN,
      {
        overrides: {
          constructors: "no-public",
        },
      },
    ],
    // "ts/explicit-module-boundary-types": State.OFF,
    "ts/member-ordering": [
      State.WARN,
      {
        "default": {
          optionalityOrder: "required-first",
        },
      },
    ],
    "ts/method-signature-style": State.WARN,
    // "ts/naming-convention": State.OFF,
    "ts/no-array-delete": State.ON,
    "ts/no-base-to-string": State.ON,
    "ts/no-confusing-non-null-assertion": State.ON,
    "ts/no-confusing-void-expression": State.ON,
    // "ts/no-deprecated": State.OFF /* incompatible: Cannot be used with jsDocParsingMode: "none" */,
    "ts/no-duplicate-enum-values": State.ON,
    "ts/no-duplicate-type-constituents": State.ON,
    "ts/no-dynamic-delete": State.ON,
    "ts/no-empty-object-type": State.ON,
    "ts/no-explicit-any": [
      State.ON,
      {
        fixToUnknown: true,
      },
    ],
    "ts/no-extra-non-null-assertion": State.ON,
    "ts/no-extraneous-class": [
      State.ON,
      {
        allowEmpty: true,
      },
    ],
    "ts/no-floating-promises": [
      State.ON,
      {
        checkThenables: true,
      },
    ],
    "ts/no-for-in-array": State.ON,
    "ts/no-import-type-side-effects": State.ON,
    "ts/no-inferrable-types": State.ON,
    // "ts/no-invalid-void-type": State.OFF /* @preference: I powerfully ideologically disagree with disallowing void, a valid type */,
    "ts/no-meaningless-void-operator": [
      State.ON,
      {
        checkNever: true,
      },
    ],
    "ts/no-misused-new": State.ON,
    "ts/no-misused-promises": State.ON,
    "ts/no-misused-spread": State.ON,
    "ts/no-mixed-enums": State.ON,
    "ts/no-namespace": State.ON,
    "ts/no-non-null-asserted-nullish-coalescing": State.ON,
    "ts/no-non-null-asserted-optional-chain": State.ON,
    // "ts/no-non-null-assertion": State.OFF,
    "ts/no-redundant-type-constituents": State.ON,
    // "ts/no-restricted-types": State.OFF /* @preference: no shared custom types across all projects that I wish to ban */,
    "ts/no-require-imports": State.ON,
    "ts/no-this-alias": State.ON,
    "ts/no-unnecessary-boolean-literal-compare": State.ON,
    "ts/no-unnecessary-condition": State.ON,
    "ts/no-unnecessary-parameter-property-assignment": State.ON,
    "ts/no-unnecessary-qualifier": State.ON,
    "ts/no-unnecessary-template-expression": State.ON,
    "ts/no-unnecessary-type-arguments": State.ON,
    "ts/no-unnecessary-type-assertion": State.ON,
    "ts/no-unnecessary-type-constraint": State.ON,
    "ts/no-unnecessary-type-conversion": State.ON,
    "ts/no-unnecessary-type-parameters": State.ON,
    "ts/no-unsafe-argument": State.ON,
    "ts/no-unsafe-assignment": State.ON,
    "ts/no-unsafe-call": State.ON,
    "ts/no-unsafe-declaration-merging": State.ON,
    // "ts/no-unsafe-enum-comparison": State.OFF,
    "ts/no-unsafe-function-type": State.ON,
    "ts/no-unsafe-member-access": [
      State.ON,
      {
        allowOptionalChaining: true,
      },
    ],
    "ts/no-unsafe-return": State.ON,
    // "ts/no-unsafe-type-assertion": State.OFF,
    "ts/no-unsafe-unary-minus": State.ON,
    "ts/no-unused-private-class-members": State.WARN,
    "ts/no-useless-default-assignment": State.WARN,
    "ts/no-useless-empty-export": State.WARN,
    "ts/no-wrapper-object-types": State.ON,
    // "ts/non-nullable-type-assertion-style": State.OFF,
    "ts/parameter-properties": [
      State.WARN,
      {
        prefer: "parameter-property",
      },
    ],
    "ts/prefer-as-const": State.WARN,
    // "ts/prefer-enum-initializers": State.OFF,
    "ts/prefer-find": State.WARN,
    "ts/prefer-for-of": State.WARN,
    "ts/prefer-function-type": State.WARN,
    "ts/prefer-includes": State.WARN,
    // "ts/prefer-literal-enum-member": State.OFF /* @preference: idk why this would be considering, maybe we should ban all variable scopes */,
    "ts/prefer-namespace-keyword": State.WARN,
    "ts/prefer-nullish-coalescing": [
      State.WARN,
      {
        ignoreMixedLogicalExpressions: true,
        ignorePrimitives: true,

      },
    ] /* @requires @tsc: strictNullChecks */,
    "ts/prefer-optional-chain": [
      State.WARN,
      {
        checkBigInt: false,
        checkBoolean: false,
        checkNumber: false,
        checkString: false,
      },
    ],
    "ts/prefer-readonly": State.WARN,
    // "ts/prefer-readonly-parameter-types": State.OFF /* @preference: WAY too restrictive */,
    "ts/prefer-reduce-type-parameter": State.WARN,
    "ts/prefer-regexp-exec": State.WARN,
    "ts/prefer-return-this-type": State.WARN,
    "ts/prefer-string-starts-ends-with": State.WARN,
    "ts/promise-function-async": State.ON,
    // "ts/related-getter-setter-pairs": State.OFF,
    "ts/require-array-sort-compare": State.WARN,
    "ts/restrict-plus-operands": [
      State.ON,
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],
    "ts/restrict-template-expressions": [
      State.ON,
      {
        allowAny: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],
    "ts/return-await": State.ON /* BUG: doc incorrectly states that this extends the DEPRECATED (since 8.46) no-return-await: https://typescript-eslint.io/rules/return-await */,
    "ts/strict-boolean-expressions": [
      State.ON,
      {
        allowNullableBoolean: true,
        allowNullableEnum: true,
        allowNullableNumber: true,
        allowNullableString: true,
      },
    ], /* @requires @tsc: strictNullChecks */
    "ts/switch-exhaustiveness-check": [
      State.ON,
      {
        requireDefaultForNonUnion: true,
        considerDefaultExhaustiveForUnions: true,
      },
    ],
    // "ts/triple-slash-reference": State.OFF,
    // "ts/typedef": State.OFF /* @tsc: noImplicitAny, strictPropertyInitialization */,
    "ts/unbound-method": [
      State.ON,
      {
        ignoreStatic: true,
      },
    ],
    // "ts/unified-signatures": State.OFF /* BUG: https://github.com/typescript-eslint/typescript-eslint/issues/11732 */,
    "ts/use-unknown-in-catch-callback-variable": State.ON,
  } as const,
};

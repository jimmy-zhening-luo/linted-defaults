import {
  OFF,
} from "../_strings";

export default {
  id: "disable",
  rules: {
    // Handled by TypeScript compiler
    "consistent-return": OFF /* TSLint BUT tsc */,
    "constructor-super": OFF,
    "getter-return": OFF,
    "no-class-assign": OFF,
    "no-const-assign": OFF,
    "no-dupe-args": OFF,
    "no-dupe-class-members": OFF /* TS-capable BUT tsc */,
    "no-dupe-keys": OFF,
    "no-func-assign": OFF,
    "no-import-assign": OFF,
    "no-invalid-this": OFF /* TS-capable BUT tsc */,
    "no-new-native-nonconstructor": OFF,
    "no-obj-calls": OFF,
    "no-redeclare": OFF /* TSLint BUT tsc */,
    "no-setter-return": OFF,
    "no-this-before-super": OFF,
    "no-undef": OFF,
    "no-unreachable": OFF,
    "no-unsafe-negation": OFF,
  } as const,
};

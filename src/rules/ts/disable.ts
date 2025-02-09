import {
  ID,
  OFF,
} from "../../_strings";

export const TsDisable = [
  ID.Disable,
  {
    // Handled by TypeScript compiler
    "constructor-super": OFF,
    "getter-return": OFF,
    "no-class-assign": OFF,
    "no-const-assign": OFF,
    "no-dupe-args": OFF,
    "no-dupe-class-members": OFF,
    "no-dupe-keys": OFF,
    "no-func-assign": OFF,
    "no-import-assign": OFF,
    "no-invalid-this": OFF,
    "no-new-native-nonconstructor": OFF,
    "no-obj-calls": OFF,
    "no-setter-return": OFF,
    "no-this-before-super": OFF,
    "no-undef": OFF,
    "no-unreachable": OFF,
    "no-unsafe-negation": OFF,
    "consistent-return": OFF,
    "no-redeclare": OFF,
  } as const,
] as const;

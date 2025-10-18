import { State } from "../state";

export default {
  name: "disable",
  rules: {
    // Handled by TypeScript compiler
    "consistent-return": State.OFF /* TSLint BUT tsc */,
    "constructor-super": State.OFF,
    "getter-return": State.OFF,
    "no-class-assign": State.OFF,
    "no-const-assign": State.OFF,
    "no-dupe-args": State.OFF,
    "no-dupe-class-members": State.OFF /* TS-capable BUT tsc */,
    "no-dupe-keys": State.OFF,
    "no-func-assign": State.OFF,
    "no-import-assign": State.OFF,
    "no-invalid-this": State.OFF /* TS-capable BUT tsc */,
    "no-new-native-nonconstructor": State.OFF,
    "no-obj-calls": State.OFF,
    "no-redeclare": State.OFF /* TSLint BUT tsc */,
    "no-setter-return": State.OFF,
    "no-this-before-super": State.OFF,
    "no-undef": State.OFF,
    "no-unreachable": State.OFF,
    "no-unsafe-negation": State.OFF,
  } as const,
};

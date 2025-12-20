import { State } from "../state";

// DOC: https://github.com/eslint/json?tab=readme-ov-file#rules
export default {
  rules: {
    "json/no-duplicate-keys": State.ON /* jsonc/no-dupe-keys */,
    // "json/no-empty-keys": State.OFF,
    "json/no-unsafe-values": State.ON,
    "json/no-unnormalized-keys": State.ON,
    // "json/sort-keys": State.OFF /* jsonc/sort-keys */,
    "json/top-level-interop": State.ON,
  } as const,
};

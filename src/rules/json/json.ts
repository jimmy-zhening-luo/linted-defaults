// DOC: https://github.com/eslint/json?tab=readme-ov-file#rules
export default {
  rules: {
    "json/no-duplicate-keys": State.ON /* replaces jsonc/no-dupe-keys */,
    // "json/no-empty-keys": State.OFF /* preference */,
    "json/no-unsafe-values": State.ON,
    "json/no-unnormalized-keys": State.ON,
    // "json/sort-keys": State.OFF /* replaces jsonc/sort-keys BUT preference */,
    "json/top-level-interop": State.ON,
  } as const,
};

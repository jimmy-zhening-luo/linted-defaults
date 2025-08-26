import {
  ID,
  // OFF,
  ON,
} from "../_strings";

export const JsonEnable = {
  id: ID.Enable.Enable,
  rules: {
    // DOC: https://github.com/eslint/json?tab=readme-ov-file#rules
    "json/no-duplicate-keys": ON /* replaces jsonc/no-dupe-keys */,
    // "json/no-empty-keys": OFF /* preference: I use empty keys or keys with only whitespace sometimes, as does `package-lock.json` per DOC: "jsonc/no-dupe-keys": ON /* ESLint: json/no-duplicate-keys */,
    "json/no-unsafe-values": ON,
    "json/no-unnormalized-keys": ON,
    // "json/sort-keys": OFF /* replaces jsonc/sort-keys BUT preference: I don't like sorting keys, it makes diffs harder to read, and I don't see the point of it in JSON */,
    "json/top-level-interop": ON,
  } as const,
};

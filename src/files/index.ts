import pattern from "../_pattern";

export default {
  js: pattern([
    "js",
    "cjs",
    "mjs",
  ]),
  ts: pattern([
    "ts",
    "cts",
    "mts",
  ]),
  mocha: pattern([
    "spec.ts",
    "spec.cts",
    "spec.mts",
  ]),
  svelte: pattern("svelte"),
  html: pattern("html"),
  css: pattern("css"),
  json: pattern("json"),
  jsoncc: pattern(
    ["jsonc", "code-snippets"],
    {
      files: ["tsconfig.json"],
      folders: [".vscode"],
      paths: [".vscode/**/*.json"],
    },
  ),
  yml: pattern(
    ["yml", "yaml"],
    {
      folders: [".github"],
    },
  ),
};

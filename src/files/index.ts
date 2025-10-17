import Scope from "../_scope";

export default {
  js: Scope([
    "js",
    "cjs",
    "mjs",
  ]),
  ts: Scope([
    "ts",
    "cts",
    "mts",
  ]),
  mocha: Scope([
    "spec.ts",
    "spec.cts",
    "spec.mts",
  ]),
  svelte: Scope("svelte"),
  html: Scope("html"),
  css: Scope("css"),
  json: Scope("json"),
  jsoncc: Scope(
    ["jsonc", "code-snippets"],
    {
      folders: [".vscode"],
      files: ["tsconfig.json"],
      paths: [
        ".vscode/**/*.json",
        "code/*/.vscode/**/*.json",
      ],
    },
  ),
  yml: Scope(
    ["yml", "yaml"],
    {
      folders: [".github"],
    },
  ),
};

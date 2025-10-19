import pattern from "../_pattern";
import js from "./base";

export default {
  js,
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
  jsonc: [],
  jsoncc: pattern(
    ["jsonc", "code-snippets"],
    {
      files: ["tsconfig.json", "tsconfig-*.json"],
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

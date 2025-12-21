import pattern from "../_pattern";
import js from "./base";

export default {
  js,
  ts: pattern("ts"),
  mocha: pattern("spec.ts"),
  svelte: pattern("svelte"),
  html: pattern("html"),
  css: pattern("css"),
  json: pattern("json"),
  jsonc: [],
  jsoncc: pattern(
    [
      "jsonc",
      "code-snippets",
      "code-workspace",
    ],
    {
      files: [
        "tsconfig.json",
        "tsconfig-*.json",
      ],
      folders: [".vscode"],
      paths: [".vscode/**/*.json"],
    },
  ),
  yml: pattern(
    [
      "yml",
      "yaml",
      "yml.example",
      "yaml.example",
      "yml-example",
      "yaml-example",
    ],
    {
      folders: [".github"],
    },
  ),
};

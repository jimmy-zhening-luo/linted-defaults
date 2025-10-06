import { Scope } from "../_unglob";

export default Scope(
  [
    "jsonc",
    "code-snippets",
  ],
  {
    files: [
      "tsconfig.json",
      ".vscode/**/*.json",
    ],
    folders: [".vscode"],
  },
);

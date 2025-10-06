import { Scope } from "../_unglob";

export default Scope(
  [
    "jsonc",
    "code-snippets",
  ],
  {
    folders: [".vscode"],
    files: ["tsconfig.json"],
  },
)
  .concat(
    ".vscode/**/*.json",
    "code/*/.vscode/**/*.json",
  );

import { Scope } from "_factory";

export default Scope(
  "{jsonc,code-snippets}",
  {
    files: ["{tsconfig,.vscode/**/*}.json"],
    folders: [".vscode"],
  },
);

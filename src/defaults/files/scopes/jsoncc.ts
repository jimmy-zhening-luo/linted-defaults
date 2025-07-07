import { Scope } from "../../_glob";

export default Scope(
  "{jsonc,code-snippets}",
  {
    files: ["{tsconfig,.vscode/**/*}.json"],
    folders: [".vscode"],
  },
);

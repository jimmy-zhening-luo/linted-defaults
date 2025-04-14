import { CreateScope } from "../utility";

export default CreateScope(
  "{jsonc,code-snippets}",
  {
    files: ["{tsconfig,.vscode/**/*}.json"],
    subdirectories: [".vscode"],
  },
);

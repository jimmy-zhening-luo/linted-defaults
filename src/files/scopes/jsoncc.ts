import { CreateScope } from "../utility";

export default CreateScope(
  "{jsonc,code-snippets}",
  {
    filenames: ["{tsconfig,.vscode/**/*}.json"],
    subdirectories: [".vscode"],
  },
);

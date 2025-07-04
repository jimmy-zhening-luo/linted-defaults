import { CreateScope } from "../project";

export default CreateScope(
  "{jsonc,code-snippets}",
  {
    filenames: ["{tsconfig,.vscode/**/*}.json"],
    subdirectories: [".vscode"],
  },
);

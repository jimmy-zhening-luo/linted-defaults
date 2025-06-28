import { CreateScope } from "../utility";

export default CreateScope(
  "code-snippets",
  {
    filenames: ["{tsconfig,.vscode/**/*}.json"],
    subdirectories: [".vscode"],
  },
);

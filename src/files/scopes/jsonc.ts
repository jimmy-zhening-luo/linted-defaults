import { CreateScope } from "../utility";

export default CreateScope(
  "{*.jsonc,tsconfig.json}",
  {
    custom: ["{.vscode,code/*/.vscode}/**/*.{json,jsonc,code-snippets}"],
  },
);

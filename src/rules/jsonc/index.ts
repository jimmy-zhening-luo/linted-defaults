import { State } from "../state";

export default [
  {
    name: "jsonc/jsonc",
    rules: {
      "jsonc/no-comments": State.OFF /* comments ARE allowed in JSONC */,
    } as const,
  },
];

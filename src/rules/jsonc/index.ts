import { State } from "../state";

export default [
  {
    rules: {
      "jsonc/no-comments": State.OFF /* comments ARE allowed in JSONC */,
    } as const,
  },
];

import { State } from "../state";

export default [
  {
    rules: {
      "stylistic/eol-last": State.WARN,
      "stylistic/linebreak-style": State.WARN,
    } as const,
  },
];

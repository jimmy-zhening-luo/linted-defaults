import { State } from "../state";

export default {
  id: "override",
  rules: {
    "jsonc/no-comments": State.OFF /* comments ARE allowed in JSONC */,
  } as const,
};

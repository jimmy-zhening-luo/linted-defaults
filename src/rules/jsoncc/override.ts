import { State } from "../state";

export default {
  id: "override",
  rules: {
    "jsonc/comma-dangle": [
      State.ON,
      "always-multiline",
    ] /* trailing commas ARE allowed in JSONC */,
  } as const,
};

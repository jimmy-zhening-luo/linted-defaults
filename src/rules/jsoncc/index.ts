import { State } from "../state";

export default [
  {
    rules: {
      "jsonc/comma-dangle": [
        State.WARN,
        "always-multiline",
      ],
    } as const,
  },
];

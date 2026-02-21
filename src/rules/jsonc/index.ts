import { State } from "../state";

export default [
  {
    rules: {
      "jsonc/comma-dangle": [
        State.WARN,
        "always-multiline",
      ],
      "jsonc/no-comments": State.OFF,
    } as const,
  },
];

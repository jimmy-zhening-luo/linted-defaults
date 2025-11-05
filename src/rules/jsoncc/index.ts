export default [
  {
    rules: {
      "jsonc/comma-dangle": [
        State.ON,
        "always-multiline",
      ] /* trailing commas ARE allowed in JSONC */,
    } as const,
  },
];

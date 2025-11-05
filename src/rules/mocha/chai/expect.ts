// DOC: https://github.com/turbo87/eslint-plugin-chai-expect?tab=readme-ov-file#rules
export default {
  rules: {
    "chai-expect/no-inner-compare": State.ON,
    "chai-expect/no-inner-literal": State.ON,
    "chai-expect/missing-assertion": State.ON,
    // "chai-expect/terminating-properties": State.OFF,
  } as const,
};

import {
  ID,
  ON,
  OFF,
} from "../../strings";

export const MochaEnableChaiExpect = {
  id: `${ID.Enable}/chai/expect`,
  rules: {
  // DOC: https://github.com/turbo87/eslint-plugin-chai-expect?tab=readme-ov-file#rules
    "chai-expect/no-inner-compare": ON,
    "chai-expect/no-inner-literal": ON,
    "chai-expect/missing-assertion": ON,
    "chai-expect/terminating-properties": OFF,
  } as const,
} as const;

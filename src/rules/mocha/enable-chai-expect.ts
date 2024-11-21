import {
  ID,
  ERROR,
  OFF,
} from "../../_strings";

export const MochaEnableChaiExpect = [
  `${ID.Enable}/chai/expect`,
  {
    // DOC: https://github.com/turbo87/eslint-plugin-chai-expect?tab=readme-ov-file#rules
    "chai-expect/no-inner-compare": ERROR,
    "chai-expect/no-inner-literal": ERROR,
    "chai-expect/missing-assertion": ERROR,
    "chai-expect/terminating-properties": OFF,
  } as const,
] as const;

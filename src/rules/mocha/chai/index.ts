import { State } from "../../state";

// DOC: https://github.com/ihordiachenko/eslint-plugin-chai-friendly?tab=readme-ov-file#usage
export default {
  id: "enable/chai",
  rules: {
    "chai-friendly/no-unused-expressions": [
      State.ON,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ] /* TSLint */,
  } as const,
};

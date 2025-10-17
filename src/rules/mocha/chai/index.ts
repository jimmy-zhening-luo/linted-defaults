import {
  ON,
} from "../../state";

export default {
  id: "enable/plugin/chai",
  rules: {
    // DOC: https://github.com/ihordiachenko/eslint-plugin-chai-friendly?tab=readme-ov-file#usage
    "chai-friendly/no-unused-expressions": [
      ON,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ] /* TSLint */,
  } as const,
};

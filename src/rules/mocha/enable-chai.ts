import {
  ID,
  ERROR,
} from "../../_strings";

export const MochaEnableChai = [
  `${ID.Enable}/chai`,
  {

    // DOC: https://github.com/ihordiachenko/eslint-plugin-chai-friendly?tab=readme-ov-file#usage
    "chai-friendly/no-unused-expressions": [
      ERROR,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ] /* TSLint */,
  } as const,
] as const;

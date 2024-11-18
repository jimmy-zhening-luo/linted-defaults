import {
  ID,
  ERROR,
} from "../../_strings";

export const MochaEnableChai = [
  `${ID.Enable}/chai`,
  {
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

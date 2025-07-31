import {
  ID,
  ON,
} from "../../../_strings";

export const MochaEnablePluginChai = {
  id: `${ID.Enable.Plugin.Plugin}/chai`,
  rules: {
    // DOC: https://github.com/ihordiachenko/eslint-plugin-chai-friendly?tab=readme-ov-file#usage
    "chai-friendly/no-unused-expressions": [
      ON,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ] /* TSLint */,
  } as const,
};

// DOC: https://github.com/ihordiachenko/eslint-plugin-chai-friendly?tab=readme-ov-file#usage
export default {
  rules: {
    /* @OVERRIDE */ "no-unused-expressions": State.OFF /* INFO: looks like these guys got the hint too ;) https://github.com/ihordiachenko/eslint-plugin-chai-friendly/releases/tag/v1.1.0 */,
    "chai/no-unused-expressions": [
      State.ON,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
  } as const,
};

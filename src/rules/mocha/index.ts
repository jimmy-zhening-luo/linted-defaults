import { State } from "../state";

export default [
  {
    rules: {
      "no-unused-expressions": State.OFF /* fails to detect valueful assertions in mocha */,
      "ts/no-unsafe-call": State.OFF /* fails to detect valueful assertions in mocha */,
      "ts/strict-void-return": State.OFF /* false positive in mocha test-case async function context */,
    } as const,
  },
];

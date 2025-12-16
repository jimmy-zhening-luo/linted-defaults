import { State } from "../state";

export default [
  {
    rules: {
      "no-unsafe-call": State.OFF /* fails to detect valueful assertions in mocha */,
      "no-unused-expressions": State.OFF /* fails to detect valueful assertions in mocha */,
    } as const,
  },
];

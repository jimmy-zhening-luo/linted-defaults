import { State } from "../state";

export default [
  {
    rules: {
      "ts/no-unused-expressions": State.OFF /* fails to detect valueful assertions in mocha */,
    } as const,
  },
];

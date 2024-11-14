export * from "./id";
export * from "./state";
export * from "./option";
import type { ERROR, WARN, OFF } from "./state";

export type RuleState = (
  | typeof ERROR
  | typeof WARN
  | typeof OFF
);

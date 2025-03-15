import {
  ID,
  OFF,
} from "../../strings";

export const MochaDisable = {
  id: ID.Disable,
  rules: {
    "prefer-arrow-callback": OFF,
  } as const,
} as const;

import { State } from "../../state";

export default {
  id: "disable/extension",
  rules: {
    "no-inner-declarations": State.OFF /* also disabled in svelte/disable per Svelte base config */,
    "no-self-assign": State.OFF,
    "@stylistic/no-trailing-spaces": State.OFF /* replaces `no-trailing-spaces` */,
  } as const,
};

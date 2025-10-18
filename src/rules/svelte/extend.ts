import { State } from "../state";

// DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
export default {
  name: "svelte/extend",
  rules: {
    "no-inner-declarations": State.OFF /* INFO: also disabled by svelte  */,
    "svelte/no-inner-declarations": [
      State.ON,
      "both",
    ] /* same options: no-inner-declarations */,
    "@stylistic/no-trailing-spaces": State.OFF /* replaces `no-trailing-spaces` */,
    "svelte/no-trailing-spaces": State.ON /* same options: @stylistic/no-trailing-spaces */,
  } as const,
};

import { State } from "../state";

// DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
export default {
  rules: {
    /* @OVERRIDE */ "no-inner-declarations": State.OFF, /* INFO: also disabled by svelte  */
    "svelte/no-inner-declarations": [
      State.ON,
      "both",
    ], /* same options: no-inner-declarations */
    /* @OVERRIDE */ "stylistic/no-trailing-spaces": State.OFF, /* replaces `no-trailing-spaces` */
    // "svelte/no-trailing-spaces": State.OFF,
  } as const,
};

import { State } from "../../state";

// DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
export default {
  id: "enable/extension",
  rules: {
    "svelte/no-inner-declarations": [
      State.ON,
      "both",
    ] /* same options: no-inner-declarations */,
    "svelte/no-trailing-spaces": State.ON /* same options: @stylistic/no-trailing-spaces */,
  } as const,
};

import {
  ON,
} from "../../state";

export default {
  id: "enable/extension",
  rules: {
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ON,
      "both",
    ] /* same options: no-inner-declarations */,
    "svelte/no-trailing-spaces": ON /* same options: @stylistic/no-trailing-spaces */,
  } as const,
};

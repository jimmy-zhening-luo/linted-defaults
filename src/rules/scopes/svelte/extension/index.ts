import {
  ID,
  ON,
  both,
} from "../../../_strings";

export const SvelteEnableExtension = {
  id: ID.Enable.Extension,
  rules: {
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ON,
      both,
    ] /* same options: no-inner-declarations */,
    "svelte/no-trailing-spaces": ON /* same options: @stylistic/no-trailing-spaces */,
  } as const,
};

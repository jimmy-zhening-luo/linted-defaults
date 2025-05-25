import {
  ID,
  ON,
  allow,
  both,
} from "../../strings";

export const SvelteEnableExtension = {
  id: ID.EnableExtension,
  rules: {
  // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ON,
      both,
      {
        blockScopedFunctions: allow,
      },
    ] /* same options: no-inner-declarations */,
    "svelte/no-trailing-spaces": [
      ON,
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ] /* same options: @stylistic/no-trailing-spaces */,
  } as const,
};

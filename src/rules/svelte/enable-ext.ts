import {
  ID,
  ERROR,
  allow,
  both,
} from "../../_strings";

export const SvelteEnableExtension = {
  id: ID.EnableExtension,
  rules: {
  // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ERROR,
      both,
      {
        blockScopedFunctions: allow,
      },
    ] /* same options: no-inner-declarations */,
    "svelte/no-trailing-spaces": [
      ERROR,
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ] /* same options: @stylistic/no-trailing-spaces */,
  } as const,
} as const;

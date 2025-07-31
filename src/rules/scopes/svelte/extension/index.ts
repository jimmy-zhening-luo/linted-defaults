import {
  ID,
  ON,
  allow,
  both,
} from "../../../_strings";

export const SvelteEnableExtension = {
  id: ID.Enable.Extension,
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

import {
  ID,
  ERROR,
  OFF,
  allow,
  both,
} from "../../_strings";

export const SvelteEnableExtension = [
  ID.EnableExtension,
  {
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ERROR,
      both,
      {
        blockScopedFunctions: allow,
      },
    ] /* Same options as in JsEnable */,
    "svelte/no-trailing-spaces": OFF /* Only applies to HTML comments, which I don't intend to use: http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/ */,
  } as const,
] as const;

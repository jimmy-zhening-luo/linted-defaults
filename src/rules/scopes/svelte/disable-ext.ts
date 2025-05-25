import {
  ID,
  OFF,
} from "../../strings";

export const SvelteDisableExtension = {
  id: ID.DisableExtension,
  rules: {
  // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF /* also disabled in svelte/disable per Svelte base config */,
    "no-self-assign": OFF /* ESLint */,
    "@stylistic/no-trailing-spaces": OFF /* svelte/no-trailing-spaces */,
  } as const,
};

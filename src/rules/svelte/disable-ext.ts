import {
  ID,
  OFF,
} from "../../_strings";

export const SvelteDisableExtension = [
  ID.DisableExtension,
  {
    // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF /* also disabled in svelte/disable per Svelte base config */,
    "no-self-assign": OFF /* ESLint */,
  },
] as const;

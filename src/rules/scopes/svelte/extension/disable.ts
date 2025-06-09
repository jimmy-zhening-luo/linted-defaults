import {
  ID,
  OFF,
} from "../../../strings";

export const SvelteDisableExtension = {
  id: ID.Disable.Extension,
  rules: {
  // DOC: http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF /* also disabled in svelte/disable per Svelte base config */,
    "no-self-assign": OFF,
    "@stylistic/no-trailing-spaces": OFF /* replaces `no-trailing-spaces` */,
  } as const,
};

import { State } from "../state";

// DOC: https://html-eslint.org/docs/svelte/rules
export default {
  rules: {
    "html/svelte/class-spacing": State.OFF,
    "html/svelte/use-baseline": State.WARN,
    "html/svelte/no-obsolete-tags": State.WARN,
    "html/svelte/no-obsolete-attrs": State.WARN,
    "html/svelte/no-ineffective-attrs": State.WARN,
    "html/svelte/no-duplicate-class": State.WARN,
    "html/svelte/no-invalid-attr-value": State.ON,
  } as const,
};

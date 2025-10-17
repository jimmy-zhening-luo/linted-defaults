import {
  OFF,
} from "../../state";

export default {
  id: "disable/plugin",
  rules: {
    // DOC: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF /* comments ARE allowed in JSONC */,
  } as const,
};

import global from "./global";

export default {
  "*": global,
  js: [],
  ts: [],
  mocha: [],
  svelte: [],
  html: [],
  css: [],
  json: [
    "**/.clasprc.json",
    "**/package-lock.json",
  ],
  jsonc: [],
  jsoncc: [],
  yml: [],
};

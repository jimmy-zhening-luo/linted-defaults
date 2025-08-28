import eslint from "./enable";
import stylistic from "./stylistic";
import ts from "./ts";
import mocha from "./mocha";
import svelte from "./svelte";
import html from "./html";
import css from "./css";
import json from "./json";
import jsonc from "./jsonc";
import jsoncc from "./jsoncc";
import yml from "./yml";

export const rules = {
  js: [
    eslint,
    stylistic,
  ],
  ts,
  mocha,
  svelte,
  html,
  css,
  json,
  jsonc,
  jsoncc,
  yml,
};

import js from "./js";
import ts from "./ts";
import mocha from "./mocha";
import svelte from "./svelte";
import html from "./html";
import css from "./css";
import json from "./json";
import jsonc from "./jsonc";
import yml from "./yml";

export const rules = {
  js,
  ts,
  mocha,
  svelte,
  html,
  css,
  json,
  jsonc,
  yml,
} as const;

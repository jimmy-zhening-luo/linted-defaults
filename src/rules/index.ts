import js from "./js";
import ts from "./ts";
import svelte from "./svelte";
import mocha from "./mocha";
import html from "./html";
import json from "./json";
import jsonc from "./jsonc";
import yml from "./yml";

export const rules = {
  js,
  ts,
  svelte,
  mocha,
  html,
  json,
  jsonc,
  yml,
} as const;

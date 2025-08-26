import base from "./base";
import js from "./ignores/js";
import ts from "./ignores/ts";
import mocha from "./ignores/mocha";
import svelte from "./ignores/svelte";
import html from "./ignores/html";
import css from "./ignores/css";
import json from "./ignores/json";
import jsonc from "./ignores/jsonc";
import jsoncc from "./ignores/jsoncc";
import yml from "./ignores/yml";

export const ignores = {
  "*": base,
  js,
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

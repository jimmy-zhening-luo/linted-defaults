import js from "../files/base";

export default [
  "**/.git/",
  "**/*.js",
  "**/*.cjs",
  "**/*.mjs",
  "!*.js",
  "!*.cjs",
  "!*.mjs",
]
  .concat(
    js.map(file => "!" + file),
  );

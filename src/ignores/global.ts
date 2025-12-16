import js from "../files/base";

export default [
  "**/.git/",
  "**/*.js",
  "**/*.cjs",
  "**/*.mjs",
  "!*.js",
  "!*.cjs",
  "!*.mjs",
  "**/.vscode/c_cpp_properties.json",
]
  .concat(
    js.map(file => "!" + file),
  );

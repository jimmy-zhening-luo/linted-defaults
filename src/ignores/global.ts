import { pattern } from "../_pattern";

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
    pattern([
      "*.js",
      "*.cjs",
      "*.mjs",
    ])
      .map(path => "!".concat(path)),
  );

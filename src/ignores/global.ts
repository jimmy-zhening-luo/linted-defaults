import pattern from "../_pattern";

export default pattern(
  [],
  {
    paths: [
      ".git",
      ".svelte-kit",
      "dist",
      "build",
      "built",
      "bundle",
      "bundled",
      "pack",
      "packed",
      "in",
      "out",
      "input",
      "output",
      ".Trash",
    ]
      .map(folder => folder.concat("/")),
  },
  true,
);

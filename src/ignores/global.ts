import Scope from "../_scope";

export default Scope(
  [],
  {
    files: [
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

import {
  ROOTS,
  SUBROOTS,
} from "../_pattern";

const ext = [
  "**/*.js",
  "**/*.cjs",
  "**/*.mjs",
],
subroots = SUBROOTS.filter(subroot => subroot !== ""),
folders = ext.flatMap(
  ext => subroots.map(
    subroot => subroot.concat(
      "/",
      ext,
    ),
  ),
);

export default [
  "**/.git/",
  ...ext,
  "!*.js",
  "!*.cjs",
  "!*.mjs",
]
  .concat(
    ROOTS
      .flatMap(
        root => folders.map(
          folder => root.concat(folder),
        ),
      )
      .map(path => "!".concat(path)),
  );

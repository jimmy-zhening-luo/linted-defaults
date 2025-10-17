const ROOTS = [
  "",
  "code/*/",
],
SUBROOTS = [
  "",
  "src",
  "tests",
  "static",
  "typings",
  "public",
  "tools",
];

export default function Scope(
  extensions: string | string[],
  {
    folders = [],
    files = [],
    paths = [],
  }: Partial<
    Record<
      | "folders"
      | "files"
      | "paths",
      string[]
    >
  > = {},
  override = false,
) {
  const leaves = (
    typeof extensions === "string"
      ? [extensions]
      : extensions
  )
    .map(
      extension => "*."
        .concat(extension),
    )
    .concat(files),
  branches = (
    override
      ? folders
      : SUBROOTS
          .concat(folders)
  )
    .map(
      branch => branch === ""
        ? branch
        : branch.concat("/**/"),
    ),
  subpaths = branches.length === 0
    ? leaves
    : branches
        .flatMap(
          branch => leaves
            .map(
              leaf => branch.concat(leaf),
            ),
        );

  return ROOTS
    .flatMap(
      root => subpaths
        .map(
          subpath => root.concat(subpath),
        ),
    )
    .concat(paths);
}

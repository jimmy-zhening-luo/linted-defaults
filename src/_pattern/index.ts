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
  "docs",
];

export default function pattern(
  extensions: string | string[],
  pattern: Partial<
    Record<
      | "files"
      | "folders"
      | "paths",
      string[]
    >
  > = {},
  override?: boolean,
) {
  const leaves = (
    typeof extensions === "string"
      ? [extensions]
      : extensions
  )
    .map(extension => "*." + extension);

  if (pattern.files)
    leaves.push(...pattern.files);

  const _branches = override
    ? pattern.folders
    : pattern.folders
      ? SUBROOTS.concat(pattern.folders)
      : SUBROOTS,
  branches = _branches
    ? _branches.map(
        branch => branch === ""
          ? branch
          : branch + "/**/",
      )
    : undefined,
  subpaths
  = branches
    ? branches.flatMap(
        branch => leaves.map(
          leaf => branch + leaf,
        ),
      )
    : leaves;

  if (pattern.paths)
    subpaths.push(...pattern.paths);

  return ROOTS.flatMap(
    root => subpaths.map(
      subpath => root + subpath,
    ),
  );
}

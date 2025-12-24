const enum Path {
  Root = "code/*/",
}

const SUBROOTS = [
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
  const leaves = typeof extensions === "string"
    ? ["*." + extensions]
    : extensions.map(ext => "*." + ext);

  if (pattern.files) {
    const { length } = leaves,
    { files } = pattern,
    { length: fileCount } = files;

    leaves.length = length + fileCount;

    for (let i = 0; i < fileCount; ++i)
      leaves[length + i] = files[i]!;
  }

  const subpaths = (
    override
      ? pattern.folders
      : pattern.folders
        ? SUBROOTS.concat(pattern.folders)
        : SUBROOTS
  )
    ?.map(path => path && path + "/**/")
    .flatMap(
      path => leaves.map(leaf => path + leaf),
    )
    ?? leaves;

  if (pattern.paths) {
    const { length } = subpaths,
    { paths } = pattern,
    { length: pathCount } = paths;

    subpaths.length = length + pathCount;

    for (let i = 0; i < pathCount; ++i)
      subpaths[length + i] = paths[i]!;
  }

  if (!subpaths.length)
    return [];

  const { length } = subpaths;

  subpaths.length = length + length;

  for (let i = 0; i < length; ++i)
    subpaths[length + i] = Path.Root + subpaths[i]!;

  return subpaths;
}

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
  const filetype = (extension: string) => "*." + extensions,
  leaves = typeof extensions === "string"
    ? [filetype(extensions)]
    : extensions.map(filetype);

  if (pattern.files) {
    const { length } = leaves,
    { files } = pattern,
    { length: nFiles } = files;

    leaves.length = length + nFiles;

    for (let i = 0; i < nFiles; ++i)
      leaves[length + i] = files[i]!;
  }

  const recurse = (directory: string) => directory && directory + "/**/",
  subpaths = (
    override
      ? pattern.folders
      : pattern.folders
        ? SUBROOTS.concat(pattern.folders)
        : SUBROOTS
  )
    ?.map(recurse)
    .flatMap(
      path => leaves.map(leaf => path + leaf),
    )
    ?? leaves;

  if (pattern.paths) {
    const { length } = subpaths,
    { paths } = pattern,
    { length: nPaths } = paths;

    subpaths.length = length + nPaths;

    for (let i = 0; i < nPaths; ++i)
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

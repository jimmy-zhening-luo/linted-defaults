import {
  ROOTS,
  SUBROOTS,
} from "./project";

export function Scope(
  extensions: string | string[],
  {
    folders = [],
    files = [],
  }: Partial<
    Record<
      | "folders"
      | "files",
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
      branch => branch.concat("/**/"),
    ),
  subpaths = branches.length === 0
    ? leaves
    : branches
      .map(
        branch => leaves
          .map(
            leaf => branch.concat(leaf),
          ),
      )
      .flat();

  return ROOTS
    .map(
      root => subpaths
        .map(
          subpath => root.concat(subpath),
        ),
    )
    .flat();
}

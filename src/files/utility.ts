import * as common from "./paths";

export function CreateScope(
  extension: string,
  {
    filenames = [],
    subdirectories = [],
    paths = [],
    custom = [],
  }: Partial<Record<
    | "filenames"
    | "subdirectories"
    | "paths"
    | "custom",
    string[]
  >> = {},
) {
  function glob(
    common: readonly string[],
    scoped: string[] = [],
  ) {
    return `{${
      [
        ...common,
        ...scoped,
      ]
        .join(",")
    }}`;
  }

  const { roots } = common,
  branches = [
    "",
    `${glob(
      common.subdirectories,
      subdirectories,
    )}/**/`,
  ],
  leaves = [
    `*.${extension}`,
    ...filenames,
  ];

  return [
    ...roots.map(
      root => branches.map(
        branch => leaves.map(
          leaf => [
            root,
            branch,
            leaf,
          ]
            .join(""),
        ),
      ),
    )
      .flat(Infinity),
    ...custom,
  ];
}

import * as common from "./paths";

export function CreateScope(
  extension: string,
  {
    files = [],
    subdirectories = [],
    paths = [],
    custom = [],
  }: Partial<Record<
    | "files"
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
    const elements = [
      ...common,
      ...scoped,
    ]
      .join(",");

    return elements.includes(",") || elements.startsWith(".")
      ? `{${elements}}`
      : elements;
  }

  const leaves = glob(
    [`*.${extension}`],
    files,
  );

  return [
    ...[
      "",
      `${glob(common.roots)}${glob(common.subdirectories, subdirectories)}/**/`,
      ...paths.map(path => `${path}/`),
    ]
      .map(branch => `${branch}${leaves}`),
    ...custom,
  ];
}

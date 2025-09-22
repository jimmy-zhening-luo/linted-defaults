import * as PROJECT from "./project";

export function Scope(
  extension: string,
  {
    files = [],
    folders = [],
    unbound = [],
  }: Partial<
    Record<
      | "files"
      | "folders"
      | "unbound",
      string[]
    >
  > = {},
) {
  function glob(
    items: string[],
    {
      prepend = "",
      append = "",
    } = {},
  ) {
    const set = new Set(items),
    predicate = [...set]
      .join(",");

    return prepend.concat(
      set.size <= 1
        ? predicate
        : `{${predicate}}`,
      append,
    );
  }

  if (extension === "")
    return [];
  else {
    const roots = glob(
      PROJECT.ROOTS,
    ),
    branches = glob(
      [
        "",
        glob(
          [
            ...PROJECT.SUBROOTS,
            ...folders,
          ],
          {
            append: "/**/",
          },
        ),
      ],
    ),
    leaves = glob(
      [
        "*.".concat(extension),
        ...files,
      ],
    );

    return [
      glob(
        [
          ...unbound.length === 0
            ? [""]
            : unbound,
          roots.concat(
            branches,
            leaves,
          ),
        ],
      ),
    ];
  }
}

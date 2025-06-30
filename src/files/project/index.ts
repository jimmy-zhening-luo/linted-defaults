import * as SHARED from "./shared";

export function CreateScope(
  extension: string,
  {
    filenames = [],
    subdirectories = [],
    custom = [],
  }: Partial<
    Record<
      | "filenames"
      | "subdirectories"
      | "custom",
      string[]
    >
  > = {},
) {
  const branches = [
    "",
    `{${
      [
        ...SHARED.subdirectories,
        ...subdirectories,
      ].join(",")
    }}/**/`,
  ],
  leaves = [
    "*." + extension,
    ...filenames,
  ];

  return [
    ...SHARED
      .roots
      .map(
        root => branches
          .map(
            branch => leaves
              .map(
                leaf => root + branch + leaf,
              ),
          )
          .flat(),
      )
      .flat(),
    ...custom,
  ];
}

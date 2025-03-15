import { projects, subfolders } from "./paths";

export function CreateScope(
  files: string,
  {
    projects: moreProjects = [],
    subfolders: moreSubfolders = [],
    paths = [],
    custom = [],
  }: {
    projects?: string[];
    subfolders?: string[];
    paths?: string[];
    custom?: string[];
  } = {},
) {
  function globOr(paths: string[], more: string[] = []) {
    return [...paths, ...more].join(",");
  }

  return [
    ...[
      "",
      `{${globOr(projects, moreProjects)}}{${globOr(subfolders, moreSubfolders)}}/**/`,
      ...paths.map(path => `${path}/`),
    ]
      .map(glob => `${glob}${files}`),
    ...custom,
  ];
}

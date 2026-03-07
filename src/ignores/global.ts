import jsFiles from "../files/base";

const globalIgnores = [
  "**/.git/",
  "**/*.js",
  "**/*.cjs",
  "**/*.mjs",
  "!*.js",
  "!*.cjs",
  "!*.mjs",
  "**/.vscode/c_cpp_properties.json",
],
notJsFiles = jsFiles.map(
  pattern => "!" + pattern
),
{ length: nFiles } = notJsFiles,
{ length } = globalIgnores;

globalIgnores.length = length + nFiles

for (let i = 0; i < nFiles; ++i)
  globalIgnores[length + i] = notJsFiles[i]!;

export default globalIgnores;

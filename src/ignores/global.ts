import jsIncludePatterns from "../files/base";

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
invertedJsFiles = jsIncludePatterns.map(
  pattern => "!" + pattern,
),
length = globalIgnores.length,
jsFilesLength = invertedJsFiles.length;

globalIgnores.length = length + jsFilesLength;

for (let i = 0; i < jsFilesLength; ++i)
  globalIgnores[length + i] = invertedJsFiles[i]!;

export default globalIgnores;

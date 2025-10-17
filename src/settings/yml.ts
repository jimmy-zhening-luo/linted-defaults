// DOC: https://github.com/ota-meshi/yaml-eslint-parser?tab=readme-ov-file#advanced-configuration
export default {
  plugins: ["yml"],
  languageOptions: {
    parser: "yml" as const,
  },
};

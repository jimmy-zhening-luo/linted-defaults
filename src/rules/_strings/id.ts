export const
Enable = {
  Enable: "enable",
  Style: "enable/style",
  Extension: "enable/extension",
  Plugin: {
    Plugin: "enable/plugin",
    Extension: "enable/plugin/extension",
  },
} as const,
Disable = {
  Disable: "disable",
  Extension: "disable/extension",
  Plugin: {
    Plugin: "disable/plugin",
    Extension: "disable/plugin/extension",
  },
} as const;

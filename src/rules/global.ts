import { State } from "./state";

export default {
  rules: {
    "stylistic/eol-last": State.WARN,
    "stylistic/linebreak-style": State.WARN,
    "stylistic/exp-list-style": [
      State.WARN,
      {
        singleLine: {
          maxItems: 2,
        },
        overrides: {
          ExportNamedDeclaration: {
            singleLine: {
              maxItems: 1,
            },
          },
          TSInterfaceBody: {
            singleLine: {
              maxItems: 0,
              spacing: "never",
            },
          },
          TSEnumBody: {
            singleLine: {
              maxItems: 0,
              spacing: "never",
            },
          },
          TSTupleType: {
            singleLine: {
              maxItems: 3,
            },
          },
          TSTypeParameterDeclaration: {
            singleLine: {
              maxItems: 1,
            },
          },
        },
      },
    ],
  } as const,
};

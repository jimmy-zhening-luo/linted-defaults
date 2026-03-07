import { State } from "./state";

export default [
  {
    rules: {
      "stylistic/eol-last": State.WARN,
      "stylistic/linebreak-style": State.WARN,
      "stylistic/exp-list-style": [
        State.OFF,
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
              },
            },
            TSEnumBody: {
              singleLine: {
                maxItems: 0,
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
            JSONArrayExpression: {
              singleLine: {
                maxItems: 0,
              },
            },
            JSONObjectExpression: {
              singleLine: {
                maxItems: 0,
              },
            },
          },
        },
      ],
    } as const,
  },
];

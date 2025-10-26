import "chai/register-should.js";
import defaults from ".";
import { scopes } from "./index.scopes.spec";

describe(
  "Main Export",
  function () {
    const GLOBAL = "*",
    {
      ignores,
      files,
      rules,
    } = defaults;

    describe(
      "module",
      function () {
        it(
          "with object submodules: files, ignores, rules",
          function () {
            files
              .should
              .be
              .an("object");
            ignores
              .should
              .be
              .an("object");
            rules
              .should
              .be
              .an("object");
          },
        );
      },
    );
    describe(
      "files",
      function () {
        it(
          "only has all scopes",
          function () {
            files
              .should
              .have
              .keys(scopes);
          },
        );
        it(
          "of arrays",
          function () {
            for (const scope of Object.values(files))
              scope
                .should
                .be
                .an("array");
          },
        );
        it(
          "of expanded strings",
          function () {
            for (const scope of Object.values(files))
              for (const pattern of scope)
                pattern
                  .should
                  .be
                  .a("string")
                  .not
                  .have
                  .string("{")
                  .not
                  .have
                  .string("}");
          },
        );
      },
    );
    describe(
      "ignores",
      function () {
        it(
          "only has globals and any scopes",
          function () {
            ignores
              .should
              .have
              .keys(
                GLOBAL,
                ...new Set(scopes).intersection(
                  new Set(
                    Object.keys(ignores),
                  ),
                ),
              );
          },
        );
        it(
          "of arrays",
          function () {
            for (const scope of Object.values(ignores))
              scope
                .should
                .be
                .an("array");
          },
        );
        it(
          "of expanded strings",
          function () {
            for (const scope of Object.values(ignores))
              for (const pattern of scope)
                pattern
                  .should
                  .be
                  .a("string")
                  .not
                  .have
                  .string("{")
                  .not
                  .have
                  .string("}");
          },
        );
      },
    );
    describe(
      "rules",
      function () {
        it(
          "only has all scopes",
          function () {
            rules
              .should
              .have
              .keys(scopes);
          },
        );
        it(
          "of arrays",
          function () {
            for (const scope of Object.values(rules))
              scope
                .should
                .be
                .an("array");
          },
        );
        it(
          "of rule config objects",
          function () {
            for (const scope of Object.values(rules))
              for (const config of scope) {
                config
                  .should
                  .be
                  .an("object")
                  .with
                  .keys("rules")
                  .with
                  .own
                  .property("rules")
                  .an("object");

                for (const rule of Object.keys(config.rules)) {
                  rule
                    .should
                    .be
                    .a("string");

                  const value = config.rules[rule as keyof typeof config.rules] as number | object;

                  if (typeof value !== "number")
                    value
                      .should
                      .be
                      .an("array")
                      .with
                      .property("0")
                      .a("number");
                }
              }
          },
        );
      },
    );
  },
);

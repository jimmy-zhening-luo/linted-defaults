import "chai/register-should.js";
import defaults from "..";
import { scopes } from "./index.scopes.spec";

describe(
  "Main Export",
  () => {
    const GLOBAL = "*",
    {
      ignores,
      files,
      rules,
    } = defaults;

    describe(
      "module",
      () => {
        it(
          "with object submodules: files, ignores, rules",
          () => {
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
      () => {
        it(
          "has some scopes",
          () => {
            files
              .should
              .include
              .keys(scopes);
          },
        );
        it(
          "of arrays",
          () => {
            for (const scope of Object.values(files))
              scope
                .should
                .be
                .an("array");
          },
        );
        it(
          "of expanded strings",
          () => {
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
      () => {
        it(
          "has globals",
          () => {
            ignores
              .should
              .include
              .keys(GLOBAL);
          },
        );
        it(
          "of arrays",
          () => {
            for (const scope of Object.values(ignores))
              scope
                .should
                .be
                .an("array");
          },
        );
        it(
          "of expanded strings",
          () => {
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
      () => {
        it(
          "has some scopes",
          () => {
            rules
              .should
              .include
              .keys(scopes);
          },
        );
        it(
          "of arrays",
          () => {
            for (const scope of Object.values(rules))
              scope
                .should
                .be
                .an("array");
          },
        );
        it(
          "of rule config objects",
          () => {
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

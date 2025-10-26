import "chai/register-should.js";
import defaults from ".";

describe(
  "Main Export",
  function () {
    const SCOPE = [
      "js",
      "ts",
    ],
    GLOBAL = "*",
    {
      ignores,
      files,
      rules,
    } = defaults;

    describe(
      "module",
      function () {
        it(
          "with object submodules: ignores, files, rules",
          function () {
            ignores
              .should
              .be
              .an("object");
            files
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
      "submodule: ignores",
      function () {
        it(
          "has global scope",
          function () {
            ignores
              .should
              .have
              .own
              .property(GLOBAL);
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
          "of strings",
          function () {
            for (const scope of Object.values(ignores))
              for (const pattern of scope)
                pattern
                  .should
                  .be
                  .a("string");
          },
        );
      },
    );
    describe(
      "submodule: files",
      function () {
        it(
          "has scopes",
          function () {
            for (const scope of SCOPE)
              files
                .should
                .have
                .own
                .property(scope);
          },
        );
        it(
          "NO global scope",
          function () {
            files
              .should
              .not
              .have
              .own
              .property(GLOBAL);
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
          "of strings",
          function () {
            for (const scope of Object.values(files))
              for (const pattern of scope)
                pattern
                  .should
                  .be
                  .a("string");
          },
        );
      },
    );
    describe(
      "submodule: rules",
      function () {
        it(
          "has scopes",
          function () {
            for (const scope of SCOPE)
              rules
                .should
                .have
                .own
                .property(scope);
          },
        );
        it(
          "NO global scope",
          function () {
            rules
              .should
              .not
              .have
              .own
              .property(GLOBAL);
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
          "of object",
          function () {
            for (const scope of Object.values(rules))
              for (const rule of scope)
                rule
                  .should
                  .be
                  .an("object");
          },
        );
        it(
          "named rulesets",
          function () {
            for (const scope of Object.values(rules))
              for (const rule of scope) {
                rule
                  .should
                  .have
                  .keys(
                    "name",
                    "rules",
                  );
                rule
                  .rules
                  .should
                  .be
                  .an("object");

                for (const key of Object.keys(rule.rules))
                  key
                    .should
                    .be
                    .a("string");
              }
          },
        );
      },
    );
  },
);

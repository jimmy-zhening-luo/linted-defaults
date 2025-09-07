import "chai/register-should.js";
import * as State from "./state";

describe(
  "Strings: State",
  function () {
    const state = { ...State };

    describe(
      "shape",
      function () {
        it(
          "is object module",
          function () {
            state
              .should
              .be
              .an("object");
          },
        );
      },
    );
    describe(
      "keys",
      function () {
        const keys = Object.keys(state);

        it(
          "count 3",
          function () {
            keys
              .should
              .have
              .lengthOf(3);
          },
        );
        it(
          "unique count 3",
          function () {
            new Set(keys)
              .should
              .have
              .lengthOf(3);
          },
        );
      },
    );
    describe(
      "values",
      function () {
        it(
          "off(0) | warn(1) | error(2)",
          function () {
            new Set(Object.values(state))
              .should
              .have
              .keys(
                "off",
                "warn",
                "error",
              );
          },
        );
      },
    );
  },
);

import "chai/register-should.js";
import * as State from "./state";

const state = { ...State };

describe(
  "Strings:Level",
  function () {
    describe(
      "shape",
      function () {
        it(
          "is module (converted to object)",
          function () {
            state
              .should.be
              .an("object");
          },
        );
      },
    );
    describe(
      "count",
      function () {
        it(
          "is 3",
          function () {
            Object.keys(state)
              .should.have
              .lengthOf(3);
          },
        );
      },
    );
    describe(
      "unique count",
      function () {
        it(
          "is 3",
          function () {
            new Map(Object.entries(state))
              .should.have
              .lengthOf(3);
          },
        );
      },
    );
    describe(
      "values",
      function () {
        it(
          "are: error | warn | off",
          function () {
            new Map(Object.entries(state))
              .should
              .include("error")
              .and.include("warn")
              .and.include("off");
          },
        );
      },
    );
  },
);

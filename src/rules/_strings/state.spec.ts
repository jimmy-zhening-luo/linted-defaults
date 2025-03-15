import { expect } from "chai";
import * as state from "./state";

describe("Strings:Level", function () {
  describe("shape", function () {
    it("is module", function () {
      expect(state)
        .a("module");
    });
  });
  describe("count", function () {
    it("is 3", function () {
      expect(Object.keys(state))
        .lengthOf(3);
    });
  });
  describe("unique count", function () {
    it("is 3", function () {
      expect(new Map(Object.entries(state)))
        .lengthOf(3);
    });
  });
  describe("values", function () {
    it("are: error, warn, off", function () {
      expect(new Map(Object.entries(state)))
        .includes("error")
        .and.includes("warn")
        .and.includes("off");
    });
  });
});

const assert = chai.assert; 

describe("Test suite for testing lib.js", function () {

  describe("Test suite for testing sum function", function () {
    it("should return sum of two numbers", function () {
      assert.equal(sum(2, 3), 5);
    });

    it("should return NaN if one parameter is skipped", function () {
      assert.isNaN(sum(2));
    });

    it("should convert string to number if input parameters is string", function () {
      assert.equal(sum("2", "3"), 5);
    });
  });

  describe("Test suite for testing pow function", function () {
    it("should raising x to the n power", function () {
      assert.equal(pow(2, 3), 8);
    });
  });

  describe("Test suite for testing removeByName function", function () {
    it("should remove some element from array", function () {
      const arr = [{ name: "John" }, { name: "Doe" }];
      const result = removeByName(arr, "John");
      assert.deepEqual(result, [{ name: "Doe" }]);
    });

    it("should not remove element from array", function () {
      const arr = [{ name: "Alice" }];
      const result = removeByName(arr, "Bob");
      assert.deepEqual(result, [{ name: "Alice" }]);
    });
  });

});

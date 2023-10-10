describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing sum function", () => {
    it("should return sum of two numbers", () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it("should return NaN if one parameter is skipped", () => {
      assert.equal(isNaN(sum(1)), true);
    });

    it("should convert string to number if input parameters is string", () => {
      assert.equal(sum("5", "1"), 6);
      assert.equal(sum(10, "1"), 11);
      assert.equal(sum("25", 5), 30);
    });
  });

  describe("Test suite for testing pow function", () => {
    it("should raising x to the n power", () => {
      // Write your code here
      assert.equal(pow(2, 2), 4);
      assert.equal(pow("3", 2), 9);
      assert.equal(pow(4, "2"), 16);
    });
  });

  describe("Test suite for testing removeByName function", () => {
    it("should remove some element from array", () => {
      // Write your code here
      let list = ["a", "d", "c"];
      assert(
        JSON.stringify(removeByName(list, "a")),
        JSON.stringify(["b", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, "b")),
        JSON.stringify(["a", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, "c")),
        JSON.stringify(["a", "b"])
      );
    });

    it("should not remove element from array", () => {
      // Write your code here
      let list = ["a", "b", "c"];
      assert(
        JSON.stringify(removeByName(list, "d")),
        JSON.stringify(["a", "b", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, "v")),
        JSON.stringify(["a", "b", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, 1)),
        JSON.stringify(["a", "b", "c"])
      );
    });
  });
});

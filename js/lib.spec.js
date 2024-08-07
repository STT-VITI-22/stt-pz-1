describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing sum function", () => {
    it("should return sum of two numbers", () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it("should return NaN if one parameter is skipped", () => {
      assert.isNaN(sum(1), NaN);
    });

    it("should convert string to number if input parameters is string", () => {
      assert.equal(sum("5", "1"), 6);
      assert.equal(sum(10, "1"), 11);
      assert.equal(sum("25", 5), 30);
    });
  });

  describe("Test suite for testing pow function", () => {
    it("should raising x to the n power", () => {
      assert.equal(pow(2, 3), 8);
    });
  });

  describe("Test suite for testing factorial function", () => {
    it("should calculate factorial of a positive number", () => {
      assert.equal(factorial(0), 1);
      assert.equal(factorial(2), 2);
      assert.equal(factorial(3), 6);
      assert.equal(factorial(4), 24);
      assert.equal(factorial(5), 120);
    });
  });

  describe("Test suite for testing removeByName function", () => {
    it("should remove some element from array", () => {
      const list = [1, 2, 3];
      const removedElement = 1;
      const expectedResult = [2, 3];
      assert.deepEqual(removeByName(list, removedElement), expectedResult);
    });

    it("should not remove element from array", () => {
      const list = ["Bob", "Dave", "Mark"];
      const removedElement = "Lisa";
      const expectedResult = ["Bob", "Dave", "Mark"];
      assert.deepEqual(removeByName(list, removedElement), expectedResult);
    });
  });
});

describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing sum function", () => {
    it("should return sum of two numbers", () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it("should return NaN if one parameter is skipped", () => {
      assert.isNaN(sum(1));
    });

    it("should convert string to number if input parameters are strings", () => {
      assert.equal(sum("5", "1"), 6);
      assert.equal(sum(10, "1"), 11);
      assert.equal(sum("25", 5), 30);
    });
  });

  describe("Test suite for testing pow function", () => {
    it("should raise a number to the power of n", () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(5, 2), 25);
    });

    it("should return 1 for any number raised to the power of 0", () => {
      assert.equal(pow(10, 0), 1);
    });

    it("should return the number itself if the power is 1", () => {
      assert.equal(pow(7, 1), 7);
    });
  });

  describe("Test suite for testing factorial function", () => {
    it("should return factorial of a number", () => {
      assert.equal(factorial(5), 120);
      assert.equal(factorial(3), 6);
    });

    it("should handle negative numbers (return 1)", () => {
      assert.equal(factorial(-5), 1);
    });
  });

  describe("Test suite for testing fibonacci function", () => {
    it("should return the nth Fibonacci number", () => {
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(5), 5);
    });
  });

  describe("Test suite for testing removeByName function", () => {
    it("should remove the specified element from the array", () => {
      assert.deepEqual(removeByName(["Alice", "Bob", "Charlie"], "Bob"), [
        "Alice",
        "Charlie",
      ]);
    });

    it("should not modify the array if the element is not found", () => {
      assert.deepEqual(removeByName(["Alice", "Bob", "Charlie"], "Dan"), [
        "Alice",
        "Bob",
        "Charlie",
      ]);
    });

    it("should handle an empty array", () => {
      assert.deepEqual(removeByName([], "Bob"), []);
    });
  });
});

describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing sum function", () => {
    it("should return the sum of two numbers", () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it("should return NaN if one parameter is missing", () => {
      assert.isNaN(sum(1));
    });

    it("should convert strings to numbers if input parameters are strings", () => {
      assert.equal(sum("5", "1"), 6);
      assert.equal(sum(10, "1"), 11);
      assert.equal(sum("25", 5), 30);
    });
  });

  describe("Test suite for testing pow function", () => {
    it("should raise x to the power of n", () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(1, 0), 1);
    });

    it("should handle negative bases correctly", () => {
      assert.equal(pow(-2, 3), -8);
      assert.equal(pow(-5, 2), 25);
    });
  });

  describe("Test suite for testing factorial function", () => {
    it("should calculate the factorial of a positive number", () => {
      assert.equal(factorial(0), 1);
      assert.equal(factorial(2), 2);
      assert.equal(factorial(3), 6);
      assert.equal(factorial(4), 24);
      assert.equal(factorial(5), 120);
    });
  });

  describe("Test suite for testing fibonacci function", () => {
    it("should return the nth Fibonacci number", () => {
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(12), 144);
    });

    it("should return 0 if n is less than or equal to 0", () => {
      assert.equal(fibonacci(0), 0);
      assert.equal(fibonacci(-2), 0);
    });
  });

  describe("Test suite for testing removeByName function", () => {
    it("should remove the specified element from the array", () => {
      const list = [1, 2, 3];
      const nameToRemove = 1;
      const expectedResult = [2, 3];
      assert.deepEqual(removeByName(list, nameToRemove), expectedResult);
    });

    it("should not remove any element if the specified name is not in the array", () => {
      const list = ["Bob", "Dave", "Mark"];
      const nameToRemove = "Lisa";
      const expectedResult = ["Bob", "Dave", "Mark"];
      assert.deepEqual(removeByName(list, nameToRemove), expectedResult);
    });
  });

  describe("Test suite for testing makeCounter function", () => {
    it("should create a counter and increment its value", () => {
      const counter = makeCounter(0);
      assert.equal(counter(), 0);
      assert.equal(counter(), 1);
      assert.equal(counter(), 2);
      assert.equal(counter(), 3);
    });

    it("should work correctly when initialized with a negative value", () => {
      const counter = makeCounter(-5);
      assert.equal(counter(), -5);
      assert.equal(counter(), -4);
      assert.equal(counter(), -3);
      assert.equal(counter(), -2);
    });
  });

  describe("Test suite for testing getAsyncTimerId function", () => {
    it("should return a timer ID after the specified time", function (done) {
      const time = 1000;

      getAsyncTimerId(time).then((timerId) => {
        assert.isNumber(timerId);
        assert.isAtLeast(timerId, Math.floor(Date.now() / 1000) - 1);
        done();
      }).catch(done);
    });
  });

  describe("Test suite for testing asyncMultiply function", () => {
    it("should return twice the input value after a delay", function (done) {
      const input = 5;
      const expectedOutput = 10;

      asyncMultiply(input).then((result) => {
        assert.equal(result, expectedOutput);
        done();
      }).catch(done);
    });
  });
});

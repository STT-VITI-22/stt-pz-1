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
      assert.equal(pow(1, 0), 1);
    });
    it("should raising x to the n power when it`s < 0", () => {
      assert.equal(pow(-2, 3), -8);
      assert.equal(pow(-5, 2), 25);
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

  describe("Test suite for testing fibonacci function", () => {
    it("should return summury of fibonacci numbers", () => {
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(12), 144);
    })
    it("should return null if it`s <= 0", () => {
      assert.equal(fibonacci(0), 0);
      assert.equal(fibonacci(-2), 0);
    })
  })

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

  describe("Test suite for testing makeCounter function", () => {
    it("should make counter and return number n + 1", () => {
      const counter = makeCounter(0)
      assert.equal(counter(), 0)
      assert.equal(counter(), 1)
      assert.equal(counter(), 2)
      assert.equal(counter(), 3)
    })
    it("If it starts with n < 0", () => {
      const counter = makeCounter(-5)
      assert.equal(counter(), -5)
      assert.equal(counter(), -4)
      assert.equal(counter(), -3)
      assert.equal(counter(), -2)
    })
  })

  describe("Test suite for getAsyncTimerId function", () => {
    it("should return a timerId after the specified time", function(done) {
      const time = 1000;

      const timerPromise = getAsyncTimerId(time);
      timerPromise.then(timerId => {
        assert.isNumber(timerId);
        assert.isAtLeast(timerId, Math.floor(Date.now() / 1000) - 1);
        console.log(timerId);
        done();
      }).catch(done);
    });
  });

  describe("Test suite for asyncMultiply function", () => {
    it("should return a timerId after the specified time", () => {
      
    }) 
  });
});

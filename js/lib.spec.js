const assert = require('assert');
const {sum, pow, removeByName, fibonacci, factorial, makeCounter, httpGet, asyncMultiply, getAsyncTimerId} = require("./lib");

const JSON_SERVER_URL = "http://localhost:9876"

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.equal(sum(1), NaN)
    });

    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(1, 5), 1)
      assert.equal(pow(5, 0), 1)
      assert.equal(pow(10, -1), 0.1)
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const winterMonths = ["December", "January", "February"]
      const monthToRemove = "December"
      const winterMonthWithoutDecember = ["January", "February"]

      assert.deepEqual(removeByName(winterMonths, monthToRemove), winterMonthWithoutDecember)
    });

    it('should not remove element from array', () => {
      const winterMonths = ["December", "January", "February"]
      const monthToRemove = "July"
      const winterMonthWithoutDecember = ["January", "February"]

      assert.notDeepEqual(removeByName(winterMonths, monthToRemove), winterMonthWithoutDecember)
    });
  });

  describe('Test suite for testing fibonacci function', () => {
    it('should return order number of fibonacci', () => {
      assert.equal(fibonacci(1), 1)
      assert.equal(fibonacci(0), 0)
      assert.equal(fibonacci(5), 5)
      assert.equal(fibonacci(10), 55)
    });

    it('should raise exceptions in case of invalid input numbers', () => {
      assert.throws(() => fibonacci(0.5), Error, 'Fibonacci number must be an integer')
      assert.throws(() => fibonacci(-1), Error, 'Fibonacci must be greater than 0')
    })
  });

  describe('Test suite for testing factorial function', () => {
    it('should return raised number to factorial', () => {
      assert.equal(factorial(0), 1)
      assert.equal(factorial(1), 1)
      assert.equal(factorial(2), 2)
      assert.equal(factorial(5), 120)
    });

    it('should raise exceptions in case of invalid input numbers', () => {
      assert.throws(() => factorial(0.5), Error, 'Given number must be an integer')
      assert.throws(() => factorial(-1), Error, "Given number can't be smaller than 0")
    })
  });

  describe('Test suite for testing counter maker', () => {
    it('should return incremented number', () => {
      const positiveCounter = makeCounter(5)
      assert.equal(positiveCounter(), 5)
      assert.equal(positiveCounter(), 6)
      assert.equal(positiveCounter(), 7)

      const negativeCounter = makeCounter(-5)
      assert.equal(negativeCounter(), -5)
      assert.equal(negativeCounter(), -4)
      assert.equal(negativeCounter(), -3)
    });
  });

  describe('Test suite for testing http request maker', function () {
    it('Request should be resolved with the response', function (done) {
      httpGet(`${JSON_SERVER_URL}/months`).then(response => {
        const months = JSON.parse(response)
        assert.equal(months.length, 3)
        assert.deepEqual(months[0], {id: 1, name: 'December'})
      }).catch(error => {
        assert.fail(error)
      }).finally(done);
    });

    it('Requst should be rejected with a network error', function (done) {
      httpGet(`${JSON_SERVER_URL}/really/invalid/url`).catch(error => {
        assert.strictEqual(error.message, 'Network Error');
      }).finally(done);
    });
  });

  describe('Test suite for asyncMultiply function', function () {
    this.timeout(3500)
    it('Positive number should be multiplied by 2', async () => {
      const result = await asyncMultiply(2);
      assert.equal(result, 4);
    });

    it('Negative number should be multiplied by 2', async () => {
      const result = await asyncMultiply(-2.5);
      assert.equal(result, -5);
    });

    it('Zero number should be multiplied by 2', async () => {
      const result = await asyncMultiply(0);
      assert.equal(result, 0);
    });

    it('Error should be raised in case of invalid given number', (done) => {
      asyncMultiply("String")
        .then(() => {
          assert.fail("Test must be failed");
        })
        .catch(error => {
          assert.throws(error, Error, "Given number can not be a string");
        })
        .finally(done);
    })
  });

  describe("Test suit for testing async timer id", function () {
    it('Test should return valid time id', async () => {
      const timerId = await getAsyncTimerId(1000);
      const currentTime = Math.floor(Date.now() / 1000);
      assert.equal(timerId, currentTime);
    })

    it('Test should be failed cause different time given', async () => {
      const timerId = await getAsyncTimerId(1500);
      const currentTime = Math.floor(Date.now() / 500);
      assert.notEqual(timerId, currentTime);
    })
  })

})


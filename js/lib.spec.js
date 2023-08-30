describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isTrue(isNaN(sum(1)))
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(2, "3"), 8)
      assert.equal(pow("2", "3"), 8)
      assert.equal(pow(2, 3), 8)
      assert.equal(pow("2", 3), 8)
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      assert.deepEqual(removeByName(["audi", "porshe", "mercedes", "bmw"], "bmw"), ["audi", "porshe", "mercedes"])
      assert.deepEqual(removeByName(["audi", "porshe", "mercedes", "bmw"], "mercedes"), ["audi", "porshe", "bmw"])
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName(["audi", "porshe", "mercedes", "bmw"], "bugatti"), ["audi", "porshe", "mercedes", "bmw"])
    });
  });

  describe('Test suite for testing factorial function', () => {
    it('should return factorial from number n', () => {
      assert.equal(factorial(4), 24)
      assert.equal(factorial(0), 1)
    });

    it('should return error when number is under 0', () => {
      assert.throws(() => {factorial(-4)}, "Maximum call stack size exceeded")
    });
  });

  describe('Test suite for testing fibonacci function', function () {
    it('should return 1 for input 1', function () {
      assert.equal(fibonacci(1), 1);
    });

    it('should calculate Fibonacci sequence correctly', function () {
      assert.equal(fibonacci(3), 2)
      assert.equal(fibonacci(4), 3)
      assert.equal(fibonacci(5), 5)
      assert.equal(fibonacci(6), 8)
    });
  });

  describe('Test suite for testing makeCounter function', function () {
    it('should increment the counter and return the updated value', function () {
      const counter = makeCounter(0);
      assert.equal(counter(), 0)
      assert.equal(counter(), 1)
      assert.equal(counter(), 2)
    });

    it('should return -1 for -2', function () {
      //this test show that code of makeCounter is invalid
      assert.equal(counter(-2),-1)
    });
  });

  describe('Test suite for testing getAsyncTimerId function', function() {
    it('must return a number', function() {
      let result = getAsyncTimerId(1000);
      setTimeout(function() {
        assert.isNumber(result);
      }, 2000);
    });
  });

  describe('Test suite for testing asyncMultiply function', function() {
    it('should return the correct value', async function() {
      asyncMultiply(10).then(function(result) {
        assert.equal(result, 10);
      })
    });

    it('test for asyncMultiply', async function() {
      asyncMultiply(10).then(function(result) {
        assert.isNumber(result);
      })
    });
  });

  describe('Test suite for testing httpGet function', function() {
    it('should return a Promise ', function() {
      let result = httpGet("www.google.com");
      assert.instanceOf(result, Promise);
    });

    it('should return the response on a successful request', function() {
      httpGet('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
          assert.isString(response);
        });
    });

    it('should reject with "Network Error" for network errors', function () {
      const nonExistentURL = 'https://example.com/nonexistent';
      return httpGet(nonExistentURL).catch((error) => {
        assert.strictEqual(error.message, 'Network Error');
      });
    });

    it('should reject with the appropriate error for other status codes', function () {
      const invalidURL = 'https://httpstat.us/404';
      return httpGet(invalidURL).catch((error) => {
        assert.strictEqual(error.message, 'Not Found');
        assert.strictEqual(error.code, 404);
      });
    });
  });
});


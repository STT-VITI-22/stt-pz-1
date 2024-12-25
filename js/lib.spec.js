describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1));
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raise x to the power of n (positive integer)', () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(5, 2), 25);
      assert.equal(pow(10, 1), 10);
    });

    it('should return 1 when n is 0 (any number raised to power 0 is 1)', () => {
      assert.equal(pow(2, 0), 1);
      assert.equal(pow(10, 0), 1);
      assert.equal(pow(-5, 0), 1);
    });

    it('should handle n as 1 (return the base number)', () => {
      assert.equal(pow(2, 1), 2);
      assert.equal(pow(10, 1), 10);
      assert.equal(pow(-5, 1), -5);
    });

    it('should return correct results for edge cases', () => {
      assert.equal(pow(0, 3), 0);
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove an element from the array if it exists', () => {
      const list = ['apple', 'banana', 'cherry'];
      const result = removeByName(list, 'banana');
      assert.deepEqual(result, ['apple', 'cherry']);
    });

    it('should not modify the original array', () => {
      const list = ['apple', 'banana', 'cherry'];
      const copy = [...list];
      removeByName(list, 'banana');
      assert.deepEqual(list, copy);
    });

    it('should not remove anything if the element does not exist', () => {
      const list = ['apple', 'banana', 'cherry'];
      const result = removeByName(list, 'grape');
      assert.deepEqual(result, ['apple', 'banana', 'cherry']);
    });

    it('should return an empty array if the input list is empty', () => {
      const list = [];
      const result = removeByName(list, 'grape');
      assert.deepEqual(result, []);
    });

    it('should handle case sensitivity correctly', () => {
      const list = ['Apple', 'Banana', 'Cherry'];
      const result = removeByName(list, 'banana');
      assert.deepEqual(result, ['Apple', 'Banana', 'Cherry']);
    });
  });

  describe('Test suite for factorial function', () => {
    it('should calculate factorial of a positive number', () => {
      assert.equal(factorial(0), 1);
      assert.equal(factorial(1), 1);
      assert.equal(factorial(5), 120);
      assert.equal(factorial(10), 3628800);
    });

    it('should throw an error for negative numbers', () => {
      assert.throws(() => factorial(-1), Error, "Factorial is not defined for negative numbers");
    });

    it('should throw an error for non-integer inputs', () => {
      assert.throws(() => factorial(1.5), Error, "Factorial is only defined for integers");
    });
  });

  describe('Test suite for fibonacci function', () => {
    it('should calculate the correct Fibonacci number for valid input', () => {
      assert.equal(fibonacci(0), 0);
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(3), 2);
      assert.equal(fibonacci(4), 3);
      assert.equal(fibonacci(5), 5);
      assert.equal(fibonacci(10), 55);
    });

    it('should throw an error for negative numbers', () => {
      assert.throws(() => fibonacci(-1), Error, "Fibonacci is not defined for negative numbers");
      assert.throws(() => fibonacci(-5), Error, "Fibonacci is not defined for negative numbers");
    });

    it('should throw an error for non-integer inputs', () => {
      assert.throws(() => fibonacci(2.5), Error, "Fibonacci is only defined for integers");
      assert.throws(() => fibonacci(-3.7), Error, "Fibonacci is only defined for integers");
    });
  });

  describe('Test suite for makeCounter function', () => {
    it('should return correct incremented values', () => {
      const counter = makeCounter(5);
      assert.equal(counter(), 6);
      assert.equal(counter(), 7);
      assert.equal(counter(), 8);
    });

    it('should start counting from the given initial value', () => {
      const counter = makeCounter(0);
      assert.equal(counter(), 1);
      assert.equal(counter(), 2);
    });

    it('should correctly count when initialized with negative numbers', () => {
      const counter = makeCounter(-5);
      assert.equal(counter(), -4);
      assert.equal(counter(), -3);
    });
  });

  describe('Test suite for getAsyncTimerId function', () => {
    it('should return a valid timerId after the specified delay', async () => {
      const timerId = await getAsyncTimerId(1000);
      const currentTime = Math.floor(Date.now() / 1000);
      assert.equal(timerId, currentTime);
    });

    it('should return a different timerId for different calls', async () => {
      const timerId1 = await getAsyncTimerId(300);
      const timerId2 = await getAsyncTimerId(1500);
      assert.notEqual(timerId1, timerId2);
    });

    it('should resolve with Unix timestamp even with a small delay', async () => {
      const timerId = await getAsyncTimerId(10);
      const currentTime = Math.floor(Date.now() / 1000);
      assert.equal(timerId, currentTime);
    });

  });


  describe('asyncMultiply function', function () {
    this.timeout(5000)
    it('should multiply the input by 2 after 3 seconds', async () => {
      const result = await asyncMultiply(5);
      assert.equal(result, 10);
    });

    it('should multiply the input by 2 for a negative number', async () => {
      const result = await asyncMultiply(-5);
      assert.equal(result, -10);
    });

    it('should handle input of 0 correctly', async () => {
      const result = await asyncMultiply(0);
      assert.equal(result, 0);
    });
  });

  describe('httpGet function', function () {

    let originalXMLHttpRequest;

    beforeEach(function () {
      originalXMLHttpRequest = window.XMLHttpRequest;

      window.XMLHttpRequest = function () {
        this.open = function () {};
        this.send = function () {};
      };
    });

    afterEach(function () {
      window.XMLHttpRequest = originalXMLHttpRequest;
    });

    it('should resolve with the response text when status is 200', function (done) {
      window.XMLHttpRequest = function () {
        this.open = function () {};
        this.send = function () {
          this.status = 200;
          this.response = 'response data';
          this.onload();
        };
      };

      httpGet('https://api.example.com/data').then(response => {
        assert.strictEqual(response, 'response data');
        done();
      });
    });


    it('should reject with a network error if there is an xhr.onerror', function (done) {
      window.XMLHttpRequest = function () {
        this.open = function () {};
        this.send = function () {
          this.onerror();
        };
      };

      httpGet('https://api.example.com/data').catch(error => {
        assert.strictEqual(error.message, 'Network Error');
        done();
      });
    });
  });
});


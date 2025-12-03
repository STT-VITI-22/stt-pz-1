describe('Test suite for testing lib.js', () => {

  // ------- sum -------
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

  describe('Test suite for testing sum function with negative numbers', () => {
    it('should return correct sum for negative numbers', () => {
      assert.equal(sum(-5, -3), -8);
      assert.equal(sum(-7, 2), -5);
      assert.equal(sum(4, -6), -2);
    });
  });

  //sum: невалідні строки, float, великі числа
  describe('Test suite for sum function with invalid and float inputs', () => {
    it('should return NaN for non-numeric strings', () => {
      assert.isNaN(sum('abc', 5));
      assert.isNaN(sum('10px', '20px'));
    });

    it('should correctly add float numbers', () => {
      assert.closeTo(sum(0.1, 0.2), 0.3, 0.000001);
    });

    it('should work with big integers (within Number limits)', () => {
      const big = Number.MAX_SAFE_INTEGER;
      assert.equal(sum(big, 1), big + 1);
    });
  });

  // ------- pow -------
  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(5, 0), 1);
      assert.equal(pow(3, 4), 81);
    });
  });

  describe('Test suite for testing pow function with edge cases', () => {
    it('should handle edge cases correctly', () => {
      assert.equal(pow(0, 5), 0);
      assert.equal(pow(5, 0), 1);
      assert.equal(pow(1, 1000), 1);
    });
  });

  describe('Test suite for testing pow function additional cases', () => {
    it('should return x when power is 1', () => {
      assert.equal(pow(5, 1), 5);
      assert.equal(pow(-3, 1), -3);
    });

    it('should return 1 for negative power with current implementation', () => {
      assert.equal(pow(2, -1), 1);
      assert.equal(pow(10, -5), 1);
    });
  });

  // ------- removeByName -------
  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const names = ['Alice', 'Bob', 'Charlie', 'David'];
      const result = removeByName(names, 'Charlie');
      assert.deepEqual(result, ['Alice', 'Bob', 'David']);
    });

    it('should not remove element from array', () => {
      const names = ['Alice', 'Bob', 'Charlie', 'David'];
      const result = removeByName(names, 'Eve');
      assert.deepEqual(result, ['Alice', 'Bob', 'Charlie', 'David']);
    });
  });

  describe('Test suite for removeByName with edge cases', () => {
    it('should remove only first occurrence of name', () => {
      const names = ['Alice', 'Bob', 'Bob', 'Charlie'];
      const result = removeByName(names, 'Bob');
      assert.deepEqual(result, ['Alice', 'Bob', 'Charlie']);
    });

    it('should return empty array if list is empty', () => {
      assert.deepEqual(removeByName([], 'Alice'), []);
    });

    it('should return empty array when removing the only element', () => {
      assert.deepEqual(removeByName(['Alice'], 'Alice'), []);
    });
  });

  // ------- factorial -------
  describe('Test suite for testing factorial function', () => {
    it('should calculate factorial of number', () => {
      assert.equal(factorial(5), 120);
      assert.equal(factorial(0), 1);
      assert.equal(factorial(3), 6);
    });
  });

  describe('Test suite for testing factorial function with edge cases', () => {
    it('should handle edge cases correctly', () => {
      assert.equal(factorial(0), 1);
      assert.equal(factorial(1), 1);
    });
  });

  describe('Test suite for factorial additional cases', () => {
    it('should calculate factorial of 10', () => {
      assert.equal(factorial(10), 3628800);
    });
  });

  // ------- fibonacci -------
  describe('Test suite for testing fibonacci function', () => {
    it('should calculate Fibonacci sequence', () => {
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(6), 8);
      assert.equal(fibonacci(10), 55);
    });
  });

  describe('Test suite for fibonacci with additional small values', () => {
    it('should calculate fibonacci for 3 and 4', () => {
      assert.equal(fibonacci(3), 2);
      assert.equal(fibonacci(4), 3);
    });

    it('should return 1 for n = 0 with current implementation', () => {
      assert.equal(fibonacci(0), 1);
    });
  });

  // ------- makeCounter -------
  describe('Test suite for testing makeCounter function', () => {
    it('should return initial value and then increment on each call', () => {
      const counter = makeCounter(5);

      assert.equal(counter(), 5);
      assert.equal(counter(), 6);
      assert.equal(counter(), 7);
    });

    it('should create independent counters', () => {
      const counter1 = makeCounter(0);
      const counter2 = makeCounter(10);

      assert.equal(counter1(), 0);
      assert.equal(counter1(), 1);
      assert.equal(counter2(), 10);
      assert.equal(counter2(), 11);
    });
  });

  describe('Test suite for testing makeCounter function with different initial values', () => {
    it('should handle different initial values correctly', () => {
      const counterA = makeCounter(100);
      const counterB = makeCounter(-50);
      assert.equal(counterA(), 100);
      assert.equal(counterA(), 101);
      assert.equal(counterB(), -50);
      assert.equal(counterB(), -49);
    });
  });

  describe('Test suite for makeCounter robustness', () => {
    it('should work correctly after many calls', () => {
      const counter = makeCounter(0);
      for (let i = 0; i < 100; i++) {
        counter();
      }
      assert.equal(counter(), 100);
    });
  });

  // ------- getAsyncTimerId -------
  describe('Test suite for getAsyncTimerId', () => {
    it('should return undefined because timer fires later', () => {
      const result = getAsyncTimerId(100);
      assert.isUndefined(result);
    });

    it('should set timer but not return unix time immediately', (done) => {
      let result = getAsyncTimerId(50);
      assert.isUndefined(result);
      setTimeout(() => {
        assert.isUndefined(result);
        done();
      }, 100);
    });
  });

  // ------- asyncMultiply -------
  describe('Test suite for asyncMultiply', () => {
    it('should return multiplied value after 3s', async function () {
      this.timeout(4000);
      const result = await asyncMultiply(4);
      assert.equal(result, 8);
    });
  });

  describe('Test suite for asyncMultiply with different inputs', () => {
    it('should return correct multiplied values', async function () {
      this.timeout(5000); // 5 секунд достатньо

      const [res1, res2] = await Promise.all([
        asyncMultiply(2),
        asyncMultiply(5)
      ]);

      assert.equal(res1, 4);
      assert.equal(res2, 10);
    });
  });

  describe('Test suite for asyncMultiply with edge values', () => {
    it('should return 0 when x is 0', async function () {
      this.timeout(4000);
      const result = await asyncMultiply(0);
      assert.equal(result, 0);
    });

    it('should work with negative numbers', async function () {
      this.timeout(4000);
      const result = await asyncMultiply(-3);
      assert.equal(result, -6);
    });
  });

  // ------- httpGet -------
  describe('Test suite for httpGet function', () => {
    let originalXHR;
    let lastRequest;

    beforeEach(() => {
      originalXHR = XMLHttpRequest;

      function FakeXHR() {
        lastRequest = this;
        this.method = null;
        this.url = null;
        this.async = true;
        this.status = 0;
        this.statusText = '';
        this.response = null;
        this.onload = null;
        this.onerror = null;
      }

      FakeXHR.prototype.open = function (method, url, async) {
        this.method = method;
        this.url = url;
        this.async = async;
      };

      FakeXHR.prototype.send = function () {
      };

      XMLHttpRequest = FakeXHR;
    });

    afterEach(() => {
      XMLHttpRequest = originalXHR;
      lastRequest = null;
    });

    it('should resolve with response on status 200', (done) => {
      const url = '/test-success';

      httpGet(url).then(response => {
        try {
          assert.equal(response, 'OK');
          assert.equal(lastRequest.method, 'GET');
          assert.equal(lastRequest.url, url);
          assert.isTrue(lastRequest.async);
          done();
        } catch (e) {
          done(e);
        }
      }).catch(done);

      lastRequest.status = 200;
      lastRequest.statusText = 'OK';
      lastRequest.response = 'OK';
      lastRequest.onload();
    });

    it('should reject with error on non-200 status', (done) => {
      const url = '/test-404';

      httpGet(url).then(() => {
        done(new Error('Promise should not be resolved for non-200 status'));
      }).catch(error => {
        try {
          assert.instanceOf(error, Error);
          assert.equal(error.code, 404);
          done();
        } catch (e) {
          done(e);
        }
      });

      lastRequest.status = 404;
      lastRequest.statusText = 'Not Found';
      lastRequest.response = 'Not Found';
      lastRequest.onload();
    });

    it('should reject with error on network error', (done) => {
      const url = '/test-network-error';

      httpGet(url).then(() => {
        done(new Error('Promise should not be resolved on network error'));
      }).catch(error => {
        try {
          assert.instanceOf(error, Error);
          assert.equal(error.message, 'Network Error');
          done();
        } catch (e) {
          done(e);
        }
      });

      lastRequest.onerror();
    });
  });

});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      //підправив
      assert.isNaN(sum(1))
      assert.isNaN(sum())
    });

    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });

    it('should work with floating point numbers', () => {
      assert.closeTo(sum(0.1, 0.2), 0.3, 1e-10)
    });

    it('should return NaN if parameter is not a numeric string', () => {
      assert.isNaN(sum('abc', 1))
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.strictEqual(pow(2, 3), 8)
      assert.strictEqual(pow(3, 4), 81)
      assert.strictEqual(pow(10, 1), 10)
    });

    it('should return 1 if n is 0', () => {
      assert.strictEqual(pow(5, 0), 1)
      assert.strictEqual(pow(0, 0), 1)
    });

    it('should return 0 if x is 0 and n > 0', () => {
      assert.strictEqual(pow(0, 5), 0)
    });

    it('should work with negative base', () => {
      assert.strictEqual(pow(-2, 3), -8)
      assert.strictEqual(pow(-2, 2), 4)
    });

    it('should work with fractional base', () => {
      assert.closeTo(pow(0.5, 2), 0.25, 1e-10)
    });
  });

  describe('Test suite for testing factorial function', () => {
    it('should return 1 for 0 and 1', () => {
      assert.strictEqual(factorial(0), 1)
      assert.strictEqual(factorial(1), 1)
    });

    it('should calculate factorial of positive number', () => {
      assert.strictEqual(factorial(3), 6)
      assert.strictEqual(factorial(5), 120)
      assert.strictEqual(factorial(10), 3628800)
    });
  });

  describe('Test suite for testing fibonacci function', () => {
    it('should return 1 for first two members of sequence', () => {
      assert.strictEqual(fibonacci(1), 1)
      assert.strictEqual(fibonacci(2), 1)
    });

    it('should return n-th member of Fibonacci sequence', () => {
      const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      expected.forEach((value, i) => {
        assert.strictEqual(fibonacci(i + 1), value, `fibonacci(${i + 1})`)
      });
    });

    it('should return sum of two previous members', () => {
      assert.strictEqual(fibonacci(15), fibonacci(14) + fibonacci(13))
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      assert.deepEqual(removeByName(['Ivan', 'Petro', 'Olena'], 'Petro'), ['Ivan', 'Olena'])
      assert.deepEqual(removeByName(['Ivan'], 'Ivan'), [])
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName(['Ivan', 'Petro', 'Olena'], 'Taras'), ['Ivan', 'Petro', 'Olena'])
      assert.deepEqual(removeByName([], 'Taras'), [])
    });

    it('should remove only the first occurrence of element', () => {
      assert.deepEqual(removeByName(['Ivan', 'Petro', 'Ivan'], 'Ivan'), ['Petro', 'Ivan'])
    });

    it('should be case sensitive', () => {
      assert.deepEqual(removeByName(['Ivan', 'Petro'], 'ivan'), ['Ivan', 'Petro'])
    });

    it('should not mutate original array and return a new one', () => {
      const list = ['Ivan', 'Petro', 'Olena'];
      const result = removeByName(list, 'Petro');

      assert.deepEqual(list, ['Ivan', 'Petro', 'Olena'])
      assert.notStrictEqual(result, list)
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it('should return a function', () => {
      assert.isFunction(makeCounter(0))
    });

    it('should start counting from initial value', () => {
      const counter = makeCounter(5);
      assert.strictEqual(counter(), 5)
    });

    it('should increase value by 1 on every call', () => {
      const counter = makeCounter(0);
      assert.strictEqual(counter(), 0)
      assert.strictEqual(counter(), 1)
      assert.strictEqual(counter(), 2)
    });

    it('should create independent counters', () => {
      const first = makeCounter(0);
      const second = makeCounter(10);

      first();
      first();

      assert.strictEqual(first(), 2)
      assert.strictEqual(second(), 10)
    });
  });

  describe('Test suite for testing getAsyncTimerId function', () => {
    it('should return undefined synchronously because timerId is set inside setTimeout', () => {
      // Known defect: the value is assigned after the function has already returned
      assert.isUndefined(getAsyncTimerId(10))
    });
  });

  describe('Test suite for testing asyncMultiply function', function () {
    // asyncMultiply resolves after 3 seconds, default Mocha timeout is 2 seconds
    this.timeout(4000);

    it('should return a Promise', () => {
      const result = asyncMultiply(1);
      assert.instanceOf(result, Promise)
      return result;
    });

    it('should resolve with doubled value (async/await)', async () => {
      const result = await asyncMultiply(5);
      assert.strictEqual(result, 10)
    });

    it('should resolve with doubled value (done callback)', (done) => {
      asyncMultiply(-3)
        .then(result => {
          assert.strictEqual(result, -6)
          done();
        })
        .catch(done);
    });
  });

  describe('Test suite for testing httpGet function', () => {
    // Fake XMLHttpRequest, so tests do not depend on network
    const OriginalXHR = window.XMLHttpRequest;
    let fakeResponse;
    let lastRequest;

    class FakeXHR {
      open(method, url, isAsync) {
        lastRequest = { method, url, isAsync };
      }

      send() {
        setTimeout(() => {
          if (fakeResponse.networkError) {
            this.onerror();
            return;
          }
          this.status = fakeResponse.status;
          this.statusText = fakeResponse.statusText;
          this.response = fakeResponse.response;
          this.onload();
        }, 0);
      }
    }

    beforeEach(() => {
      window.XMLHttpRequest = FakeXHR;
      lastRequest = null;
    });

    afterEach(() => {
      window.XMLHttpRequest = OriginalXHR;
    });

    it('should send async GET request to given url', async () => {
      fakeResponse = { status: 200, statusText: 'OK', response: 'data' };
      await httpGet('/api/users');

      assert.deepEqual(lastRequest, { method: 'GET', url: '/api/users', isAsync: true })
    });

    it('should resolve with response if status is 200', async () => {
      fakeResponse = { status: 200, statusText: 'OK', response: '{"id":1}' };
      const result = await httpGet('/api/users/1');

      assert.strictEqual(result, '{"id":1}')
    });

    it('should reject with error code and status text if status is not 200', async () => {
      fakeResponse = { status: 404, statusText: 'Not Found', response: '' };

      try {
        await httpGet('/api/unknown');
        assert.fail('Promise should be rejected');
      } catch (error) {
        assert.instanceOf(error, Error)
        assert.strictEqual(error.message, 'Not Found')
        assert.strictEqual(error.code, 404)
      }
    });

    it('should reject with "Network Error" on network failure', async () => {
      fakeResponse = { networkError: true };

      try {
        await httpGet('/api/users');
        assert.fail('Promise should be rejected');
      } catch (error) {
        assert.strictEqual(error.message, 'Network Error')
      }
    });
  });
});

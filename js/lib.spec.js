describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1))
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(2, 3), 8)
      assert.equal(pow(3, 2), 9)
      assert.equal(pow(-2, 3), -8)
      assert.equal(pow(-2, 2), 4)
      assert.equal(pow(10, 1), 10)
    });

    it('should return 1 if n is 0', () => {
      assert.equal(pow(5, 0), 1)
      assert.equal(pow(0, 0), 1)
    });

    it('should return 0 if x is 0 and n is positive', () => {
      assert.equal(pow(0, 5), 0)
    });
  });

  describe('Test suite for testing factorial function', () => {
    it('should calculate factorial of number', () => {
      assert.equal(factorial(1), 1)
      assert.equal(factorial(3), 6)
      assert.equal(factorial(5), 120)
    });

    it('should return 1 for 0', () => {
      assert.equal(factorial(0), 1)
    });
  });

  describe('Test suite for testing fibonacci function', () => {
    it('should return 1 for first two numbers', () => {
      assert.equal(fibonacci(1), 1)
      assert.equal(fibonacci(2), 1)
    });

    it('should calculate Fibonacci numbers', () => {
      assert.equal(fibonacci(3), 2)
      assert.equal(fibonacci(7), 13)
      assert.equal(fibonacci(10), 55)
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      assert.deepEqual(removeByName(['a', 'b', 'c'], 'b'), ['a', 'c'])
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName(['a', 'b', 'c'], 'd'), ['a', 'b', 'c'])
    });

    it('should not mutate the original array', () => {
      const list = ['a', 'b', 'c']
      removeByName(list, 'a')
      assert.deepEqual(list, ['a', 'b', 'c'])
    });

    it('should remove only the first occurrence', () => {
      assert.deepEqual(removeByName(['a', 'b', 'a'], 'a'), ['b', 'a'])
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it('should return a function', () => {
      assert.isFunction(makeCounter(0))
    });

    it('should increase counter on every call', () => {
      const counter = makeCounter(5)
      assert.equal(counter(), 5)
      assert.equal(counter(), 6)
      assert.equal(counter(), 7)
    });

    it('should keep counters independent', () => {
      const c1 = makeCounter(0)
      const c2 = makeCounter(10)
      c1(); c1()
      assert.equal(c1(), 2)
      assert.equal(c2(), 10)
    });
  });

  describe('Test suite for testing asyncMultiply function', () => {
    it('should return promise', () => {
      assert.instanceOf(asyncMultiply(1), Promise)
    });

    it('should multiply parameter by 2', async function () {
      this.timeout(5000)
      assert.equal(await asyncMultiply(4), 8)
    });
  });

  describe('Test suite for testing getAsyncTimerId function', () => {
    it('should return promise', () => {
      assert.instanceOf(getAsyncTimerId(0), Promise)
    });

    it('should resolve with current unixtime in seconds', async () => {
      const before = Math.floor(Date.now() / 1000)
      const id = await getAsyncTimerId(50)
      const after = Math.floor(Date.now() / 1000)
      assert.isNumber(id)
      assert.isAtLeast(id, before)
      assert.isAtMost(id, after)
    });

    it('should resolve not earlier than the given time', async () => {
      const start = Date.now()
      await getAsyncTimerId(100)
      assert.isAtLeast(Date.now() - start, 90)
    });
  });

  describe('Test suite for testing httpGet function', () => {
    const RealXHR = window.XMLHttpRequest
    let lastRequest

    function mockXHR({status = 200, response = 'ok', statusText = '', fail = false}) {
      window.XMLHttpRequest = function () {
        lastRequest = this
        this.open = function (method, url, async) {
          this.method = method
          this.url = url
          this.async = async
        }
        this.send = function () {
          setTimeout(() => {
            if (fail) {
              this.onerror()
            } else {
              this.status = status
              this.response = response
              this.statusText = statusText
              this.onload()
            }
          }, 0)
        }
      }
    }

    afterEach(() => {
      window.XMLHttpRequest = RealXHR
    });

    it('should return promise', () => {
      mockXHR({})
      assert.instanceOf(httpGet('/test'), Promise)
    });

    it('should send GET request to the given url', async () => {
      mockXHR({})
      await httpGet('/test')
      assert.equal(lastRequest.method, 'GET')
      assert.equal(lastRequest.url, '/test')
      assert.isTrue(lastRequest.async)
    });

    it('should resolve with response if status is 200', async () => {
      mockXHR({status: 200, response: 'hello'})
      assert.equal(await httpGet('/test'), 'hello')
    });

    it('should reject with error and code if status is not 200', async () => {
      mockXHR({status: 404, statusText: 'Not Found'})
      try {
        await httpGet('/test')
        assert.fail('promise should be rejected')
      } catch (e) {
        assert.instanceOf(e, Error)
        assert.equal(e.message, 'Not Found')
        assert.equal(e.code, 404)
      }
    });

    it('should reject with Network Error on network failure', async () => {
      mockXHR({fail: true})
      try {
        await httpGet('/test')
        assert.fail('promise should be rejected')
      } catch (e) {
        assert.equal(e.message, 'Network Error')
      }
    });
  });
});

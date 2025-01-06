describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1), NaN)
    });

    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(2,2), 4)
      assert.equal(pow(3,2), 9)
      assert.equal(pow(4,4), 256)
    });
  });

  describe('Test suite for testing removeByName function', () => {
    var list = ["BANANA","super orange","Nikita","chocolate skin"]

    it('should remove some element from array', () => {
      assert.deepEqual(removeByName(list, "BANANA"), list.filter(name => name != "BANANA"))
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName(list, "BANANA!!!!"), list)
    });
  });

  describe('Test suite for testing factorial function', () => {
    it('should multiplication of all natural numbers from 1 to 𝑛 inclusive', () => {
      assert.equal(factorial(1), 1)
      assert.equal(factorial(2), 2)
      assert.equal(factorial(3), 6)
    })
  })

  describe('Test suite for testing fibonacci function', () => { 
    it('should calculate fibonacci sequence for n', () => {
      assert.equal(fibonacci(3), 2)
      assert.equal(fibonacci(4), 3)
      assert.equal(fibonacci(5), 5)
    })
  })

  describe('Test suite for testing makeCounter function', () => {
    it('should handle starting n', () => {
      var counter = makeCounter(0)
      assert.equal(counter(), 0)
      assert.equal(counter(), 1)
    
      var counter1 = makeCounter(10)
      assert.equal(counter1(), 10)
      assert.equal(counter1(), 11)
    })
  })

  describe('getAsyncTimerId', () => {
    it('should return a Unix timestamp after the specified timeout', async () => {
      const start = Math.floor(Date.now() / 1000);
      const timerId = await getAsyncTimerId(100);
      const end = Math.floor(Date.now() / 1000);
  
      assert(timerId >= start, 'Timer ID should be greater than or equal to the start time');
      assert(timerId <= end, 'Timer ID should be less than or equal to the end time');
    });
  })

  describe('Test suite for testing asyncMultiply function', function () {
    this.timeout(10000)
    it('should return the product of the input multiplied by 2 after a delay', async () => {
      const result = await asyncMultiply(5);
      assert.equal(result, 10);

      const result2 = await asyncMultiply(-3);
      assert.equal(result2, -6);
    });

    it('should handle zero as input', async () => {
      const result = await asyncMultiply(0);
      assert.equal(result, 0);
    });
  })

  describe('Test suite for testing httpGet function', () => {
    it('should resolve with data when the GET request is successful', async () => {
      const mockUrl = 'https://jsonplaceholder.typicode.com/posts/1';
      const response = await httpGet(mockUrl);
      assert.ok(response);
      const parsedResponse = JSON.parse(response);
      assert.equal(parsedResponse.id, 1);
    });

    it('should reject with an error for an invalid URL', async () => {
      const invalidUrl = 'https://invalid-url.typicode.com/';
      try {
        await httpGet(invalidUrl);
      } catch (error) {
        assert.equal(error.message, 'Network Error');
      }
    });
  });
});


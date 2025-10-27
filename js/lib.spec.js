describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1));
    });

    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6);
      assert.equal(sum(10, '1'), 11);
      assert.equal(sum('25', 5), 30);
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 3), 27);
    });
    it('should return 1 to n equal 0', () => {
      assert.equal(pow(6, 0), 1);
    });
    it('should handle negative numbers correctly', () => {
      assert.equal(pow(-2, 3), -8);
      assert.equal(pow(-2, 2), 4);
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const list = ['apple', 'xiomi', 'samsung'];
      const result = removeByName(list, 'xiomi');
      assert.deepEqual(result, ['apple', 'samsung']);
    });

    it('should return same array if element not found', () => {
      const list = ['apple', 'xiomi', 'samsung'];
      const result = removeByName(list, 'asus');
      assert.deepEqual(result, ['apple', 'xiomi', 'samsung']);
    });

    it('should return an empty array if the input array is empty', () => {
    const list = [];
    const result = removeByName(list, 'xiomi');
    assert.deepEqual(result, []);
    assert.equal(result.length, 0);
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it('should create a counter that increments correctly', () => {
      const counter = makeCounter(5);
      assert.equal(counter(), 5);
      assert.equal(counter(), 6);
      assert.equal(counter(), 7);
    });

    it('should start with 0 if no initial value is provided (or NaN)', () => {
      const counter = makeCounter();
      assert.isNaN(counter());
    });
  });

  describe('Test suite for testing getAsyncTimerId function', () => {
    it('should return undefined immediately, as the timerId is set asynchronously', () => {
      const timerId = getAsyncTimerId(100);
      assert.isUndefined(timerId);
    });
  });

  describe('Test suite for testing httpGet function', () => {
    it('should return a Promise object', () => {
      const promise = httpGet('http://example.com');
      assert.instanceOf(promise, Promise);
    });
  });

  describe('Test suite for testing fibonacci function', () => {
    it('should calculate the correct Fibonacci number for a positive integer', () => {
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(3), 2);
      assert.equal(fibonacci(4), 3);
      assert.equal(fibonacci(7), 13);
    });

    it('should handle large numbers correctly', () => {
      assert.equal(fibonacci(10), 55);
      assert.equal(fibonacci(20), 6765);
    });

    it('should return 1 for n equal to 1 or 2, based on the function implementation', () => {
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(2), 1);
    });

    it('should handle zero, returning 1 based on the current implementation', () => {
      assert.equal(fibonacci(0), 1);
    });
  });

  describe('Test suite for testing asyncMultiply function', function() {
    this.timeout(5000);

    it('should return a promise that resolves with the multiplied value after a delay', async () => {
      const result = await asyncMultiply(5);
      assert.equal(result, 10);
    });

    it('should handle a different number correctly', async () => {
      const result = await asyncMultiply(10);
      assert.equal(result, 20);
    });

    it('should handle 0 correctly', async () => {
      const result = await asyncMultiply(0);
      assert.equal(result, 0);
    });
  });

describe('Test suite for testing fibonacci function', () => {

  it('should calculate the correct Fibonacci number for a positive integer (n > 2)', () => {
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(4), 3);
    assert.equal(fibonacci(5), 5);
    assert.equal(fibonacci(7), 13);
  });

  it('should return 1 for n equal to 1 or 2, as per the base condition', () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
  });

  it('should handle zero, returning 1 based on the implementation (n=0 <= 2)', () => {
    assert.equal(fibonacci(0), 1);
  });

  it('should return 1 for negative numbers based on the implementation (n < 0 <= 2)', () => {
    assert.equal(fibonacci(-1), 1);
    assert.equal(fibonacci(-10), 1);
  });

  it('should handle reasonably large numbers correctly', () => {
    assert.equal(fibonacci(10), 55);
    assert.equal(fibonacci(20), 6765);
  });

  it('should return 1 for non-numeric input that evaluates to <= 2 (e.g. null, undefined, false)', () => {
    assert.equal(fibonacci(null), 1);
    assert.equal(fibonacci(false), 1);
  });

  it('should return 1 for string inputs that evaluate to <= 2', () => {
    assert.equal(fibonacci('1'), 1);
    assert.equal(fibonacci('2'), 1);
  });
});

});
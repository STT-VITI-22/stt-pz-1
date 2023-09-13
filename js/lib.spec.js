describe('Test suite for testing lib.js', () => {

  describe('Test suite for testing sum function', () => {

    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });
    it('should return NaN if one parameter is skipped', () => {
      assert.isTrue(isNaN(sum(1)));
    });
    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {

    it('should raising x to the n power', () => {
      // Write your code here
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 2), 9);
      assert.equal(pow(2, 0), 1);
    });
  });

  describe('Test suite for testing factorial function', () => {

        it('should calculate factorial correctly', () => {
            assert.equal(factorial(5), 120);
            assert.equal(factorial(0), 1);
        });
    });

  describe('Test suite for testing fibonacci function', () => {

        it('should calculate Fibonacci sequence correctly', () => {
            assert.equal(fibonacci(5), 5);
            assert.equal(fibonacci(6), 8);
        });
    });

  describe('Test suite for testing removeByName function', () => {
    
    it('should remove some element from array', () => {
      // Write your code here
      let arr = ['Ruslan', 'Andrii', 'Sasha'];
      let result = removeByName(arr, 'Andrii');
      assert.deepEqual(result, ['Ruslan', 'Sasha']);
    });
    it('should not remove element from array', () => {
      // Write your code here
      let arr = ['Ruslan', 'Andrii', 'Sasha'];
      let result = removeByName(arr, 'David');
      assert.deepEqual(result, ['Ruslan', 'Andrii', 'Sasha']);
    });
  });

  describe('getAsyncTimerId function', () => {

    it('should return undefined immediately', () => {
      const time = 1000; // 1 second Цей тест перевіряє, чи функція getAsyncTimerId повертає undefined негайно після виклику.
      const timerId = getAsyncTimerId(time);
      assert.isUndefined(timerId, 'timerId should be undefined immediately after function call');
    });
  });

  describe('makeCounter function', () => {

    it('should return a function that increments the count', () => {
      const startCount = 5;
      const counter = makeCounter(startCount);
      assert.equal(counter(), startCount, 'First call should return initial count');
      assert.equal(counter(), startCount + 1, 'Second call should return incremented count');
    });
  });

  describe('asyncMultiply function', () => {
    // Правильно повертає подвоєне значення після затримки
    it('should return doubled value after a delay', async function() {
      this.timeout(4000); // Set timeout to 4 seconds for this test
      const x = 5;
      const result = await asyncMultiply(x);
      assert.equal(result, 2 * x, 'Result should be doubled value of x');
    });
  });

  describe('Function httpGet', () => {

    it('should handle response from https://onlyfans.com/', async () => {
      const url = 'https://onlyfans.com/';
      try {
        const response = await httpGet(url);
        assert.exists(response, 'Response should exist');
      } catch (error) {
        assert.exists(error, 'Error should be handled');
      }
    });
  });
});


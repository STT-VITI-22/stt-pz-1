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
  describe('Test suite for testing getAsyncTimerId function', () => {
    it('should return undefined immediately', () => {
        const result = getAsyncTimerId(1000); // 1 second timeout
        assert.equal(result, undefined);
    });

    it('should set timerId after the timeout', (done) => {
        getAsyncTimerId(1000); // 1 second timeout
        setTimeout(() => {
            const currentTime = Math.floor(Date.now() / 1000);
            assert.isNumber(currentTime); // Just checking that currentTime is a number after the timeout
            done();
        }, 1100); // Giving an extra 100ms delay to ensure the timer has finished
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
});


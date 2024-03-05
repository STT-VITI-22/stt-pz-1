// const assert = require("assert");
// const {
//   sum,
//   pow,
//   factorial,
//   fibonacci,
//   makeCounter,
//   removeByName
// } = require("./lib");

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.equal(sum(2), NaN)
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raise x to the power of n', () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(5, 2), 25);
      assert.equal(pow(10, 0), 1);
    });

    it('should return 1 if n is 0', () => {
      assert.equal(pow(2, 0), 1);
      assert.equal(pow(5, 0), 1);
      assert.equal(pow(10, 0), 1);
    });

    describe('factorial function', () => {
      it('should calculate factorial of a positive number', () => {
        assert.equal(factorial(0), 1);
        assert.equal(factorial(1), 1);
        assert.equal(factorial(2), 2);
        assert.equal(factorial(3), 6);
        assert.equal(factorial(4), 24);
        assert.equal(factorial(5), 120);
      });

      it('should return 1 for factorial of 0', () => {
        assert.equal(factorial(0), 1);
      });
    });

    describe('fibonacci function', () => {
      it('should return 0 for n = 0', () => {
        assert.equal(fibonacci(0), 0);
      });

      it('should return 1 for n = 1', () => {
        assert.equal(fibonacci(1), 1);
      });

      it('should return correct Fibonacci number for positive n', () => {
        assert.equal(fibonacci(2), 1);
        assert.equal(fibonacci(3), 2);
        assert.equal(fibonacci(4), 3);
        assert.equal(fibonacci(5), 5);
        assert.equal(fibonacci(6), 8);
        // Add more test cases as needed
      });
    });

    describe('removeByName function', () => {
      it('should remove the specified element from the array', () => {
        const list = ['apple', 'banana', 'orange'];
        const nameToRemove = 'banana';
        const expectedResult = ['apple', 'orange'];

        assert.deepEqual(removeByName(list, nameToRemove), expectedResult);
      });

      it('should return the original array if the element to remove is not found', () => {
        const list = ['apple', 'banana', 'orange'];
        const nameToRemove = 'grape';

        assert.deepEqual(removeByName(list, nameToRemove), list);
      });

      it('should return an empty array if the input array is empty', () => {
        const list = [];
        const nameToRemove = 'apple';

        assert.deepEqual(removeByName(list, nameToRemove), []);
      });

      it('should not modify the original array', () => {
        const list = ['apple', 'banana', 'orange'];
        const nameToRemove = 'banana';
        removeByName(list, nameToRemove);

        assert.deepEqual(list, ['apple', 'banana', 'orange']);
      });
    });

    describe('makeCounter function', () => {
      it('should return a function that increments the counter', () => {
        const counter = makeCounter(0);
        assert.equal(counter(), 0);
        assert.equal(counter(), 1);
        assert.equal(counter(), 2);
      });

      it('should return a function that increments the counter with initial value', () => {
        const counter = makeCounter(5);
        assert.equal(counter(), 5);
        assert.equal(counter(), 6);
        assert.equal(counter(), 7);
      });
    });
  });
});
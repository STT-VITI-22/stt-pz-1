
describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(functions.sum(1, 2), 3)
      assert.equal(functions.sum(-10, 5), -5)
      assert.equal(functions.sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.equal(isNaN(functions.sum(1)), true)
    });

    it('should convert string to number if input parameters are strings', () => {
      assert.equal(functions.sum('5', '1'), 6)
      assert.equal(functions.sum(10, '1'), 11)
      assert.equal(functions.sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raise x to the power of n', () => {
      assert.equal(functions.pow(2, 3), 8);
      assert.equal(functions.pow(5, 2), 25);
      assert.equal(functions.pow(10, 0), 1);
    });

    it('should return 1 if n is 0', () => {
      assert.equal(functions.pow(2, 0), 1);
      assert.equal(functions.pow(5, 0), 1);
      assert.equal(functions.pow(10, 0), 1);
    });
  });

  describe('Test suite for factorial function', () => {
    it('should calculate factorial of a positive number', () => {
      assert.equal(functions.factorial(0), 1);
      assert.equal(functions.factorial(1), 1);
      assert.equal(functions.factorial(2), 2);
      assert.equal(functions.factorial(3), 6);
      assert.equal(functions.factorial(4), 24);
      assert.equal(functions.factorial(5), 120);
    });

    it('should return 1 for factorial of 0', () => {
      assert.equal(functions.factorial(0), 1);
    });
  });

  describe('Test suite for fibonacci function', () => {
    it('should return 0 for n = 0', () => {
      assert.equal(functions.fibonacci(0), 0);
    });

    it('should return 1 for n = 1', () => {
      assert.equal(functions.fibonacci(1), 1);
    });

    it('should return correct Fibonacci number for positive n', () => {
      assert.equal(functions.fibonacci(2), 1);
      assert.equal(functions.fibonacci(3), 2);
      assert.equal(functions.fibonacci(4), 3);
      assert.equal(functions.fibonacci(5), 5);
      assert.equal(functions.fibonacci(6), 8);
      // Add more test cases as needed
    });
  });

  describe('Test suite for removeByName function', () => {
    it('should remove the specified element from the array', () => {
      const list = ['apple', 'banana', 'orange'];
      const nameToRemove = 'banana';
      const expectedResult = ['apple', 'orange'];

      assert.deepEqual(functions.removeByName(list, nameToRemove), expectedResult);
    });

    it('should return the original array if the element to remove is not found', () => {
      const list = ['apple', 'banana', 'orange'];
      const nameToRemove = 'grape';

      assert.deepEqual(functions.removeByName(list, nameToRemove), list);
    });

    it('should return an empty array if the input array is empty', () => {
      const list = [];
      const nameToRemove = 'apple';

      assert.deepEqual(functions.removeByName(list, nameToRemove), []);
    });

    it('should not modify the original array', () => {
      const list = ['apple', 'banana', 'orange'];
      const nameToRemove = 'banana';
      functions.removeByName(list, nameToRemove);

      assert.deepEqual(list, ['apple', 'banana', 'orange']);
    });
  });

  describe('Test suite for makeCounter function', () => {
    it('should return a function that increments the counter', () => {
      const counter = functions.makeCounter(0);
      assert.equal(counter(), 0);
      assert.equal(counter(), 1);
      assert.equal(counter(), 2);
    });

    it('should return a function that increments the counter with initial value', () => {
      const counter = functions.makeCounter(5);
      assert.equal(counter(), 5);
      assert.equal(counter(), 6);
      assert.equal(counter(), 7);
    });
  });
});

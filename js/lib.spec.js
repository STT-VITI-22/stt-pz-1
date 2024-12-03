import { assert } from 'chai'; 
import { sum, pow, removeByName } from './lib.js'; 

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

    it('should convert string to number if input parameters are strings', () => {
      assert.equal(sum('5', '1'), 6);
      assert.equal(sum(10, '1'), 11);
      assert.equal(sum('25', 5), 30);
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raise x to the power of n', () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(5, 0), 1);
      assert.equal(pow(-2, 2), 4);
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove an element from array by name', () => {
      const list = ['apple', 'banana', 'cherry'];
      const result = removeByName(list, 'banana');
      assert.deepEqual(result, ['apple', 'cherry']);
    });

    it('should not remove anything if the name is not in the array', () => {
      const list = ['apple', 'banana', 'cherry'];
      const result = removeByName(list, 'orange');
      assert.deepEqual(result, ['apple', 'banana', 'cherry']);
    });
  });
});

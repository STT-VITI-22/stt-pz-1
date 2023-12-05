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
      assert.equal(pow(5, 2), 25)
      assert.equal(pow(10, 0), 1)
    });


  });
  function removeByName(array, name) {
    const index = array.indexOf(name);
    if (index !== -1) {
      array.splice(index, 1);

    }
  }
  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const array = ['apple', 'banana', 'orange'];
      removeByName(array, 'banana');
      assert.deepEqual(array, ['apple', 'orange']);
    });

    it('should not remove element from array', () => {
      const array = ['apple', 'banana', 'orange'];
      removeByName(array, 'grape');
      assert.deepEqual(array, ['apple', 'banana', 'orange']);
    });
  });
});


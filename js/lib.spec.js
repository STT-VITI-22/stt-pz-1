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
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(2, 0), 1);
        assert.equal(pow(3, 2), 9);
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
        let list = ["John", "Jane", "Doe"];
        assert.deepEqual(removeByName(list, "Jane"), ["John", "Doe"]);
    });

    it('should not remove element from array', () => {
        let list = ["John", "Jane", "Doe"];
        assert.deepEqual(removeByName(list, "Smith"), ["John", "Jane", "Doe"]);
    });
  });
});

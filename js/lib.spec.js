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
});


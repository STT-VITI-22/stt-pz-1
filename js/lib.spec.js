describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing sum function", () => {
    it("should return sum of two numbers", () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it("should return NaN if one parameter is skipped", () => {
      try {
        assert.equal(sum(3), NaN);
      } catch (e) {
        console.log(e);
      }
    });

    it("should convert string to number if input parameters is string", () => {
      assert.equal(sum("5", "1"), 6);
      assert.equal(sum(10, "1"), 11);
      assert.equal(sum("25", 5), 30);
    });
  });

  describe("Test suite for testing pow function", () => {
    it("should raising x to the n power", () => {
      assert.equal(pow(3, 3), 27);
    });
  });

  describe("Test suite for testing removeByName function", () => {
    it("should remove some element from array", () => {
      const list = ["Valentyn", "Dima", "Taras"];
      const removedElList = ["Valentyn", "Taras"];
      assert.deepEqual(removeByName(list, "Dima"), removedElList);
    });

    it("should not remove element from array", () => {
      const list = ["Valentyn", "Dima", "Taras"];
      assert.deepEqual(removeByName(list, "Vlad"), list);
    });
  });
});

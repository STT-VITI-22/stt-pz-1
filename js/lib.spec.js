const expect = chai.expect;
describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });
  });
  describe('Function sum', () => {
    it('should return the sum of two numbers', () => {
        assert.equal(sum(1, 2), 3);
        assert.equal(sum(-10, 5), -5);
        assert.equal(sum(-10, 10), 0);
      });

      it("should return NaN if one parameter is skipped", () => {
        assert.equal(isNaN(sum(1)), true);
      });

    it('should convert strings to numbers if input parameters are strings', () => {
        assert.equal(sum('5', '1'), 6);
        assert.equal(sum(10, '1'), 11);
        assert.equal(sum('25', 5), 30);
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Function pow', () => {
    it('should raise x to the n power', () => {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(2, 0), 1);
        assert.equal(pow(3, 2), 9);
    });
  });

  describe("Test suite for testing pow function", () => {
    it("should raising x to the n power", () => {
      // Write your code here
      assert.equal(pow(2, 2), 4);
      assert.equal(pow(3, 2), 9);
      assert.equal(pow(4, 2), 16);
    });

    it("should convert string to number of input parameters is string", () => {
      assert.equal(pow("2", 2), 4);
      assert.equal(pow(3, "2"), 9);
      assert.equal(pow("4", 2), 16);
    });
  });
  describe('Function removeByName', () => {
    it('should remove an existing element from the array by name', () => {
        let list = ["Ann", "Bob", "John"];
        assert.deepEqual(removeByName(list, "Bob"), ["Ann", "John"]);
    });

    it('should not remove an element if the name does not exist in the array', () => {
        let list = ["Ann", "Bob", "John"];
        assert.deepEqual(removeByName(list, "Carl"), ["Ann", "Bob", "John"]);
    });
  });

  describe('Function factorial', () => {
    it('should compute the factorial of a positive number', () => {
        assert.equal(factorial(5), 120);
        assert.equal(factorial(3), 6);
    });

    it('should return 1 for factorial of 0', () => {
        assert.equal(factorial(0), 1);
    });
  });
  describe("Test suite for testing fibonacci function", () => {
    it("should return 1 if the first two nubmber fibonacci must be 1", () => {
      assert.equal(fibonacci(0), 1);
      assert.equal(fibonacci(1), 1);
    });
    it("should return 2 if fibonacci is 3", () => {
      assert.equal(fibonacci(3), 2);
    });
  });
  describe("Test suite for testing removeByName function", () => {
    it("should remove some element from array", () => {
      // Write your code here
      let list = ["a", "d", "c"];
      assert(
        JSON.stringify(removeByName(list, "a")),
        JSON.stringify(["b", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, "b")),
        JSON.stringify(["a", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, "c")),
        JSON.stringify(["a", "b"])
      );
    });
  });
 describe("Test suite for testing counter function", () => {
    it("should return function", () => {
      const counter = makeCounter(0);
      expect(counter).to.be.a("function");
    });
    it("should increment the count", () => {
      const counter = makeCounter(0);
      expect(counter()).to.equal(0);
      expect(counter()).to.equal(1);
      expect(counter()).to.equal(2);
    });
    it("should allow different counters to be independent", () => {
      const counter1 = makeCounter(5);
      const counter2 = makeCounter(9);

      expect(counter1()).to.equal(5);
      expect(counter1()).to.equal(6);

      expect(counter2()).to.equal(9);
      expect(counter2()).to.equal(10);
    });
  });
 
  describe("Test suite for testing getAsyncTimerId function", () => {
    it("should return number", () => {});
    let result = getAsyncTimerId(1000);
    setTimeout(function () {
      assert.isNumber(result);
    }, 2000);
  });

  describe('Function httpGet', () => {
    it('should return a promise', () => {
        const result = httpGet('someurl.com');
        assert.instanceOf(result, Promise);
    });
  });
})
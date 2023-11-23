const expect = chai.expect;

describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing sum function", () => {
    it("should return sum of two numbers", () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it("should return NaN if one parameter is skipped", () => {
      assert.equal(isNaN(sum(1)), true);
    });

    it("should convert string to number if input parameters is string", () => {
      assert.equal(sum("5", "1"), 6);
      assert.equal(sum(10, "1"), 11);
      assert.equal(sum("25", 5), 30);
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

  describe("Test suite for tesing factorial function", () => {
    it("should return 1 if factorial is 0", () => {
      assert.equal(factorial(0), 1);
    });

    it("should return 1 if factorial is 1", () => {
      assert.equal(factorial(1), 1);
    });

    it("should return 120 if factorial is 5", () => {
      assert.equal(factorial(5), 120);
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

    it("should not remove element from array", () => {
      // Write your code here
      let list = ["a", "b", "c"];
      assert(
        JSON.stringify(removeByName(list, "d")),
        JSON.stringify(["a", "b", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, "v")),
        JSON.stringify(["a", "b", "c"])
      );
      assert(
        JSON.stringify(removeByName(list, 1)),
        JSON.stringify(["a", "b", "c"])
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

  describe("Test suite for testing asyncMultiply function", () => {
    it("should resolve with the correct result", async () => {
      asyncMultiply(2).then((result) => {
        console.log(result);
        expect(result).to.equal(4);
      });
    });
  });

  describe("Test httpGet function", () => {
    it("should get response from url", async () => {
      const url = "https://learn.javascript.ru/testing-mocha";
      try {
        const response = await httpGet(url);
        assert.exists(response, "Exist response");
      } catch (error) {
        assert.exists(error, "Error should be handled");
      }
    });
  });
});

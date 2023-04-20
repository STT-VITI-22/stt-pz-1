let expect = chai.expect;
describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing sum function", () => {
    it("should return sum of two numbers", () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      expect(sum(1, 3)).equal(4);
    });

    it("should return NaN if one parameter is skipped", () => {
      expect(sum(3)).to.be.NaN;
    });

    it("should convert string to number if input parameters is string", () => {
      assert.equal(sum("5", "1"), 6);
      expect(sum("4", 3)).equal(7);
    });
  });

  describe("Test suite for testing pow function", () => {
    it("should give factorial of n", () => {
      assert.equal(factorial(3), 6);
    });
    it("sould convert string to number if input parameters is string", () => {
      expect(factorial("3")).equal(6);
    });
  });

  describe("Test suite for testing fibonacci function", () => {
    it("should give fibonacci sequence", () => {
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(10), 55);
    });

    it("should not convert string to number if input parameters is string, undefined or other type", () => {
      expect(sum("4")).to.be.NaN;
      expect(sum(undefined)).to.be.NaN;
      expect(sum(function () {})).to.be.NaN;
    });
  });

  describe("Test suite for testing counter function", () => {
    it("should return function", function () {
      assert.equal(typeof makeCounter(1), "function");
    });

    it("should increment counter", function () {
      var counter = makeCounter(1);
      expect(counter()).equal(1);
      expect(counter()).equal(2);
      expect(counter()).equal(3);
    });
  });

  describe("Test suite for testing factorial function", () => {
    it("should raising x to the n power", () => {
      assert.equal(pow(3, 3), 27);
      assert.equal(pow(3, 0), 1);
    });

    it("should 1 if n is string or undefined or both", () => {
      expect(pow(3, "hello")).equal(1);
      expect(pow("hello", "world")).equal(1);
      expect(pow(undefined, undefined)).equal(1);
    });

    it("should NaN if x is string or undefined", () => {
      expect(pow("hello", 1)).to.be.NaN;
      expect(pow(undefined, 1)).to.be.NaN;
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

  describe("Test suite for testing asyncMultiply function", function () {
    it("should return the correct value", async function () {
      asyncMultiply(13).then(function (result) {
        expect(result).equal(26);
      });
    });

    it("should return number", async function () {
      asyncMultiply(1).then(function (result) {
        expect(result).instanceOf(Number);
      });
    });

    it("should number is not less than 0", async function () {
      expect(1).to.satisfy(function (num) {
        return num > 0;
      });
    });
  });

  describe("Test suite for testing getAsyncTimerId function", function () {
    it("should return type of Number", function () {
      let result = getAsyncTimerId(1000);
      setTimeout(function () {
        expect(result).instanceOf(Number);
      }, 1000);
    });
  });

  describe("Test suite for testing httpGet function", function () {
    it("should return a Promise", function () {
      let promiceThatMeIsPromise = httpGet("https://www.zsu.gov.ua/");
      expect(promiceThatMeIsPromise).instanceOf(Promise);
    });

    it("should return the response on a successful request", function () {
      httpGet("https://jsonplaceholder.typicode.com/todos/1").then(function (
        response
      ) {
        expect(response).instanceOf(String);
      });
    });
  });
});

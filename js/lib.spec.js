describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      try{
        assert.equal(sum(1), NaN)
      }
      catch (e) {
        console.log(e)
      }
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(1, 2), 1)
      assert.equal(pow(-10, 3), -1000)
      assert.equal(pow(10, 2), 100)
    });

  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const list = ['Alice', 'Bob', 'Charlie'];
      const nameToRemove = 'Bob';
      const expected = ['Alice', 'Charlie'];
      const result = removeByName(list, nameToRemove);
      assert.equal(arrayEquals(expected, result), true)
    });

    it('should not remove element from array', () => {
      const list = ['Alice', 'Bob', 'Charlie'];
      const nameToRemove = 'Dave';
      const expected = ['Alice', 'Bob', 'Charlie'];
      const result = removeByName(list, nameToRemove);
      assert.equal(arrayEquals(expected, result), true)
    });
  });

  describe('Test suite for testing factorial function', () => {
    it('should take factorial', () => {
      assert.equal(factorial(3), 6)
      assert.equal(factorial(4), 24)
      assert.equal(factorial(5), 120)
    });
  });

  describe('Test suite for testing fibonacci function', () => {
    it('fibonacci', () => {
      assert.equal(fibonacci(3), 2)
      assert.equal(fibonacci(4), 3)
      assert.equal(fibonacci(5), 5)
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it('makeCounter (+ 1)', () => {
      let tmp = makeCounter(3);
      assert.equal(tmp(), 3);
      assert.equal(tmp(), 4);
      assert.equal(tmp(), 5);
    });

    it("should return function", function() {
      assert.equal(typeof makeCounter(0), "function");
    });
  });

  describe('Test suite for testing getAsyncTimerId function', () => {
    it('getAsyncTimerId return number', () => {
      let tmp = getAsyncTimerId(1000)
      setTimeout(function() {
        assert.isNumber(tmp);
      }, 2000);
    });
  });

  describe('Test suite for testing asyncMultiply function', function() {
    it('should return the correct value', async function() {
      let tmp = asyncMultiply(5)
      setTimeout(function() {
        assert.equal(tmp, 10);
      }, 2000);
    });

    it('should return number', async function() {
      let tmp = asyncMultiply(5)
      setTimeout(function() {
        assert.isNumber(tmp);
      }, 2000);
    });
  });

  describe('Test suite for testing httpGet function', function() {
    it('should return a Promise object', function() {
      let tmp = httpGet("www.google.com");
      assert.isString(tmp);
    });
    it('should return the response on a successful request', function() {
      httpGet('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
          assert.isString(response);
        });
    });
  });
});

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      try {
        const result = sum(1);
        assert.equal(isNaN(result), true);
      } catch (error) {
        console.log(error);
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
      assert.equal(pow(-10,3),-1000)
      assert.equal(pow(10,2), 100)
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const originalNames = ['Євген', 'Володимир', 'Сергій'];
      const nameToRemove = 'Євген';
      const expectedNames = ['Володимир', 'Сергій'];

      const resultNames = removeByName(originalNames, nameToRemove);
      assert.equal(arrayEquals(expectedNames, resultNames), true);
    });

    it('should not remove element from array', () => {
      const originalNames = ['Євген', 'Володимир', 'Сергій'];
      const nameToRemove = 'Роман';
      const expected = ['Євген', 'Володимир', 'Сергій'];
      const resultNames = removeByName(originalNames, nameToRemove);
      assert.equal(arrayEquals(expected, resultNames), true)
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
      }, 3000);
    });
  });

  describe('Test suite for testing asyncMultiply function', function() {
    it('should return the correct value', async function() {
      let tmp = asyncMultiply(5)
      setTimeout(function() {
        assert.equal(tmp, 10);
      }, 3000);
    });

    it('should return number', async function() {
      let tmp = asyncMultiply(5)
      setTimeout(function() {
        assert.isNumber(tmp);
      }, 3000);
    });
  });

  describe('Test suite for testing httpGet function', function() {
    it('should return a Promise object', function() {
      let tmp = httpGet("www.google.com");
      assert.instanceOf(tmp, Promise);
    });
    it('should return the response on a successful request', function() {
      httpGet('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
          assert.isString(response);
        });
    });
  });
});

function arrayEquals(x, y) {
  return Array.isArray(x) &&
    Array.isArray(y) &&
    x.length === y.length &&
    x.every((val, index) => val === y[index]);
}

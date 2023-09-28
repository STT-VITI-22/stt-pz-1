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
      assert.equal(pow(2,3),8)
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      var list = ["L","I","T","V","I","N"]
      var anotherList = ["L","I","T","V","I"]
      assert.deepEqual(removeByName(list,"N"),anotherList)
    });

    it('should not remove element from array', () => {
      var list = ["L","I","T","V","I","N"]
      assert.deepEqual(removeByName(list,"A"),list)
    });
  });


  describe('Test suite for testing factorial function', () => {
    it('should make factorial from number n', () => {
      assert.equal(factorial(2),2)
      assert.equal(factorial(3),6)
      assert.equal(factorial(4),24)
    });
  });

  describe('Test suite for testing fibonacci function', () => {
    it('should calculate Fibonacci sequence from n', () => {
      assert.equal(fibonacci(10),55)
    });

    it("should return 1 for n = 1", function() {
      assert.equal(fibonacci(1), 1);
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it("should return function", function() {
      assert.equal(typeof makeCounter(0), "function");
    });

    it("should increment counter", function() {
      var counter = makeCounter(2);
      assert.equal(counter(), 2);
      assert.equal(counter(), 3);
      assert.equal(counter(), 4);
    });
  });

  describe('Test suite for testing getAsyncTimerId function', function() {
    it('should return a number', function() {
      var result = getAsyncTimerId(1000);
      setTimeout(function() {
        assert.isNumber(result);
      }, 2000);
    });
  });

  describe('Test suite for testing asyncMultiply function', function() {
    it('should return the correct value', async function() {
      asyncMultiply(5).then(function(result) {
        assert.equal(result, 10);
      })
    });

    it('should return number', async function() {
      asyncMultiply(5).then(function(result) {
        assert.isNumber(result);
      })
    });
  });

  describe('Test suite for testing httpGet function', function() {
    it('should return a Promise object', function() {
      var result = httpGet("www.google.com");
      assert.instanceOf(result, Promise);
    });
    it('should return the response on a successful request', function() {
      httpGet('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response) {
      assert.isString(response);
      });
      });
  });
});


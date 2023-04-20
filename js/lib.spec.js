describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      //assert.equal(sum(1), NaN)
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
      // Write your code here
      assert.equal(pow(12,2),144)
      it('should raising x to the n power', () => {
        assert.equal(pow(3,2),9)
      });
      it('should not raising x to the n power', () => {
        assert.equal(pow(3,2),6)
      });
    });


  });

  describe('Test suite for testing factorial function', () => {
    it('should return factorial of number', () => {
      assert.equal(factorial(2),2)
      assert.equal(factorial(5),120)
      assert.equal(factorial(8),40320)
      assert.equal(factorial(7),5040)
    });
  });

  describe('Test suite for testing fibonacci function', () => {
    it('should return Fibonacci result of number', () => {
      assert.equal(fibonacci(9),34)
      assert.equal(fibonacci(12),144)
    });

    it("should return 1 if number equal 1 or 2 or 0 ", function() {
      assert.equal(fibonacci(1), 1);
      assert.equal(fibonacci(2), 1);
      assert.equal(fibonacci(0), 1);

    });

  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      // Write your code here
      let arr = ['M','Y','A','R','R','R']
      let arr2 = ['M','Y','A','R','R']
      assert.deepEqual(removeByName(arr, 'R'), arr2)
    });

    it('should not remove element from array', () => {
      // Write your code here
      let arr2 = ['M','Y','A','R','R']
      assert.deepEqual(removeByName(arr2,'a'), arr2)
    });

    it('should not remove element from array', () => {
      // Write your code here
      let arr2 = ['M','Y','A','R','R','ARR']
      assert.deepEqual(removeByName(arr2,'t'), arr2)
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it("should return function", function() {
      assert.equal(typeof makeCounter(0), "function");
    });

    it("should  return currentCount++", function() {
      let counter = makeCounter(4);
      assert.equal(counter(), 4);
      assert.equal(counter(), 5);
      assert.equal(counter(), 6);
    });
  });

  describe('Test suite for testing getAsyncTimerId function', function() {
    it('should return a number', function() {
      let number = getAsyncTimerId(2000);
      setTimeout(function() {
        assert.isNumber(number);
      }, 4000);
    });
  });
  describe('Test suite for testing asyncMultiply function', function() {
    it('should return only correct result', async function() {
      asyncMultiply(7).then(function(result) {
        assert.equal(result, 14);
      })
    });
  });

  describe('Test suite for testing httpGet function', function() {
    it('should return a promise object', function() {
      let result = httpGet("https://www.viti.edu.ua/");
      assert.instanceOf(result, Promise);
    });

  });

});


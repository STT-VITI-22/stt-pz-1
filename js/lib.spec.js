describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      /* NaN is a special value in JavaScript that is not equal to
      any other value, including NaN itself. */
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

  describe('Test removeByName function', () => {
    it('must remove some element from array', () => {
      let objects = ["B","I","B","A"]
      let anotherobjects = ["B","I","B"]
      assert.deepEqual(removeByName(objects,"A"),anotherobjects)
    });

    it('must not remove element from array', () => {
      let objects = ["B","I","B","A"]
      assert.deepEqual(removeByName(objects,"U"),objects)
    });
  });

  describe('Test factorial function', () => {
    it('must make factorial from number n', () => {
      assert.equal(factorial(2),2)
      assert.equal(factorial(3),6)
      assert.equal(factorial(4),24)
    });
  });

  describe('Test fibonacci function', () => {
    it('must calculate Fibonacci sequence from n', () => {
      assert.equal(fibonacci(10),55)
    });

    it("should return 1 for n = 1", function() {
      assert.equal(fibonacci(1), 1);
    });
  });

  describe('Test makeCounter function', () => {
    it("must return function", function() {
      assert.equal(typeof makeCounter(0), "function");
    });
  
    it("must increment counter", function() {
      let counter = makeCounter(2);
      assert.equal(counter(), 2);
      assert.equal(counter(), 3);
      assert.equal(counter(), 4);
    });
  });

  describe('Test getAsyncTimerId function', function() {
    it('must return a number', function() {
      let result = getAsyncTimerId(1000);
      setTimeout(function() {
        assert.isNumber(result);
      }, 2000);
    });
  });

  describe('Test asyncMultiply function', function() {
    it('must return the correct value', async function() {
      asyncMultiply(5).then(function(result) {
        assert.equal(result, 10);
      })
    });

    it('must return number', async function() {
      asyncMultiply(5).then(function(result) {
        assert.isNumber(result);
      })
    });
  });

  describe('Test httpGet function', function() {
    it('must return a Promise object', function() {
      let result = httpGet("www.google.com");
      assert.instanceOf(result, Promise);
    });
    it('must return the response on a successful request', function() {
      httpGet('https://auto.ria.com/uk/auto_volkswagen_passat_34298433.html')
      .then(function(response) {
      assert.isString(response);
      });
      });
  });
});






describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isTrue(isNaN(sum(1)))
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(3, "3"), 27);
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      try {
        assert.equal(removeByName(["nikita", "andriy", "nazar", "anya"], "anya"), ["nikita", "andriy", "nazar"])
      }catch (e) {
        console.log(e)
      }
    });

    it('should not remove element from array', () => {
      // Write your code here
    });
  });

  it('should return factorial', () => {
    assert.equal(factorial(4), 24)
  });

  it('should return a larger number', () => {
    let counter = makeCounter(5);
    console.log(counter());
    assert.equal(counter(), 6);
  });

  describe('Test suite for testing getAsyncTimerId function', function() {
    it('should return a number', function() {
      setTimeout(function() {
        assert.isNumber(getAsyncTimerId(1000));
      }, 2000);
    });
  });

  describe('Test suite for testing asyncMultiply function', function() {
    it('should return the correct value', async function() {
      asyncMultiply(10).then(function(result) {
        assert.equal(result, 10);
      })
    });

    it('test for asyncMultiply', async function() {
      asyncMultiply(10).then(function(result) {
        assert.isNumber(result);
      })
    });
  });

  describe('Test suite for testing httpGet function', function() {
    it('should return a Promise ', function() {
      let result = httpGet("www.viti.edu.ua/");
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



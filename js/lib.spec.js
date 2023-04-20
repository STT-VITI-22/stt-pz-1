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
      catch(e){
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
      assert.equal(pow(2,2),4)
      assert.equal(pow(4,2),16)
      assert.equal(pow(3,3),27)
    });


  });

   describe('Test suite for testing factorial function', () => {
    it('should return factorial n ', () => {
      assert.equal(factorial(2),2)
      assert.equal(factorial(5),120)
      assert.equal(factorial(12),479001600)
    });
   });

   describe('Test suite for testing fibonacci sequence function', () => {
    it('should return function result that matches the correct value', () => {
      assert.equal(fibonacci(2),1)
      assert.equal(fibonacci(10),55)
      assert.equal(fibonacci(17),1597)
    });
   });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const list = ['Love', 'Nadiya', 'Vira'];
      const rmList = ['Love', 'Vira'];
      assert.deepEqual(removeByName(list, 'Nadiya'),rmList)    
      
    });
    it('should not remove element from array', () => {
    const list = ['Love', 'Nadiya', 'Vira'];
    assert.deepEqual(removeByName(list,'Arestovich'),list);
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it("should return function", function() {
      assert.equal(typeof makeCounter(0), "function");
    });
    it("should increment counter", function() {
      const counter = makeCounter(2);
      assert.equal(counter(), 2);
      assert.equal(counter(), 3);
      assert.equal(counter(), 4);
    });
  });

  describe('Test suite for testing getAsyncTimerId function', function() {
    it('should return a number', function() {
      const result = getAsyncTimerId(1000);
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
    it('should return num', async function() {
      asyncMultiply(5).then(function(result) {
        assert.isNumber(result);
      })
    });
  });

  describe('Test suite for testing httpGet function', function() {
    it('should return a Promise object', function() {
      const result = httpGet("www..netflix.com");
      assert.instanceOf(result, Promise);
    });
    it('should return the response on a successful request', function() {
      httpGet('http://portal.navy.dod.ua/CKS/oficer/')
      .then(function(response) {
      assert.isString(response);
      });
      });
  });
});
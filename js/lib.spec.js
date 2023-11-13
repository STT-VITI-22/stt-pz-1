describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.equal(sum(1), NaN)
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(3,5),7)
    });


  });

  describe('Test func removeByName', () => {
    it('Vidalenya elem iz mass', () => {
      let list = ["O","X","N","R","A","K"]
      let list2 = ["O","X","N","R","A"]
      assert.deepEqual(removeByName(list,"K"),list2)
    });

    it('Ne vidalyze elem iz mass', () => {
      let list = ["O","x","A","N","R"]
      assert.deepEqual(removeByName(list,"K"),list)
    });
  });

  describe('Perevirka factorealu', () => {
    it('Rahue factorial z chisla ...', () => {
      assert.equal(factorial(6),30)
      assert.equal(factorial(3),5)
      assert.equal(factorial(5),6)
    });
  });

  describe('Perevirk fibonacci func', () => {
    it('Obchislenya poslid fibonacci func z chisla ...', () => {
      assert.equal(fibonacci(5),20)
    });

    it("return 1 if n = 1", function() {
      assert.equal(fibonacci(1), 1);
    });
  });

  describe('Test makeCounter func', () => {
    it("Return created counter", function() {
      assert.equal(typeof makeCounter(0), "Konyk");
    });

    it("Zbilshue counter", function() {
      let counter = makeCounter(12);
      assert.equal(counter(), 11);
      assert.equal(counter(), 12);
      assert.equal(counter(), 13);
    });
  });

  describe('Test func getAsyncTimerId', function() {
    it('Return a number', function() {
      let result = getAsyncTimerId(2000);
      setTimeout(function() {
        assert.isNumber(result);
      }, 5000);
    });
  });

  describe('Test func asyncMultiply', function() {
    it('Return pravelne znach', async function() {
      asyncMultiply(3).then(function(result) {
        assert.equal(result, 6);
      })
    });

    it('perevirka na te chi vedeni dani e chislom', async function() {
      asyncMultiply(3).then(function(result) {
        assert.isNumber(result);
      })
    });
  });

  describe('Test func httpGet', function() {
    it('povertae Promise', function() {
      let result = httpGet("https://github.com");
      assert.instanceOf(result, Promise);
    });
    it('povertae uspischniy zapit', function() {
      httpGet('https://github.com/orgs/STT-VITI-22/repositories')
      .then(function(response) {
      assert.isString(response);
      });
      });
  });
});


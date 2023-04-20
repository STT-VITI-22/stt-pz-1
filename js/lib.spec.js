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
      assert.equal(pow(2, 4), 16)
      assert.equal(pow('2', 4), 16)
      assert.equal(pow('2', '4'), 16)
    });
  });

  describe('Test suite for testing factorial function', () => {
    it('Test suite for testing factorial function', () => {
      assert.equal(factorial(4),24 )
    });
  });

  describe('Test suite for testing fibonacci function', () =>{
    it('Test suite for testing fibonacci function',()=>{
      assert.equal(fibonacci(1), 1)
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const list = ['apple', 'banana', 'cherry', 'date'];
      const nameToRemove = 'cherry';
      const expected = ['apple', 'banana', 'date'];
      const actual = removeByName(list, nameToRemove);
      assert.deepEqual(actual, expected);
    });
  });

  describe('Test suite for testing function create counter', () =>{
    it('make counter', () =>{
      const count = makeCounter(2);
      assert.equal(count(), 2);
      assert.equal(count(), 3);
      assert.equal(count(), 4);
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
    it('should return the response on a successful request', function() {
      httpGet('https://www.youtube.com/')
        .then(function(response) {
          assert.isString(response);
        });
    });
  });
});


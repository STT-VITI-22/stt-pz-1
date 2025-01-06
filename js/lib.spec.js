describe('Test suite for testing lib.js', () => {
  describe('sum function', () => {
    it('should return the sum of two numbers', () => {
      chai.assert.equal(sum(1, 2), 3);
    });

    it('should convert strings to numbers', () => {
      chai.assert.equal(sum('2', '3'), 5);
    });

    it('should return NaN for invalid inputs', () => {
      chai.assert(Number.isNaN(sum(1)));
    });
  });

  describe('pow function', () => {
    it('should return power of a number', () => {
      chai.assert.equal(pow(2, 3), 8);
    });
  });

  describe('factorial function', () => {
    it('should return factorial of a number', () => {
      chai.assert.equal(factorial(5), 120);
    });
  });

  describe('fibonacci function', () => {
    it('should return Fibonacci number', () => {
      chai.assert.equal(fibonacci(5), 5);
    });
  });

  describe('removeByName function', () => {
    it('should remove the name from array', () => {
      chai.assert.deepEqual(removeByName(['a', 'b', 'c'], 'b'), ['a', 'c']);
    });
  });

  describe('makeCounter function', () => {
    it('should increment the counter', () => {
      const counter = makeCounter(0);
      chai.assert.equal(counter(), 0);
      chai.assert.equal(counter(), 1);
    });
  });

  describe('getAsyncTimerId function', () => {
    it('should return Unix time after timeout', async () => {
      const timerId = await getAsyncTimerId(1000);
      chai.assert.strictEqual(typeof timerId, 'number');
    });
  });

  describe('asyncMultiply function', () => {
    it('should return multiplied value after 3 seconds', async function () {
      this.timeout(4000);
      const result = await asyncMultiply(5);
      chai.assert.strictEqual(result, 10);
    });
  });
});

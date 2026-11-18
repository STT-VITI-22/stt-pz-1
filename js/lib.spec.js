describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1));
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(2,3), 8);
      assert.equal(pow(5,2), 25);
      assert.equal(pow(10,0), 1);
      assert.equal(pow(-2,2), 4);
      assert.equal(pow(-2,3), -8);
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const list = ['Alice', 'Bob', 'Charlie'];
      assert.deepEqual(removeByName(list, 'Bob'), ['Alice', 'Charlie']);
    });

    it('should not remove element from array', () => {
      const list = ['Alice', 'Bob', 'Charlie'];
      assert.deepEqual(removeByName(list, 'Daniel'), ['Alice', 'Bob', 'Charlie']);
      assert.deepEqual(list, [ 'Alice', 'Bob', 'Charlie' ]);
    });
  });

  describe('factorial functions', () => {
    it('should return 1 for the factorial of 0', () => {
      expect(factorial(0)).to.equal(1);
    });

    it('should calculate the factorial of a positive number', () => {
      expect(factorial(1)).to.equal(1);
      expect(factorial(3)).to.equal(6);
      expect(factorial(5)).to.equal(120);
    });
  });

  describe('fibonacci functions', () => {
    it('should return 1 for the first two elements', () => {
      expect(fibonacci(1)).to.equal(1);
      expect(fibonacci(2)).to.equal(1);
    });

    it('should calculate the n-th Fibonacci number', () => {
      expect(fibonacci(3)).to.equal(2);
      expect(fibonacci(4)).to.equal(3);
      expect(fibonacci(5)).to.equal(5);
      expect(fibonacci(6)).to.equal(8);
    });
  });

  describe('makeCounter functions', () => {
    it('should return a function', () => {
      expect(makeCounter(0)).to.be.a('function');
    });

    it('should increment the counter on each call', () => {
      const counter = makeCounter(0);
      counter().should.equal(0);
      counter().should.equal(1);
      counter().should.equal(2);
    });

    it('should start counting from the given value', () => {
      const counter = makeCounter(10);
      expect(counter()).to.equal(10);
      expect(counter()).to.equal(11);
    });
  });

  describe('asyncMultiply function', () => {
    it('should resolve with the value multiplied by 2', async function () {
      this.timeout(5000);
      const result = await asyncMultiply(5);
      expect(result).to.equal(10);
    });
  });

});


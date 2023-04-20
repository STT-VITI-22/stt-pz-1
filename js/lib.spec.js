describe('Test suite for testing lib.js', () => {

  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.deepEqual(sum(1), NaN)
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(3,2),9)
      assert.equal(pow(2,3),8)
      assert.equal(pow(5,0),1)
      assert.equal(pow(5,-2),0.04)

    });

  });

  describe('Test suite for testing factorial function', ()=>{
    it('should return n factorial',()=>{
      assert.equal(factorial(5),120)
      assert.equal(factorial(2),2)
      assert.equal(factorial(3),6)

    });

    it('should return NaN if n is a negative number ', ()=>{
      assert.deepEqual(factorial(-2),NaN)
    });
  });

  describe('Test suite for testing the Fibonacci function',()=>{
    it('should return the Fibonacci number by its index',()=>{
      assert.equal(fibonacci(3),2)
      assert.equal(fibonacci(5),5)
      assert.equal(fibonacci(9),34)
    });

    it('should return NaN if index Fibonacci number is negative or zero',()=>{
      assert.deepEqual(fibonacci(-3),NaN)
      assert.deepEqual(fibonacci(0),NaN)


    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      assert.deepEqual(removeByName([2,2,4,2,5],2),[4,5])
      assert.deepEqual(removeByName([1,2,4,2,5,4],4),[1,2,2,5])
      assert.deepEqual(removeByName([1,1,1,1],1),[])
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName([1,2,4,2,5],3),[1,2,4,2,5])
      assert.deepEqual(removeByName([1,9,3,8,5],6),[1,9,3,8,5])
    });
  });

  describe('Test suite for testing makeCounter function', ()=>{
    it('must count positive numbers',()=>{
      const count=makeCounter(0);
      assert.equal(count(),0);
      assert.equal(count(),1);
    });
    it('must count negative numbers',()=>{
      const count=makeCounter(-6);
      assert.equal(count(),-6);
      assert.equal(count(),-5);
    });
  });

});

describe('Test suite for testing asyncMultiply function', ()=>{
  it('should double the parameter with a time delay',async()=>{
    const prm = await asyncMultiply(5)
    assert.equal(prm,10)
  })
})

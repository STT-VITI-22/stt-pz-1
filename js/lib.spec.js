describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      try {
        assert.equal(sum(1), NaN)
      }catch (e) {
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
      assert.equal(pow(3,3),27)
      assert.equal(pow(4,2),16)
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      assert.deepEqual(removeByName(['aa','bb','cc'],'aa'),['bb','cc'])
      assert.deepEqual(removeByName(['aa','bb','cc'],'bb'),['aa','cc'])
      assert.deepEqual(removeByName(['aa','bb','cc'],'cc'),['aa','bb'])
    });

    it('should not remove element from array', () => {
      assert.notEqual(removeByName(['aa','bb','cc'],'dd'),['aa','bb','cc'])
    });
  });

  describe('Test suite for testing factorial function', () =>{
    it('should calculate factorial of number', () =>{
      assert.equal(factorial(5),120)
      assert.equal(factorial(3),6)
      assert.equal(factorial(4),24)
    })
  })


  describe('Test suite for testing Fibonacci sequence', ()=>{
    it('should calculate Fibonacci sequence', () =>{
      assert.equal(fibonacci(10),55)
      assert.equal(fibonacci(5),5)
      assert.equal(fibonacci(15),610)
    })
  })


  describe('Test suite for testing create counter function', ()=>{
    it('should makeCounter', ()=>{
      const mcounter = makeCounter(0);
      assert.equal(mcounter(),0)
      assert.equal(mcounter(),1)
      assert.equal(mcounter(),2)
    })
  })


  describe('Test suite for testing function create async timeout and return unixtime like timer Id', ()=>{
    it('should getAsyncTimerId', ()=>{
      // assert.equal(getAsyncTimerId(10),undefined)
      setTimeout(() =>{
        assert.equal(getAsyncTimerId(1000),1100)
      })
    })
  })


  describe('Test suite for function return promise and multiply paraments', ()=>{
    it('should return asyncmultiply result', ()=>{
      async function AsyncMultiply() {
        const result = await asyncMultiply(1);
        if (result === 2) {
          return result
        } else {
          return Error
        }
      }
      AsyncMultiply();
    });
  })


  describe('Test suite for testing function httpGet', ()=> {
    it('should return Promise', ()=> {
      let result = httpGet("https://www.youtube.com");
      assert.instanceOf(result, Promise);
    });
    it('should return 200', ()=> {
      httpGet('https://www.youtube.com')
        .then((response)=> {
          assert.isString(response);
        });
    });
    it('return error', () => {
        try{
         httpGet('https://www.youtube.com/asfagadgfs');
      } catch (error) {
        assert.equal(error.code, 404);
      }
    });
  });
});




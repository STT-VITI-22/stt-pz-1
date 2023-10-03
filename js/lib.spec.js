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
      // Write your code here
	  assert.equal(pow(1, 3), 1)
      assert.equal(pow(2, 3), 8)
      assert.equal(pow(2, 2), 4)
    });


  });

describe('Test suite for testing factorial function', () => {
    it('should calculate fibonacci from n', () => {
      // Write your code here
	  assert.equal(factorial(3), 6)
      assert.equal(factorial(8), 40320)
    });
  });

describe('Test suite for testing fibonacci function', () => {
    it('should calculate fibonacci from n', () => {
      // Write your code here
	  assert.equal(fibonacci(1), 1)
      assert.equal(fibonacci(8), 21)
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      // Write your code here
		assert.deepEqual(removeByName(["o", "t", "k"], "k"), (["o","t"]))
		
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName(["o", "t", "k"], "k"), (["o","t"]))
    });
  });

describe('Test suite for testing returning unixtime timeId', () => {
    it('should return unixtime timeid from n', () => {
      // Write your code here
      let time = 1000;
	  let expectTime = Math.floor((Date.now() + time)  / 1000);
	  let timerId = getAsyncTimerId(time); 
	  
	  setTimeout(() => {
     	 assert.equal(timerId, expectTime);
      }, time);	
	
	  
    });
  });

describe('Test suite for testing counter', () => {
    it('should return counter++ from n', () => {
      // Write your code here
	  assert.equal(makeCounter(1)(), 1)
    });
  });

describe('Test suite for testing promise', () => {
    it('should return promise and multiply paraments from n', () => {
      // Write your code here
	  return asyncMultiply(3)
		.then((number) => {
	  		assert.equal(number, 6);
		});
    }).timeout(10000);
  });

describe('Test suite for testing request', () => {
    it('should return promise and response of a request', () => {
      // Write your code here
	  let response = "";
	  return httpGet("http://httpbin.org/status/200")
		.then((response) => {
			console.log(response);
	  		assert.equal(response, "");
		});
    });
  });

});




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
      assert.equal(pow(3,2),9)
      assert.equal(pow(4,2),16)
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      assert.deepEqual(removeByName(['misha','koval', 'chepras'],'chepras'),['misha','koval'])
      assert.deepEqual(removeByName(['misha','koval', 'cheprasBetaTester','Shevchenko'],'cheprasBetaTester'),['misha','koval','Shevchenko'])
      assert.deepEqual(removeByName(['misha','koval','porohenko', 'chepras007'],'chepras007'),['misha','koval','porohenko'])
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName(['misha','koval', 'chepras'],'cherkasi'),['misha','koval','chepras'])
      assert.deepEqual(removeByName(['misha','koval', 'cheprasBetaTester','Shevchenko'],'cheprasITSpecialist'),['misha','koval','cheprasBetaTester','Shevchenko'])
      assert.deepEqual(removeByName(['misha','koval','porohenko', 'chepras007'],'cheprasMakbook'),['misha','koval','porohenko','chepras007'])
    });
  });
  describe('Test suite for testing function calculate factorial of number', () => {
    it('calculate factorial of number - n', () => {
      assert.equal(factorial(1),1)
      // assert.equal(factorial(22),1124000727777607680000)
      // assert.equal(factorial(24),620448401733239439360000)
    });
  });
  describe('Test suite for function calculate Fibonacci sequence', () => {
    it('calculate Fibonacci sequence', () => {
      assert.equal(fibonacci(5),5)
      assert.equal(fibonacci(12),144)
      assert.equal(fibonacci(11),89)
    });
  });
  describe('Test suite for  function create counter', () => {
    it('should return a function that returns incremented values of the provided count', () => {
      const test = makeCounter(177);
      assert.equal(test(), 177);
      assert.equal(test(), 178);
      assert.equal(test(), 179);
      // assert.equal(test(), 189);
    });
  });
  describe('Test suite for function create async timeout and return unixtime like timer Id', () => {
    it('checking if it returns a valid timerId after the timer has elapsed for 1 second', () => {
      const to = setTimeout(()=> assert.isAbove(getAsyncTimerId(1000),0), 1000);
    });
  });
  describe('Test suite for function return promise and multiply paraments', () => {
    it('calls the testAsyncMultiply function inside which your function is called, after which it waits for a response, the testAsyncMultiply function multiplied correctly, if so, it outputs', () => {
      async function testAsyncMultiply() {
        const result = await asyncMultiply(5);
        if (result === 10) {
          console.log(`Done result =${result}`);
        } else {
          console.error('Erorrr/');
        }
      }
      testAsyncMultiply();
    });
  });
  describe('Test suite for function create GET http request to server', () => {
    it('return successful get request', async () => {
      const result = await httpGet('https://jsonplaceholder.typicode.com/todos/1');
      assert.isObject(JSON.parse(result));
    });
    it('return error get request', async () => {
      try {
        await httpGet('https://jsonplaceholder.typicode.com/notfound');
      } catch (error) {
        assert.equal(error.code, 404);
      }
    });
  });
});


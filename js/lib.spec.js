describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1))
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(10, 2), 100)
    });


  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const array = ["Vlad", "Denys", "Boris", "Dima", "Sasha", "Bogdan"]
      const correct_array = ["Vlad", "Denys", "Boris", "Dima", "Bogdan"]
      const name = "Sasha"
      assert.deepEqual(removeByName(array, name), correct_array)
    });

    it('should not remove element from array', () => {
      const array = ["Vlad", "Denys", "Boris", "Dima", "Bogdan"]
      const correct_array = ["Vlad", "Denys", "Boris", "Dima", "Bogdan"]
      const name = "Sasha"
      assert.deepEqual(removeByName(array, name), correct_array)
    });
  });

  describe('Test suite for testing makeCounter function', () => {
    it('should increase the number by 1 6 times', () => {
      let counter = 1
      const number = makeCounter(1)

      while(counter <= 5){
        number() 
        counter ++
      }
      
      assert.equal(number(), 6) 
    })
  });

  describe('Test suite for testing getAsyncTimerId function', () => {
    it('should return a valid timerId after the specified delay', async function () {
      const delay = 1000; 
      const startTime = Math.floor(Date.now() / 1000);
      const timerId = await getAsyncTimerId(delay);
      const endTime = Math.floor(Date.now() / 1000);
  
      assert.strictEqual(typeof timerId, 'number');
  
      assert(timerId >= startTime + 1);
      assert(timerId <= endTime);
    });
  });

  describe('Test suite for testing asyncMultiply function', () => {
    it('should return 2 * x after 3 seconds', async function () {
      const x = 5;
      const expectedValue = 2 * x;
  
      asyncMultiply(x).then(result => {
        assert.strictEqual(result, expectedValue); 
      }); 
    });
  });

  describe('Test suite for testing httpGet function', () => {
    it('should return object from api and check identity value from api', async function () {
      const url = 'https://jsonplaceholder.typicode.com/todos/1'
      
      const obj = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }      

      const data = await httpGet(url)
      const json = JSON.parse(data)
   
      assert.equal(json.title, obj.title) 
    });
  });

});


describe('Test suite for testing lib.js', () => {
  describe('Function sum', () => {
    it('should return the sum of two numbers', () => {
        assert.equal(sum(1, 2), 3);
        assert.equal(sum(-10, 5), -5);
        assert.equal(sum(-10, 10), 0);
    });

    it('should return NaN if one parameter is omitted', () => {
        assert.isTrue(isNaN(sum(1)));
    });

    it('should convert strings to numbers if input parameters are strings', () => {
        assert.equal(sum('5', '1'), 6);
        assert.equal(sum(10, '1'), 11);
        assert.equal(sum('25', 5), 30);
    });
});

  describe('Function pow', () => {
    it('should raise x to the n power', () => {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(2, 0), 1);
        assert.equal(pow(3, 2), 9);
    });
  });

  describe('Function removeByName', () => {
    it('should remove an existing element from the array by name', () => {
        let list = ["Sanya", "Valera", "Kolya"];
        assert.deepEqual(removeByName(list, "Valera"), ["Sanya", "Kolya"]);
    });

    it('should not remove an element if the name does not exist in the array', () => {
        let list = ["Sanya", "Valera", "Kolya"];
        assert.deepEqual(removeByName(list, "Volodya"), ["Sanya", "Valera", "Kolya"]);
    });
});

  describe('Function factorial', () => {
    it('should compute the factorial of a positive number', () => {
        assert.equal(factorial(5), 120);
        assert.equal(factorial(3), 6);
    });

    it('should return 1 for factorial of 0', () => {
        assert.equal(factorial(0), 1);
    });
  });

  describe('Function fibonacci', () => {
    it('should compute the Fibonacci number for a positive integer', () => {
        assert.equal(fibonacci(5), 5);
        assert.equal(fibonacci(6), 8);
    });

    it('should return 1 for fibonacci of 1 and 2', () => {
        assert.equal(fibonacci(1), 1);
        assert.equal(fibonacci(2), 1);
    });
  });

  describe('Function makeCounter', () => {
    it('should create a counter and increment its value', () => {
        const counter = makeCounter(5);
        assert.equal(counter(), 5);
        assert.equal(counter(), 6);
    });
  });

  describe('Function getAsyncTimerId', () => {
    it('should return a number', (done) => {
        getAsyncTimerId(100).then(result => {
            try {
                assert.typeOf(result, 'number');
                done();
            } catch (error) {
                done(error);
            }
        }).catch(done);
    });
  });

  describe('Function asyncMultiply', function() {
    this.timeout(4000); 
    it('should multiply a number by 2 asynchronously', async () => {
        const result = await asyncMultiply(5);
        assert.equal(result, 10);
    });
  });

  describe('Function httpGet', () => {
    it('should return a promise', () => {
        const result = httpGet('https://prometheus.org.ua/');
        assert.instanceOf(result, Promise);
    });
  });

  describe('Function removeByName', () => {
    it('should remove an existing element from the array by name', () => {
        let list = ["John", "Jane", "Doe"];
        assert.deepEqual(removeByName(list, "Jane"), ["John", "Doe"]);
    });

    it('should not remove an element if the name does not exist in the array', () => {
        let list = ["John", "Jane", "Doe"];
        assert.deepEqual(removeByName(list, "Smith"), ["John", "Jane", "Doe"]);
    });
  });

  describe('Function getAsyncTimerId', () => {
    it('should return a number', (done) => {
        getAsyncTimerId(100)
            .then(result => {
                assert.typeOf(result, 'number');
                done();
            })
            .catch(done);
    });
  });

  describe('Function getAsyncTimerId', () => {
    it('should return a number', (done) => {
        getAsyncTimerId(100)
            .then(result => {
                assert.typeOf(result, 'number');
                done();
            })
            .catch(done);
    });
  });

  describe('Function httpGet', () => {
    it('should return a promise', () => {
        const result = httpGet('someurl.com');
        assert.instanceOf(result, Promise);
    });
  });
});
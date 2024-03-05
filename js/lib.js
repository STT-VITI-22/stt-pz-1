/**
 * This function must add two numbers and return sum of numbers
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return Numbdescribe('Test suite for testing lib.js', () => {
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
        // Write your code here
      });
  
  
    });
  
    describe('Test suite for testing removeByName function', () => {
      it('should remove some element from array', () => {
        // Write your code here
      });
  
      it('should not remove element from array', () => {
        // Write your code here
      });
    });
  });er(a) + Number(b)
}

/**
 * This function takes a number and raises it to a power
 * @param x
 * @param n
 * @returns {number}
 */
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

/**
 * This function calculate factorial of number
 * @param n {number}
 * @returns {number}
 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
};

/**
 * This function calculate Fibonacci sequence
 * @param n
 * @returns {*|number}
 */
function fibonacci(n) {
  return (n > 2) ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

/**
 * This function must remove some element for array of string by name
 * @param list {string[]}
 * @param name {string}
 * @returns {string[]}
 */
function removeByName(list, name) {
  let result = [...list]
  let index = result.indexOf(name);
  if (index !== -1) {
    result.splice(index, 1);
  }

  return result;
}

/**
 * This function create counter
 * @param currentCount {number}
 * @returns {function(): number}
 */
function makeCounter(currentCount) {
  return function () {
    return currentCount++;
  };
}

/**
 * This function create async timeout and return unixtime like timer Id
 * @param time {number}
 * @returns {number}
 */

function getAsyncTimerId(time) {
  let timerId;
  setTimeout(() => {
    timerId = Math.floor(Date.now() / 1000)
  }, time);

  return timerId
};

/**
 * This function return promise and multiply paraments
 * @param x{number}
 * @returns {Promise<number>}
 */
async function asyncMultiply(x) {
  return new Promise(resolve => {
    setTimeout(resolve, 3000, 2 * x);
  });
};

/**
 * This function create GET http request to server
 * @param url {string}
 * @returns {Promise<unknown>}
 */
function httpGet(url) {

  return new Promise(function (resolve, reject) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}


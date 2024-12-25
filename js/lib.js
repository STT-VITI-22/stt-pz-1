/**
 * This function must add two numbers and return sum of numbers
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return Number(a) + Number(b)
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
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  if (!Number.isInteger(n)) throw new Error("Factorial is only defined for integers");

  return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * This function calculate Fibonacci sequence
 * @param n
 * @returns {*|number}
 */
function fibonacci(n) {
  if (!Number.isInteger(n)) throw new Error("Fibonacci is only defined for integers");
  if (n < 0) throw new Error("Fibonacci is not defined for negative numbers");
  if (n === 0) return 0; // Fibonacci(0) = 0
  if (n === 1) return 1; // Fibonacci(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2);
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
    return ++currentCount;
  };
}

/**
 * This function create async timeout and return unixtime like timer Id
 * @param time {number}
 * @returns {number}
 */

async function getAsyncTimerId(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const timerId = Math.floor(Date.now() / 1000);
      resolve(timerId);
    }, time);
  });
}

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


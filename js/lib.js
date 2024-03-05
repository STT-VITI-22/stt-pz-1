const functions = {
  /**
   * This function must add two numbers and return sum of numbers
   * @param a {number|string}
   * @param b {number|string}
   * @returns {number}
   */
  sum: function(a, b) {
    return Number(a) + Number(b);
  },

  /**
   * This function takes a number and raises it to a power
   * @param x
   * @param n
   * @returns {number}
   */
  pow: function(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  },

  /**
   * This function calculate factorial of number
   * @param n {number}
   * @returns {number}
   */
  factorial: function(n) {
    return n ? n * functions.factorial(n - 1) : 1;
  },

  /**
   * This function calculate Fibonacci sequence
   * @param n
   * @returns {*|number}
   */
  fibonacci: function(n) {
    return n < 2 ? n : functions.fibonacci(n - 1) + functions.fibonacci(n - 2);
  },

  /**
   * This function must remove some element for array of string by name
   * @param list {string[]}
   * @param name {string}
   * @returns {string[]}
   */
  removeByName: function(list, name) {
    let result = [...list];
    let index = result.indexOf(name);
    if (index !== -1) {
      result.splice(index, 1);
    }
    return result;
  },

  /**
   * This function create counter
   * @param currentCount {number}
   * @returns {function(): number}
   */
  makeCounter: function(currentCount) {
    return function() {
      return currentCount++;
    };
  },

  /**
   * This function create async timeout and return unixtime like timer Id
   * @param time {number}
   * @returns {number}
   */
  getAsyncTimerId: function(time) {
    let timerId;
    setTimeout(() => {
      timerId = Math.floor(Date.now() / 1000);
    }, time);
    return timerId;
  },

  /**
   * This function return promise and multiply paraments
   * @param x{number}
   * @returns {Promise<number>}
   */
  asyncMultiply: async function(x) {
    return new Promise(resolve => {
      setTimeout(resolve, 3000, 2 * x);
    });
  },

  /**
   * This function create GET http request to server
   * @param url {string}
   * @returns {Promise<unknown>}
   */
  httpGet: function(url) {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
  }
};

// module.exports  = {sum, pow, factorial, asyncMultiply, fibonacci, getAsyncTimerId, httpGet, makeCounter, removeByName}


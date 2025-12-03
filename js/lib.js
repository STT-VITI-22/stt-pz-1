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

function getElement(array, index, fallback = null) {
  // Перевірка типів
  if (!Array.isArray(array)) {
    throw new TypeError("Перший параметр має бути масивом");
  }

  if (typeof index !== "number" || Number.isNaN(index)) {
    throw new TypeError("Індекс має бути числом");
  }

  // Негативні індекси: -1 → останній елемент
  const realIndex = index < 0 ? array.length + index : index;

  // Якщо індекс виходить за межі — повертаємо fallback
  if (realIndex < 0 || realIndex >= array.length) {
    return fallback;
  }

  return array[realIndex];
  
}

}

/**
 * Повертає елемент масиву за індексом.
 * Підтримує негативні індекси та fallback-значення.
 *
 * @param {Array} array - масив.
 * @param {number} index - індекс (може бути негативним).
 * @param {*} fallback - значення, що повернеться, якщо індекс некоректний.
 * @returns {*} елемент масиву або fallback.
 */
function getElement(array, index, fallback = null) {
  // Перевірка типів
  if (!Array.isArray(array)) {
    throw new TypeError("Перший параметр має бути масивом");
  }

  if (typeof index !== "number" || Number.isNaN(index)) {
    throw new TypeError("Індекс має бути числом");
  }

  // Негативні індекси: -1 → останній елемент
  const realIndex = index < 0 ? array.length + index : index;

  // Якщо індекс виходить за межі — повертаємо fallback
  if (realIndex < 0 || realIndex >= array.length) {
    return fallback;
  }

  return array[realIndex];
}
function domashovSum(a, b)
 {
  return Number(a) + Number(b)
}

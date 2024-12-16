/**
 * This function adds two numbers or numeric strings and returns their sum.
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
const sum = (a, b) => parseFloat(a) + parseFloat(b);

/**
 * This function raises a number to a power using recursion.
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
const pow = (x, n) => (n === 0 ? 1 : x * pow(x, n - 1));

/**
 * This function calculates the factorial of a number using iteration.
 * @param {number} n
 * @returns {number}
 */
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

/**
 * This function calculates the nth Fibonacci number using iteration.
 * @param {number} n
 * @returns {number}
 */
const fibonacci = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr += prev;
    prev = temp;
  }
  return curr;
};

/**
 * This function removes an element by name from an array of strings.
 * @param {string[]} list
 * @param {string} name
 * @returns {string[]}
 */
const removeByName = (list, name) => list.filter((item) => item !== name);

/**
 * This function creates a counter and returns a closure to increment it.
 * @param {number} currentCount
 * @returns {function(): number}
 */
const makeCounter = (currentCount) => () => currentCount++;

/**
 * This function creates an async timeout and returns a Promise resolving to a Unix timestamp.
 * @param {number} time
 * @returns {Promise<number>}
 */
const getAsyncTimerId = (time) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(Math.floor(Date.now() / 1000)), time)
  );

/**
 * This function returns a promise that resolves to the double of the input number after 3 seconds.
 * @param {number} x
 * @returns {Promise<number>}
 */
const asyncMultiply = (x) =>
  new Promise((resolve) => setTimeout(() => resolve(x * 2), 3000));

/**
 * This function performs a GET HTTP request to the given URL and returns a Promise.
 * @param {string} url
 * @returns {Promise<any>}
 */
const httpGet = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  return response.json();
};

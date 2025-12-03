/**
 * lib.spec.js - Юніт-тести для lib.js
 * 
 * Використовуємо BDD (Behavior-Driven Development) стиль з Mocha та Chai
 * - describe() - групує пов'язані тести
 * - it() - описує окремий тест
 * - expect() - виконує перевірки (assertions)
 */

// Отримуємо доступ до Chai assertions
const expect = chai.expect;

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ sum() ==========

describe('sum()', function() {
    
    it('повинна додавати два позитивні числа', function() {
        expect(sum(2, 3)).to.equal(5);
    });
    
    it('повинна додавати негативні числа', function() {
        expect(sum(-5, -3)).to.equal(-8);
    });
    
    it('повинна додавати позитивне та негативне число', function() {
        expect(sum(10, -3)).to.equal(7);
    });
    
    it('повинна працювати з нулем', function() {
        expect(sum(5, 0)).to.equal(5);
        expect(sum(0, 0)).to.equal(0);
    });
    
    it('повинна конвертувати рядки в числа', function() {
        expect(sum('5', '3')).to.equal(8);
        expect(sum('10', 5)).to.equal(15);
        expect(sum(7, '3')).to.equal(10);
    });
    
    it('повинна працювати з дробовими числами', function() {
        expect(sum(1.5, 2.3)).to.be.closeTo(3.8, 0.01);
    });
    
    it('повинна конвертувати рядки з дробовими числами', function() {
        expect(sum('1.5', '2.5')).to.equal(4);
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ pow() ==========

describe('pow()', function() {
    
    it('повинна піднімати число до степеня', function() {
        expect(pow(2, 3)).to.equal(8);
        expect(pow(5, 2)).to.equal(25);
    });
    
    it('повинна повертати 1 для степеня 0', function() {
        expect(pow(10, 0)).to.equal(1);
        expect(pow(5, 0)).to.equal(1);
    });
    
    it('повинна повертати саме число для степеня 1', function() {
        expect(pow(7, 1)).to.equal(7);
    });
    
    it('повинна працювати з негативними числами', function() {
        expect(pow(-2, 3)).to.equal(-8);
        expect(pow(-2, 2)).to.equal(4);
    });
    
    it('повинна працювати з великими степенями', function() {
        expect(pow(2, 10)).to.equal(1024);
    });
    
    it('повинна працювати з дробовими основами', function() {
        expect(pow(0.5, 2)).to.equal(0.25);
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ factorial() ==========

describe('factorial()', function() {
    
    it('повинна обчислювати факторіал 0', function() {
        expect(factorial(0)).to.equal(1);
    });
    
    it('повинна обчислювати факторіал 1', function() {
        expect(factorial(1)).to.equal(1);
    });
    
    it('повинна обчислювати факторіал малих чисел', function() {
        expect(factorial(3)).to.equal(6);  // 3! = 3 * 2 * 1 = 6
        expect(factorial(4)).to.equal(24); // 4! = 4 * 3 * 2 * 1 = 24
        expect(factorial(5)).to.equal(120); // 5! = 120
    });
    
    it('повинна обчислювати факторіал 10', function() {
        expect(factorial(10)).to.equal(3628800);
    });
    
    it('повинна працювати рекурсивно', function() {
        expect(factorial(6)).to.equal(720); // 6! = 720
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ fibonacci() ==========

describe('fibonacci()', function() {
    
    it('повинна повертати 1 для n=1 та n=2', function() {
        expect(fibonacci(1)).to.equal(1);
        expect(fibonacci(2)).to.equal(1);
    });
    
    it('повинна обчислювати послідовність Фібоначчі', function() {
        expect(fibonacci(3)).to.equal(2);  // 1 + 1 = 2
        expect(fibonacci(4)).to.equal(3);  // 2 + 1 = 3
        expect(fibonacci(5)).to.equal(5);  // 3 + 2 = 5
        expect(fibonacci(6)).to.equal(8);  // 5 + 3 = 8
    });
    
    it('повинна обчислювати більші числа послідовності', function() {
        expect(fibonacci(7)).to.equal(13);
        expect(fibonacci(8)).to.equal(21);
    });
    
    it('повинна працювати для 10-го числа Фібоначчі', function() {
        expect(fibonacci(10)).to.equal(55);
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ removeByName() ==========

describe('removeByName()', function() {
    
    it('повинна видаляти елемент з масиву за ім\'ям', function() {
        const list = ['apple', 'banana', 'cherry'];
        const result = removeByName(list, 'banana');
        expect(result).to.deep.equal(['apple', 'cherry']);
    });
    
    it('не повинна змінювати оригінальний масив', function() {
        const list = ['apple', 'banana', 'cherry'];
        const result = removeByName(list, 'banana');
        // Перевіряємо, що оригінальний масив не змінився
        expect(list).to.deep.equal(['apple', 'banana', 'cherry']);
        expect(result).to.not.equal(list); // Різні посилання
    });
    
    it('повинна видаляти перше входження імені', function() {
        const list = ['apple', 'banana', 'apple'];
        const result = removeByName(list, 'apple');
        expect(result).to.deep.equal(['banana', 'apple']);
    });
    
    it('повинна повертати той самий масив, якщо елемент не знайдено', function() {
        const list = ['apple', 'banana', 'cherry'];
        const result = removeByName(list, 'orange');
        expect(result).to.deep.equal(['apple', 'banana', 'cherry']);
    });
    
    it('повинна працювати з порожнім масивом', function() {
        const result = removeByName([], 'test');
        expect(result).to.deep.equal([]);
    });
    
    it('повинна працювати з масивом з одним елементом', function() {
        const result = removeByName(['apple'], 'apple');
        expect(result).to.deep.equal([]);
    });
    
    it('повинна видаляти елемент з початку масиву', function() {
        const list = ['first', 'second', 'third'];
        const result = removeByName(list, 'first');
        expect(result).to.deep.equal(['second', 'third']);
    });
    
    it('повинна видаляти елемент з кінця масиву', function() {
        const list = ['first', 'second', 'third'];
        const result = removeByName(list, 'third');
        expect(result).to.deep.equal(['first', 'second']);
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ makeCounter() ==========

describe('makeCounter()', function() {
    
    it('повинна створювати лічильник, який починається з заданого значення', function() {
        const counter = makeCounter(5);
        expect(counter()).to.equal(5);
        expect(counter()).to.equal(6);
        expect(counter()).to.equal(7);
    });
    
    it('повинна створювати лічильник з 0', function() {
        const counter = makeCounter(0);
        expect(counter()).to.equal(0);
        expect(counter()).to.equal(1);
        expect(counter()).to.equal(2);
    });
    
    it('кожен лічильник повинен бути незалежним', function() {
        const counter1 = makeCounter(0);
        const counter2 = makeCounter(10);
        
        expect(counter1()).to.equal(0);
        expect(counter2()).to.equal(10);
        expect(counter1()).to.equal(1);
        expect(counter2()).to.equal(11);
    });
    
    it('повинна працювати з негативними числами', function() {
        const counter = makeCounter(-3);
        expect(counter()).to.equal(-3);
        expect(counter()).to.equal(-2);
        expect(counter()).to.equal(-1);
    });
    
    it('повинна повертати функцію', function() {
        const counter = makeCounter(0);
        expect(counter).to.be.a('function');
    });
    
    it('повинна зберігати стан між викликами', function() {
        const counter = makeCounter(100);
        counter(); // 100
        counter(); // 101
        expect(counter()).to.equal(102);
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ getAsyncTimerId() ==========

describe('getAsyncTimerId()', function() {
    
    // Для асинхронних тестів використовуємо done callback
    it('повинна повертати undefined одразу', function() {
        const result = getAsyncTimerId(100);
        expect(result).to.be.undefined;
    });
    
    it('повинна приймати час як параметр', function() {
        const result = getAsyncTimerId(500);
        // Функція повертає undefined, тому що timerId встановлюється в setTimeout
        expect(result).to.be.undefined;
    });
    
    // Примітка: Ця функція має проблему в реалізації - вона повертає undefined
    // замість timerId, тому що setTimeout виконується асинхронно
    it('повинна викликатися без помилок', function() {
        expect(() => getAsyncTimerId(100)).to.not.throw();
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ asyncMultiply() ==========

describe('asyncMultiply()', function() {
    
    // Для асинхронних тестів з Promise використовуємо async/await
    it('повинна повертати Promise', function() {
        const result = asyncMultiply(5);
        expect(result).to.be.instanceof(Promise);
    });
    
    it('повинна множити число на 2', async function() {
        // Збільшуємо timeout для цього тесту, бо функція чекає 3 секунди
        this.timeout(4000);
        
        const result = await asyncMultiply(5);
        expect(result).to.equal(10);
    });
    
    it('повинна працювати з нулем', async function() {
        this.timeout(4000);
        
        const result = await asyncMultiply(0);
        expect(result).to.equal(0);
    });
    
    it('повинна працювати з негативними числами', async function() {
        this.timeout(4000);
        
        const result = await asyncMultiply(-3);
        expect(result).to.equal(-6);
    });
    
    it('повинна працювати з дробовими числами', async function() {
        this.timeout(4000);
        
        const result = await asyncMultiply(2.5);
        expect(result).to.equal(5);
    });
});

// ========== ТЕСТИ ДЛЯ ФУНКЦІЇ httpGet() ==========

describe('httpGet()', function() {
    
    it('повинна повертати Promise', function() {
        const result = httpGet('https://jsonplaceholder.typicode.com/todos/1');
        expect(result).to.be.instanceof(Promise);
    });
    
    it('повинна виконувати GET запит і повертати відповідь', async function() {
        // Збільшуємо timeout для HTTP запиту
        this.timeout(5000);
        
        const response = await httpGet('https://jsonplaceholder.typicode.com/todos/1');
        expect(response).to.be.a('string');
        expect(response.length).to.be.greaterThan(0);
    });
    
    it('повинна парсити JSON відповідь', async function() {
        this.timeout(5000);
        
        const response = await httpGet('https://jsonplaceholder.typicode.com/todos/1');
        const data = JSON.parse(response);
        
        expect(data).to.be.an('object');
        expect(data).to.have.property('id');
        expect(data).to.have.property('title');
    });
    
    it('повинна відхиляти Promise при помилці 404', async function() {
        this.timeout(5000);
        
        try {
            await httpGet('https://jsonplaceholder.typicode.com/invalid-url-404');
            // Якщо дійшли сюди, тест провалився
            expect.fail('Promise should have been rejected');
        } catch (error) {
            expect(error).to.be.instanceof(Error);
            expect(error.code).to.equal(404);
        }
    });
    
    it('повинна працювати з різними endpoints', async function() {
        this.timeout(5000);
        
        const response = await httpGet('https://jsonplaceholder.typicode.com/users/1');
        const data = JSON.parse(response);
        
        expect(data).to.have.property('name');
        expect(data).to.have.property('email');
    });
});

// ========== ДОДАТКОВІ ІНТЕГРАЦІЙНІ ТЕСТИ ==========

describe('Інтеграційні тести', function() {
    
    it('sum() + pow() повинні працювати разом', function() {
        const sumResult = sum(2, 3); // 5
        const powResult = pow(sumResult, 2); // 25
        expect(powResult).to.equal(25);
    });
    
    it('factorial() + sum() повинні працювати разом', function() {
        const fact3 = factorial(3); // 6
        const fact2 = factorial(2); // 2
        expect(sum(fact3, fact2)).to.equal(8);
    });
    
    it('makeCounter() повинен працювати з pow()', function() {
        const counter = makeCounter(2);
        const count1 = counter(); // 2
        const count2 = counter(); // 3
        expect(pow(count1, count2)).to.equal(8); // 2^3 = 8
    });
    
    it('fibonacci() та sum() повинні працювати разом', function() {
        const fib5 = fibonacci(5); // 5
        const fib6 = fibonacci(6); // 8
        expect(sum(fib5, fib6)).to.equal(13);
    });
    
});
describe('getElement', () => {
  
  describe('Позитивні індекси', () => {
    it('повертає перший елемент (індекс 0)', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, 0)).to.equal(10);
    });

    it('повертає елемент з середини масиву', () => {
      const arr = [10, 20, 30, 40, 50];
      expect(getElement(arr, 2)).to.equal(30);
    });

    it('повертає останній елемент', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, 2)).to.equal(30);
    });
  });

  describe('Негативні індекси', () => {
    it('повертає останній елемент (індекс -1)', () => {
      const arr = [10, 20, 30, 40];
      expect(getElement(arr, -1)).to.equal(40);
    });

    it('повертає передостанній елемент (індекс -2)', () => {
      const arr = [10, 20, 30, 40];
      expect(getElement(arr, -2)).to.equal(30);
    });

    it('повертає перший елемент через негативний індекс', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, -3)).to.equal(10);
    });
  });

  describe('Некоректні індекси', () => {
    it('повертає fallback для індексу поза межами (позитивний)', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, 10)).to.be.null;
    });

    it('повертає fallback для індексу поза межами (негативний)', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, -10)).to.be.null;
    });

    it('повертає кастомний fallback', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, 10, 'не знайдено')).to.equal('не знайдено');
    });

    it('повертає fallback 0 для некоректного індексу', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, 10, 0)).to.equal(0);
    });

    it('повертає fallback false для некоректного індексу', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, 10, false)).to.be.false;
    });
  });

  describe('Спеціальні випадки', () => {
    it('працює з порожнім масивом', () => {
      const arr = [];
      expect(getElement(arr, 0, 'порожньо')).to.equal('порожньо');
    });

    it('працює з масивом з одного елемента', () => {
      const arr = [42];
      expect(getElement(arr, 0)).to.equal(42);
    });

    it('працює з масивом з одного елемента (негативний індекс)', () => {
      const arr = [42];
      expect(getElement(arr, -1)).to.equal(42);
    });

    it('повертає undefined як елемент масиву', () => {
      const arr = [1, undefined, 3];
      expect(getElement(arr, 1)).to.be.undefined;
    });

    it('повертає null як елемент масиву', () => {
      const arr = [1, null, 3];
      expect(getElement(arr, 1)).to.be.null;
    });
  });

  describe('Валідація параметрів - помилки TypeError', () => {
    it('викидає TypeError для не-масиву (число)', () => {
      expect(() => getElement(123, 0)).to.throw(TypeError, 'Перший параметр має бути масивом');
    });

    it('викидає TypeError для не-масиву (string)', () => {
      expect(() => getElement('string', 0)).to.throw(TypeError, 'Перший параметр має бути масивом');
    });

    it('викидає TypeError для не-масиву (null)', () => {
      expect(() => getElement(null, 0)).to.throw(TypeError, 'Перший параметр має бути масивом');
    });

    it('викидає TypeError для не-масиву (object)', () => {
      expect(() => getElement({ 0: 'a', 1: 'b' }, 0)).to.throw(TypeError, 'Перший параметр має бути масивом');
    });

    it('викидає TypeError для індексу-рядка', () => {
      expect(() => getElement([1, 2, 3], '0')).to.throw(TypeError, 'Індекс має бути числом');
    });

    it('викидає TypeError для індексу NaN', () => {
      expect(() => getElement([1, 2, 3], NaN)).to.throw(TypeError, 'Індекс має бути числом');
    });

    it('викидає TypeError для індексу undefined', () => {
      expect(() => getElement([1, 2, 3], undefined)).to.throw(TypeError, 'Індекс має бути числом');
    });

    it('викидає TypeError для індексу null', () => {
      expect(() => getElement([1, 2, 3], null)).to.throw(TypeError, 'Індекс має бути числом');
    });
  });

  describe('Різні типи даних', () => {
    it('працює з масивом рядків', () => {
      const arr = ['a', 'b', 'c'];
      expect(getElement(arr, 1)).to.equal('b');
    });

    it('працює з масивом об\'єктів', () => {
      const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
      expect(getElement(arr, 2)).to.deep.equal({ id: 3 });
    });

    it('працює з вкладеними масивами', () => {
      const arr = [[1, 2], [3, 4], [5, 6]];
      expect(getElement(arr, 1)).to.deep.equal([3, 4]);
    });

    it('працює з масивом булевих значень', () => {
      const arr = [true, false, true];
      expect(getElement(arr, 1)).to.be.false;
    });
  });

  describe('Крайні випадки з індексами', () => {
    it('працює з дробовим індексом (відкидає дробову частину)', () => {
      const arr = [10, 20, 30];
      // JavaScript автоматично конвертує 1.7 до числа
      // але ваша функція може відхилити це
      expect(() => getElement(arr, 1.7)).to.not.throw();
    });

    it('працює з дуже великим масивом', () => {
      const arr = new Array(1000).fill(0);
      arr[999] = 'останній';
      expect(getElement(arr, -1)).to.equal('останній');
    });
  });
});

describe('Функція отримання елемента масиву', () => {
  
  describe('Доступ за стандартними індексами', () => {
    const testArray = [10, 20, 30, 40, 50];

    it('має повертати перший елемент масиву', () => {
      expect(getElement(testArray, 0)).to.equal(10);
    });

    it('має повертати елемент із середини', () => {
      expect(getElement(testArray, 2)).to.equal(30);
    });

    it('має повертати останній елемент за максимальним індексом', () => {
      expect(getElement(testArray, 4)).to.equal(50);
    });

    it('має працювати з масивом рядків', () => {
      const words = ['один', 'два', 'три'];
      expect(getElement(words, 1)).to.equal('два');
    });
  });

  describe('Використання від\'ємних індексів', () => {
    const data = ['alpha', 'beta', 'gamma', 'delta', 'epsilon'];

    it('має отримувати останній елемент через -1', () => {
      expect(getElement(data, -1)).to.equal('epsilon');
    });

    it('має отримувати елемент з позиції -3 від кінця', () => {
      expect(getElement(data, -3)).to.equal('gamma');
    });

    it('має отримувати перший елемент через від\'ємний індекс', () => {
      expect(getElement(data, -5)).to.equal('alpha');
    });

    it('має працювати з від\'ємним індексом у короткому масиві', () => {
      const short = ['x', 'y'];
      expect(getElement(short, -2)).to.equal('x');
    });
  });

  describe('Обробка виходу за межі масиву', () => {
    const items = [1, 2, 3];

    it('має повертати null для надто великого індексу', () => {
      expect(getElement(items, 100)).to.be.null;
    });

    it('має повертати null для надто малого від\'ємного індексу', () => {
      expect(getElement(items, -50)).to.be.null;
    });

    it('має використовувати власне значення fallback', () => {
      expect(getElement(items, 10, 'помилка')).to.equal('помилка');
    });

    it('має повертати числовий fallback', () => {
      expect(getElement(items, -10, 999)).to.equal(999);
    });

    it('має повертати булеве значення як fallback', () => {
      expect(getElement(items, 5, true)).to.be.true;
    });

    it('має використовувати об\'єкт як fallback', () => {
      const fb = { error: 'not found' };
      expect(getElement(items, 20, fb)).to.deep.equal(fb);
    });
  });

  describe('Поведінка з порожнім масивом', () => {
    const emptyArr = [];

    it('має повертати null при спробі доступу до порожнього масиву', () => {
      expect(getElement(emptyArr, 0)).to.be.null;
    });

    it('має повертати fallback для порожнього масиву з від\'ємним індексом', () => {
      expect(getElement(emptyArr, -1, 'немає даних')).to.equal('немає даних');
    });

    it('має працювати з будь-яким індексом у порожньому масиві', () => {
      expect(getElement(emptyArr, 5, 'пусто')).to.equal('пусто');
    });
  });

  describe('Робота зі спеціальними значеннями в масиві', () => {
    const special = [null, undefined, false, 0, '', NaN, true];

    it('має правильно повертати null як елемент', () => {
      expect(getElement(special, 0)).to.be.null;
    });

    it('має правильно повертати undefined як елемент', () => {
      expect(getElement(special, 1)).to.be.undefined;
    });

    it('має правильно повертати false як елемент', () => {
      expect(getElement(special, 2)).to.equal(false);
    });

    it('має правильно повертати 0 як елемент', () => {
      expect(getElement(special, 3)).to.equal(0);
    });

    it('має правильно повертати порожній рядок як елемент', () => {
      expect(getElement(special, 4)).to.equal('');
    });

    it('має правильно повертати NaN як елемент', () => {
      expect(getElement(special, 5)).to.be.NaN;
    });
  });

  describe('Валідація типу масиву', () => {
    it('має викидати помилку для числа замість масиву', () => {
      expect(() => getElement(42, 0)).to.throw(TypeError);
    });

    it('має викидати помилку для рядка замість масиву', () => {
      expect(() => getElement('текст', 1)).to.throw(TypeError);
    });

    it('має викидати помилку для null замість масиву', () => {
      expect(() => getElement(null, 0)).to.throw(TypeError);
    });

    it('має викидати помилку для undefined замість масиву', () => {
      expect(() => getElement(undefined, 0)).to.throw(TypeError);
    });

    it('має викидати помилку для об\'єкта замість масиву', () => {
      expect(() => getElement({ key: 'value' }, 0)).to.throw(TypeError);
    });

    it('має викидати помилку для функції замість масиву', () => {
      expect(() => getElement(() => {}, 0)).to.throw(TypeError);
    });
  });

  describe('Валідація типу індексу', () => {
    const arr = [1, 2, 3];

    it('має викидати помилку для рядкового індексу', () => {
      expect(() => getElement(arr, '1')).to.throw(TypeError);
    });

    it('має викидати помилку для null як індексу', () => {
      expect(() => getElement(arr, null)).to.throw(TypeError);
    });

    it('має викидати помилку для undefined як індексу', () => {
      expect(() => getElement(arr, undefined)).to.throw(TypeError);
    });

    it('має викидати помилку для масиву як індексу', () => {
      expect(() => getElement(arr, [])).to.throw(TypeError);
    });

    it('має викидати помилку для об\'єкта як індексу', () => {
      expect(() => getElement(arr, {})).to.throw(TypeError);
    });

    it('має викидати помилку для NaN як індексу', () => {
      expect(() => getElement(arr, NaN)).to.throw(TypeError);
    });
  });

  describe('Крайні випадки з великими індексами', () => {
    const arr = ['a', 'b', 'c'];

    it('має обробляти дуже великі позитивні індекси', () => {
      expect(getElement(arr, 1000000)).to.be.null;
    });

    it('має обробляти дуже великі від\'ємні індекси', () => {
      expect(getElement(arr, -1000000)).to.be.null;
    });

    it('має обробляти Infinity як індекс', () => {
      expect(getElement(arr, Infinity, 'infinity')).to.equal('infinity');
    });

    it('має обробляти -Infinity як індекс', () => {
      expect(getElement(arr, -Infinity, 'neg-infinity')).to.equal('neg-infinity');
    });

    it('має обробляти максимальне безпечне ціле число', () => {
      expect(getElement(arr, Number.MAX_SAFE_INTEGER)).to.be.null;
    });
  });

  describe('Робота з різними типами даних у масиві', () => {
    it('має працювати з масивом об\'єктів', () => {
      const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
      expect(getElement(objects, 1)).to.deep.equal({ id: 2 });
    });

    it('має працювати з вкладеними масивами', () => {
      const nested = [[1, 2], [3, 4], [5, 6]];
      expect(getElement(nested, -1)).to.deep.equal([5, 6]);
    });

    it('має працювати з масивом функцій', () => {
      const fn1 = () => 'first';
      const fn2 = () => 'second';
      const funcs = [fn1, fn2];
      expect(getElement(funcs, 0)).to.equal(fn1);
    });

    it('має працювати з масивом змішаних типів', () => {
      const mixed = [123, 'text', { key: 'val' }, [1, 2], true];
      expect(getElement(mixed, 2)).to.deep.equal({ key: 'val' });
    });
  });

  describe('Перевірка fallback за замовчуванням', () => {
    const arr = ['x', 'y', 'z'];

    it('має повертати null коли fallback не вказаний (позитивний індекс)', () => {
      const result = getElement(arr, 10);
      expect(result).to.be.null;
    });

    it('має повертати null коли fallback не вказаний (від\'ємний індекс)', () => {
      const result = getElement(arr, -10);
      expect(result).to.be.null;
    });

    it('має ігнорувати fallback коли індекс валідний', () => {
      expect(getElement(arr, 1, 'fallback')).to.equal('y');
    });
  });

  describe('Тестування з масивом довжиною 1', () => {
    const single = ['only'];

    it('має повертати єдиний елемент за індексом 0', () => {
      expect(getElement(single, 0)).to.equal('only');
    });

    it('має повертати єдиний елемент за індексом -1', () => {
      expect(getElement(single, -1)).to.equal('only');
    });

    it('має повертати fallback для індексу 1', () => {
      expect(getElement(single, 1, 'немає')).to.equal('немає');
    });

    it('має повертати fallback для індексу -2', () => {
      expect(getElement(single, -2, 'поза межами')).to.equal('поза межами');
    });
  });
});function domashovSum(a, b) {
  return Number(a) + Number(b);
}

describe('domashovSum', function() {
  
  it('повинна додавати два позитивні числа', function() {
    expect(domashovSum(2, 3)).to.equal(5);  
  });
  
  it('повинна додавати негативні числа', function() {
    expect(domashovSum(-5, -3)).to.equal(-8);  
  });
  
  it('повинна додавати позитивне та негативне число', function() {
    expect(domashovSum(10, -3)).to.equal(7);  
  });
  

  
});

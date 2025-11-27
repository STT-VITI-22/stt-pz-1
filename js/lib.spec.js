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
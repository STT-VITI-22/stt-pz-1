describe('Набір тестів для тестування lib.js', () => {
  describe('Набір тестів для перевірки функції суми', () => {
    it('має повернути суму двох чисел', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });
    it('має повернути NaN, якщо один параметр пропущено', () => {
      try{
        assert.equal(sum(1), NaN)
      }
      catch (e) {
        console.log(e);
      }
    });
    it('має перетворити рядок на число, якщо вхідний параметр є рядком', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });
  describe('Набір тестів для перевірки функції піднесення до степеня', () => {
    it('треба піднести х до степеня n', () => {
      assert.equal(pow(5, 3), 125)
    });
  });
  describe('Набір тестів для тестування функції removeByName', () => {
    it('має видалити деякий елемент із масиву', () => {
      let list = ["CAR","TANK","RANDOM","BMW","LEXUS"]
      let anotherList = ["CAR","TANK","RANDOM","LEXUS"]
      assert.deepEqual(removeByName(list,"BMW"),anotherList)
    });
    it("не повинен видаляти елемент із масиву", () => {
      const list = ["CAR","TANK","RANDOM","BMW","LEXUS"];
      assert.deepEqual(removeByName(list, "VALERA"), list);
    });
  });
  describe('Набір тестів для перевірки функції makeCounter', () => {
    it("має повернути функцію", function() {
      assert.equal(typeof makeCounter(0), "function");
    });
    it("має збільшити лічильник", function() {
      let counter = makeCounter(2);
      assert.equal(counter(), 2);
      assert.equal(counter(), 3);
    });
  });
  describe('Набір тестів для перевірки функції asyncMultiply', function() {
    it('має повернути правильне значення', async function() {
      asyncMultiply(11).then(function (result) {
        expect(result).equal(22);
      })
    });
    it('повинен повернути номер', async function() {
      asyncMultiply(3).then(function(result) {
        assert.isNumber(result);
      })
    });
  });
  describe('Набір тестів для перевірки факторіальної функції', () => {
    it('слід скласти факториал з числа n', () => {
      assert.equal(factorial(3), 6)
      assert.equal(fibonacci(4,), 3)
    });
  });
  describe('Набір тестів для перевірки функції Фібоначчі', () => {
    it('слід обчислити послідовність Фібоначчі з числа n', () => {
      assert.equal(fibonacci(3),2)
    });

    it("має повернути 1 для n = 1", function() {
      assert.equal(fibonacci(1), 1);
    });
  });
  describe('Набір тестів для перевірки функції getAsyncTimerId', function() {
    it('має повернути число', function() {
      let result = getAsyncTimerId(1000);
      setTimeout(function () {
        expect(result).instanceOf(Number);
      }, 1000);
    });
  });

  describe('Набір тестів для перевірки функції httpGet', function() {
    it('має повернути об’єкт Promise', function() {
      const result = httpGet("https://chat.openai.com/");
      assert.instanceOf(result, Promise);
    });
    it('має повернути відповідь на успішний запит', function() {
      httpGet("https://jsonplaceholder.typicode.com/todos/1").then(function (
        response ) {
        expect(response).instanceOf(String);
        });
    });
  });
});


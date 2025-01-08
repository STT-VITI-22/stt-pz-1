describe('Набор тестов для lib.js', () => {
  describe('Тестирование функции sum', () => {
    it('должна возвращать сумму двух чисел', () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it('должна возвращать NaN, если один параметр пропущен', () => {
      assert.isNaN(sum(1));
    });

    it('должна конвертировать строки в числа, если параметры переданы как строки', () => {
      assert.equal(sum('5', '1'), 6);
      assert.equal(sum(10, '1'), 11);
      assert.equal(sum('25', 5), 30);
    });
  });

  describe('Тестирование функции pow', () => {
    it('должна возводить x в степень n', () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(5, 0), 1);
      assert.equal(pow(3, 1), 3);
    });
  });

  describe('Тестирование функции removeByName', () => {
    it('должна удалять элемент из массива', () => {
      assert.deepEqual(removeByName(['apple', 'banana', 'cherry'], 'banana'), ['apple', 'cherry']);
    });

    it('не должна удалять элемент, если его нет в массиве', () => {
      assert.deepEqual(removeByName(['apple', 'banana', 'cherry'], 'orange'), ['apple', 'banana', 'cherry']);
    });
  });
});

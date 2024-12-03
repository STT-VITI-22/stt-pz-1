
# Project: STT-PZ-1

## Опис

У цьому проєкті реалізовано автоматизоване тестування функцій з файлу `lib.js` за допомогою фреймворків **Mocha** та **Chai**. Проєкт налаштований для запуску юніт-тестів у Node.js, а тести написані згідно з принципами **TDD (Test-Driven Development)** і **BDD (Behavior-Driven Development)**.

---

## Виконані зміни

1. **Налаштування середовища:**
   - Ініціалізовано проект за допомогою `npm init -y`.
   - Встановлено залежності:
     ```bash
     npm install mocha chai --save-dev
     ```
   - У `package.json` додано:
     ```json
     "type": "module"
     ```
     Це дозволяє використовувати ES модулі (ESM) у Node.js.

2. **Модифікація файлу `lib.js`:**
   - Додано `export` до всіх функцій, щоб їх можна було використовувати як модулі ES.
   - Наприклад:
     ```javascript
     export function sum(a, b) {
       return Number(a) + Number(b);
     }
     ```

3. **Написання тестів у `lib.spec.js`:**
   - Створено тести для функцій `sum`, `pow`, та `removeByName`.
   - Використано іменовані імпорти для функцій із `lib.js` та `assert` з `chai`:
     ```javascript
     import { assert } from 'chai';
     import { sum, pow, removeByName } from './lib.js';
     ```

4. **Організація тестів:**
   - Тести організовані за допомогою `describe` та `it` для логічного групування.
   - Наприклад:
     ```javascript
     describe('Test suite for testing sum function', () => {
       it('should return sum of two numbers', () => {
         assert.equal(sum(1, 2), 3);
       });
     });
     ```

---

## Інструкція для запуску

1. **Клонувати репозиторій:**
   ```bash
   git clone https://github.com/STT-VITI-22/stt-pz-1.git
2. **Перейти в репозиторій**
  ```bash 
  cd stt-pz-1
3. **Встановити залежності**
  ```bash 
  npm install
4. **Запустити тести** 
  ```bash
  npm test
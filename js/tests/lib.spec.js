import * as mocha from 'mocha';
import * as chai from 'chai';
import * as lib from '../lib.js';
import {pow, removeByName} from "../lib.js";

const {assert} = chai;
const {it, describe} = mocha;
const {sum} = lib;
const list = ['dog', 'cat', 'horse'];

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1))
    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(1, 2), 1);
      assert.equal(pow('2', '3'), 8);
      assert.equal(pow('3'), 1);
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {

      let resultList = ['cat', 'horse'];
      assert.deepEqual(removeByName(list, 'dog'), resultList);
    });

    it('should not remove element from array', () => {
      assert.deepEqual(removeByName(list, 'parrot'), list);
    });

    it('should throw TypeError on undefined parameter (Due to api error in service for example :) ) ' +
      'element from array', () => {
      assert.throws(() => removeByName(undefined), TypeError);
    });
  });
});


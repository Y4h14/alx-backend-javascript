#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculateNumber', () => {
  it('two float numbers', () => {
    assert.equal(calculateNumber(2.0, 4.0), 6);
  });
  it('a float number and a none float', () => {
    assert.equal(calculateNumber(2.0, 4), 6);
  });
  it('two none float numbers', () => {
    assert.equal(calculateNumber(2, 4), 6);
  });
  it('two fractional float numbers', () => {
    assert.equal(calculateNumber(2.6, 4.1), 7);
  });
  it('one fractional float numbers', () => {
    assert.equal(calculateNumber(2.3, 4.0), 6);
  });
  it('negative numbers', () => {
    assert.equal(calculateNumber(-2.0, -4.0), -6);
  });
  it('two zeros', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
});

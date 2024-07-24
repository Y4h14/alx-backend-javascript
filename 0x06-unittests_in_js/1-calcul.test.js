#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('test type SUM', () => {
    assert.equal(calculateNumber('SUM', 3.0, 2.0), 5);
  });
  it('test type SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.0, 2.0), 1);
  });
  it('test type DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 3.0, 3.0), 1);
  });
  it('test DIVIDE by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 3.0, 0), 'Error');
  });
});

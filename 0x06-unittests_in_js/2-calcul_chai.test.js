#!/usr/bin/node
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', () => {
  it('test type SUM', () => {
    expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
  });
  it('test type SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
  });
  it('test type DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
  });
  it('test DIVIDE by zero', () => {
    expect(calculateNumber('DIVIDE', 2.0, 0)).to.equal('Error');
  });
});

#!/usr/bin/node
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi', () => {
    // start spying on the Utils function seeing if it's called and
    // with which parameters
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(2, 2);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 2, 2)).to.be.true;
    // Replaces the spy with the original method.
    calculateNumberSpy.restore();
  });
});

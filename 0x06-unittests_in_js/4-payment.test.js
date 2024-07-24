#!/usr/bin/node
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPayemntRequestToApi', () => {
  it('call calculateNumber with the correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi('SUM', 2, 2);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.returned(4)).to.be.true;

    calculateNumberStub.restore();
  });
});

#!/usr/bin/node

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consoleLogStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleLogStub.restore();
  });

  it('should log "The total is: 8" when called with 4 and 2', () => {
    sendPaymentRequestToApi(4, 2);

    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 6')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 20')).to.be.true;
  });
});

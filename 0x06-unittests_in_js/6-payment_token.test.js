#!/usr/bin/node
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

// eslint-disable-next-line jest/valid-describe
describe('getPaymentTokenFromAPI', (done) => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('test with true', () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // eslint-disable-next-line jest/valid-expect
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
});

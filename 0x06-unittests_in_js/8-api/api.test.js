#!/usr/bin/node
const request = require('request');
const { expect } = require('chai');

describe('Test API', ()=>{
    it('get request to home directory', (done) => {
        request.get('http://localhost:7865', (err, res, body)=>{

            if(err) {
                done(err);
                return;
            }

            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});

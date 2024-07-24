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

    it('get request to /cart/:id directory with a valid id', (done) => {
        request.get('http://localhost:7865/cart/5', (err, res, body)=>{
            if(err) {
                done(err);
                return;
            }

            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 5');
            done();
        });
    });

    it('get request to /cart/:id directory with an invalid id', (done) => {
        request.get('http://localhost:7865/cart/p7', (err, res, body)=>{
            if(err) {
                done(err);
                return;
            }

            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});

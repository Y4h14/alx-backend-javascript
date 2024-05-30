#!/usr/bin/node
import Currency from './3-currency.js';

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount () {
    return this._amount;
  }

  get currency () {
    return this._currency;
  }

  set amount (amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amoutn must be a string');
    }
    this._amount = amount;
  }

  set currency (currency) {
    if (typeof currency !== 'object') {
      throw new TypeError('currency must be a currency');
    }
    this._currency = currency;
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  convertPrice (amount, conversionReate) {
    return amount * conversionReate;
  }
}

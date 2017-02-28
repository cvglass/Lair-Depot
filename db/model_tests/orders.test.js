'use strict'

const db = require('APP/db');
const Orders = require('../models/orders.js');
const {expect} = require('chai');


describe('Orders`', () => {
  before('wait for the db', () => db.didSync)

  describe('orders model definition test ', () => {

    var newOrder;
    var newestOrder;

    beforeEach(function () {
      newOrder = Orders.build({})
      newestOrder = Orders.build({})
    })

    it('schema design test', () => {
      expect(newOrder.price).to.equal(0.00);
      expect(newOrder.status).to.equal('created');
      expect(newestOrder.price).to.not.equal(1);
      expect(newestOrder.price).to.not.equal('not created');
    });

    it('tests change status instance method', () => {
      newestOrder.changeStatus();
      newOrder.changeStatus();
      expect(newOrder.status).to.equal('processing');
      newOrder.changeStatus('cancel');
      expect(newOrder.status).to.equal('cancelled');
      newestOrder.changeStatus('complete');
      expect(newestOrder.status).to.equal('completed');
    });
  });
});

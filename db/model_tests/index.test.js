'use strict'

const {expect} = require('chai')
var db = require('../index');
var User = db.User;
var Order = require('../models/orders');
var Product = require('../models/product');
var order_product = require('../models/order_product');

describe('Associations', function() {
  before('wait for the db', () => db.didSync)

  var order,
      product;
  beforeEach(function() {
    return Order.create({
      status: 'created',
      price: '1.00',
    }).then(() => {
      return Product.create({
      name: 'Seagulls',
      description: 'Flying birds',
      })
    }).then(() => {
      return order_product.create({
        order_id: 1,
        product_id: 1,
        quantity: 2,
      });
    })
  })

  it('has a on the cart"', function() {
    Order.findAll({
      where: {
        id: 1
      },
      include: [{model: Product}]
    }).then(instance => {
        // console.log('our instance', instance[0].dataValues.products);
      expect(instance[0].dataValues.products[0].name).to.equal('Seagulls')
    })
  });

})

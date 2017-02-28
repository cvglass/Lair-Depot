'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {

  before('wait for the db', () => db.didSync);

  var product;

  beforeEach(function () {
  product = Product.build({
          name: 'Laser Beam',
          description: 'This is a review of a product.',
          imageUrl: null,
        });
  });

  it('hook returns correctly formatted url', function() {
      product.save().then(function() {
        expect(product.imageUrl).to.equal('/img/laser-beam.png')
      })
  });

})

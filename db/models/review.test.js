'use strict'

const db = require('APP/db')
const Review = require('./review')
const {expect} = require('chai')

describe('Review', () => {

  before('wait for the db', () => db.didSync);

  var review;

  beforeEach(function () {
  review = Review.build({
          rating: 1,
          description: 'This is a review of a product.',
        });
  });

  it('inserts data into model', function() {
    expect(review.rating).to.equal(1);
    expect(review.description).to.equal('This is a review of a product.');
  });

})

const db = require('APP/db')
const Price = require('./price')

const {expect} = require('chai');

describe('Price', ()=>{
  before('wait for db', ()=> db.didSync);
  describe('price stuff',()=>{
    it('creates price ', ()=> 
      Price.create({value: '99.99'})
      .then(price => expect(price.getValue).to.equal(99.99)))
  })

});

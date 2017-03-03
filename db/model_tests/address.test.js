'use strict'

const db = require('APP/db');
const Address = require('../models/address');
const {expect} = require('chai');

describe('Address', ()=>{
  before('wait for db', () => db.didSync)

  describe('authenticate(plaintext: String) -> Boolean',() => {
    it('getter returns string of billing info', ()=>
      Address.create({
        street: '222 W Merchandise Mart Plaza #1212',
        city: 'Chicago',
        zip: '60654',
        state: 'IL',
        phone: '12345678910'
      })
      .then(address => expect(address.billingInfo).to.equal(`222 W Merchandise Mart Plaza #1212, Chicago, IL 60654`))
    )
  })
})

'use strict'
const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Address = db.model('addresses').sync({force: true});
const app = require('./start');

describe('/api/addresses', ()=> {
  describe('when posting ', () => {
     it.only('Post creates new instance', () =>
    request(app)
      .post('/api/addresses')
      .send({
        street: '222 W Merchandise Mart Plaza #1212',
        city: 'Chicago',
        zip: '60654',
        state: 'IL',
        phone: '123-4567-8910'
      })
      .expect(201)
    )
    //potential tests for admin functionality 
  },
  describe('when logged in', ()=> {
    it('GET /Addresses returns list of all addresses')
  })
)})

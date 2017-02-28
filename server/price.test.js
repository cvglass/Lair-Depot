const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Price = require('APP/db/models/price').sync({force: true});
const app = require('./start')

describe('/api/prices', () => {
  it.only('post /', () => 
    request(app)
      .post('/api/prices/')
      .send({
        value: '99:99'
      })
      .expect(201))
})

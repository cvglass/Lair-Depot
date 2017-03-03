const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Orders = require('APP/db/models/orders.js')
const app = require('../start.js')

describe('/api/orders', () => {

  var newOrder;

  beforeEach(function () {
    newOrder = Orders.build({});
  })

  describe('when not ADMIN user', () => {
    it('GET fails 403 (Forbidden)', () =>
      request(app)
        .get(`/api/orders`)
        .expect(403)
    )

    it('POST creates an order', () =>
      request(app)
        .post('/api/orders')
        .send({})
        .redirects(1)
        .then(res => {
          expect(res.body).to.contain({
            status: 'created',
            price: '0'
          })
          expect(201)
        })
    )
  })
})

'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('../auth'))
  .use('/users', require('./users'))
  .use('/addresses', require('./address'))
  .use('/categories', require('./categories'))
  .use('/products', require('./products'))
  .use('/orders', require('./orders.js'))
  .use('/carts', require('./shoppingCart'))
  .use('/cart', require('./cartProduct'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

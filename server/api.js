'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
<<<<<<< HEAD
  .use('/categories', require('./categories'))
=======
  .use('/orders', require('./routes/orders.js'))
>>>>>>> 5ef4563afab8ee1e49da0a61c9b916b727a22b65

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

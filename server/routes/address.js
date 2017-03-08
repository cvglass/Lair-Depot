const db = require('APP/db');
const Address = db.model('addresses');

const {mustBeLoggedIn, forbidden} = require('../auth.filters');

module.exports = require('express').Router()
  .get('/', forbidden('only admins can list addresses'), (req, res, next) =>
    Address.findAll()
    .then(addresses => res.json(addresses))
    .catch(next))
  .post('/', (req, res, next) =>
    Address.findOrCreate({where: req.body})
    .spread((address, created) => {
      console.log('here');
      res.status(201).json(address)})
    .catch(next))
  .get('/:id', (req, res, next) =>
    Address.findById(req.params.id)
    .then(address => res.json(address.billingInfo))
    .catch(next))

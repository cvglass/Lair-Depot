'use strict'

const db = require('APP/db')
const Price = db.model('prices');

const {forbidden} = require('./auth.filters');

module.exports = require('express').Router()
  .get('/', forbidden('only admins can view all prices'), (req, res, next)=>
    Price.findAll()
    .then(prices => res.json(prices))
    .catch(next))
  .post('/', (req, res, next) =>{
    console.log('what we passing ing', req.body)
      Price.findOrCreate({where: req.body})
      .spread( (price, created) => res.status(201).json(price))
      .catch(next)})
  .get('/:id', (req,res,next)=>
    Price.findById(req.params.id)
    .then(price => res.json(price))
    .catch(next))

'use strict'

const db = require('APP/db');
const Product = db.model('product');
const Price = db.model('price');
const Review = db.model('review');
const router = require('express').Router();


router.get('/', (req, res, next) => {
  Product.findAll({})
    .then(products => res.json(products))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [{model: Price},
              {model: Review}]
  })
    .then(product => res.json(product))
    .catch(next)
})

module.exports = router;

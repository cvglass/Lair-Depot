'use strict'

const db = require('APP/db');
const Product = db.model('products');
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
      id: req.params.id
    },
  })
    .then(product => res.json(product))
    .catch(next)
})

router.get('/:id/reviews', (req, res, next) => {
    Review.findAll({
      where: {
        product_id: req.params.id
      }
    })
    .then(reviews => {
      res.json(reviews);
    })
})

module.exports = router;

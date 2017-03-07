'use strict'

const db = require('APP/db');
const Product = db.model('products');
const Review = db.model('review');
const ProductCategory = db.model('productCategory')
const User = db.model('users');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  if (req.query.category) {
    ProductCategory.findOne({
      where: {
        id: req.query.category
      },
      include: [Product]
    })
    .then(category => res.json(category.products))
    .catch(next)
  } else if (req.query.name) {
    Product.findOne({
      where: {
        name: req.query.name
      }
    })
    .then(product => {
      if (!product) res.json({})
      else res.redirect(`/products/${product.id}`)})
    .catch(next)
  } else {
    Product.findAll({})
      .then(products => res.json(products))
      .catch(next)
  }
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
      },
      include: [{model: User}]
    })
    .then(reviews => {
      res.json(reviews);
    })
    .catch(next);
})

router.post('/:id/review', (req, res, next) => {
  Review.create({
    rating: req.body.rating,
    description: req.body.description,
    product_id: req.params.id,
    user_id: req.body.userId
  })
})

module.exports = router;

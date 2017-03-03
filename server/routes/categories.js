const db = require('APP/db');
const ProductCategory = db.model('productCategory');

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    ProductCategory.findAll()
    .then(categories => res.json(categories))
    .catch(next)
  })
  .get('/:id', (req, res, next) => {
    ProductCategory.findById(req.params.id)
    .then(category => res.json(category))
    .catch(next)
  })

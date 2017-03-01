const db = require('APP/db');
const Category = db.model('category');
const Product = db.model('products');

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Category.findAll()
    .then(categories => res.json(categories))
    .catch(next)
  })
  .get('/:id', (req, res, next) => {
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: Product} //Do we need eager loading? This join could be HUGE
        //What about our other HTTP methods?
      ]
    })
    .then(categoryWithProducts => res.json(categoryWithProducts))
    .catch(next)
  })

const db = require('APP/db');
const Category = db.model('categories');
const Product = db.model('product');

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
        {model: Product,
        where: {
          categoryId: req.params.id
        }}
      ]
    })
    .then(categoryWithProducts => res.json(categoryWithProducts))
    .catch(next)
  })

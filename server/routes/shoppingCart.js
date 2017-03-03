const db = require('APP/db')
const ShoppingCart = db.model('cart');

module.exports = require('express').Router()
  .get('/:userID', (req, res, next) => {
    ShoppingCart.findOne({where: {userId: req.params.userID}})
    .then(cart => res.json(cart))
    .catch(next)
  })
  .put('/:userID', (req, res, next) => {
    ShoppingCart.findOne({where: {userId: req.params.userID}})
    .then(cart => {
      cart.update(req.body);
      res.status(202).json(cart);
    })
    .catch(next)
  })
  .post('/', (req, res, next) => {
    ShoppingCart.create(req.body)
    .then(cart => res.status(201).json(cart))
    .catch(next)
  })
  .delete('/:userID', (req, res, next) => {
    ShoppingCart.destroy({where: {userId: req.params.userID}})
    .then( () => res.status(204))
  })

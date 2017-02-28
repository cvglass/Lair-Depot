const db = require('APP/db')
//ShoppingCart model doesn't actually exist yet
const ShoppingCart = db.model('cart');

module.exports = require('express').Router()
  .get('/:userID', (req, res, next) => {
    //ShoppingCart model doesn't actually exist yet
    let userID = req.params.userID;
    ShoppingCart.findOne({where: {userId: userID}})
    .then(cart => res.json(cart))
    .catch(next)
  })
  .put('/:userID', (req, res, next) => {
    let userID = req.params.userID;
    let cartInfo = req.body;
    ShoppingCart.findOne({where: {userId: userID}})
    .then(cart => {
      cart.update(cartInfo);
      res.status(204).json(cart);
    })
    .catch(next)
  })
  .post('/', (req, res, next) => {
    let newCart = req.body;
    ShoppingCart.create(newCart)
    .then(cart => res.status(201).json(cart))
    .catch(next)
  })
  .delete('/:userID', (req, res, next) => {
    let userID = req.params.userID;
    ShoppingCart.destroy({where: {userId: userID}})
    .then(cart => res.status(204).json(cart))
  })

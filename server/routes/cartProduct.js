const db = require('APP/db');
const cartProduct = db.model('cart_product');

module.exports = require('express').Router()
  .get('/:cartId', (req, res, next) => {
    cartProduct.findAll({where: { cart_id: req.params.cartId}})
    .then(cartProducts => res.json(cartProducts))
    .catch(next)
  })
  .post('/', (req, res, next) =>{
    console.log(req.body)
    cartProduct.create(req.body) // might need to be find or create then have conditional dispatch based on if new was created or not. OR HAVE PUT ALSO
    .then(newItem => res.json(newItem))
    .catch(next)
  })

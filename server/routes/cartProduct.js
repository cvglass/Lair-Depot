const db = require('APP/db');
const cartProduct = db.model('cart_product');

module.exports = require('express').Router()
  .get('/:cartId', (req, res, next) => {
    cartProduct.findAll({where: { cart_id: req.params.cartId}})
    .then(cartProducts => res.json(cartProducts))
    .catch(next)
  })
  // .post('/', (req, res, next) =>{
  //   console.log(req.body.cart_id)
  //   cartProduct.findOrCreate({where: {cart_id: req.body.cart_id, product_id: req.body.product_id }})
  //   .spread((newItem, created) => {
  //     cartProduct.update({quantity: req.body.quantity},{ where:{
  //       cart_id: newItem.cart_id,
  //       product_id: newItem.product_id
  //     }}
  //     )}
  //   )
  //   .then(product => res.json(product))
  //   .catch(next)
  // })
  .post('/', (req, res, next) => {
    cartProduct.findOrCreate({where: {cart_id: req.body.cart_id, product_id: req.body.product_id}})
    .spread((newItem, created) => {
      res.json({item: newItem, created: created})
    })
    .catch(next)
  })
  .put('/', (req, res, next) => {
    console.log(req.body)
    cartProduct.update({quantity: req.body.quantity}, { where: {
      cart_id: req.body.cart_id,
      product_id: req.body.cart_id
    }})
    .then(updatedItem => res.json(updatedItem))
    .catch(next)
  })

const db = require('APP/db');
const Orders = db.model('orders');
const Products = db.model('products');

const {forbidden} = require('../auth.filters');

module.exports = require('express').Router()
//temporarily remove the forbidden middleware
  .get('/', (req, res, next) => {
    Orders.findAll()
    .then(allOrders => res.json(allOrders))
    .catch(next)
  })
  .get('/:userID', (req, res, next) => {
    let ordersObj = {};
    Orders.findAll({
        where: {
          user_id: req.params.userID,
        }
    })
    .then( orders => res.json(orders))
  })
  .post('/', (req, res, next) => {
    Orders.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next)
  })
  .put('/:orderID/:status', (req, res, next) => {
    Orders.findOne({where: {id: req.params.orderID}})
    .then(order => {
      if (req.params.status === 'cancelled') order.cancelOrder();
      else {
        order.completeOrder();
        order.processOrder();
      }
      res.status(202).json(order);
    })
    .catch(next)
  })
  .delete('/:orderID', (req, res, next) => {
    Orders.findOne({where: {id: req.params.orderID}})
    .then(order => {
      order.destroy();
      res.status(204);
    })
  })

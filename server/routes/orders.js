const db = require('APP/db');
const Orders = db.model('orders');

const {forbidden} = require('../auth.filters');

module.exports = require('express').Router()
  .get('/', forbidden('only admins can list orders'), (req, res, next) => {
    Orders.findAll()
    .then(allOrders => res.json(allOrders))
    .catch(next)
  })
  .get('/:orderID', (req, res, next) => {
    Orders.findOne({where: {id: req.params.orderID}})
    .then(order => res.json(order))
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

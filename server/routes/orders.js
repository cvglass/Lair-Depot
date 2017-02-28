const db = require('APP/db');
const Orders = db.model('orders');

const {forbidden} = require('../auth.filters');


module.exports = require('express').Router()
  .get('/', forbidden('only admins can list orders'), (req, res, next) => {
    Orders.findAll()
    .then(allOrders => res.json(allOrders))
    .catch(next)
  })
  .post('/', (req, res, next) => {
    let newOrder = req.body;
    Orders.create({newOrder})
    .then(order => res.status(201).json(order))
    .catch(next)
  })
  .put('/:orderID/:status', (req, res, next) => {
    let orderID = req.params.orderID;
    let status = req.params.status;
    Orders.findOne({where: {id: orderID}})
    .then(order => {
      order.changeStatus(status);
      res.status(202).json(order);
    })
    .catch(next)
  })

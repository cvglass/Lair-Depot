const db = require('APP/db');
const Orders = db.model('orders');
//Maybe other routes should be in the routes folder?
const {forbidden} = require('../auth.filters');

module.exports = require('express').Router()
//Very good use of forbidden. Remember that forbidden middleware always throws error. Need to check user role.
  .get('/', forbidden('only admins can list orders'), (req, res, next) => {
    Orders.findAll()
    .then(allOrders => res.json(allOrders))
    .catch(next)
  })
  //What about get one order?
  //And delete
  .post('/', (req, res, next) => {
    let newOrder = req.body;
    Orders.create({newOrder}) //object inside an object. Just pass req.body
    .then(order => res.status(201).json(order)) //good use of 201
    .catch(next)
  })
  .put('/:orderID/:status', (req, res, next) => {
    let orderID = req.params.orderID;
    let status = req.params.status;   //Resembles an RPC call. mhmm
    Orders.findOne({where: {id: orderID}})
    .then(order => {
      order.changeStatus(status);
      res.status(202).json(order);
    })
    .catch(next)
  })

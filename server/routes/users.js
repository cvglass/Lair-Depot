'use strict'

const db = require('APP/db')
const User = db.model('users')
const Orders = db.model('orders')

const {mustBeLoggedIn, forbidden,} = require('../auth.filters')

//got rid of forbidden for now
module.exports = require('express').Router()
	.get('/', (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
	.put('/:id', (req, res, next) => {
		User.update({
			isAdmin: req.body.isAdmin
		},
			{where: {
				id: req.params.id
			},
			returning: true
		})
		.spread((number, updatedUser) => {
			let user = updatedUser[0];
			console.log(user);
			res.send(user)
		})
		.catch(next)
	})
	.get('/:id/orders', (req, res, next) => {
		Orders.findAll({
			where: {
				user_id: req.params.id
			}
		})
		.then(orders => res.json(orders))
		.catch(next)
	})

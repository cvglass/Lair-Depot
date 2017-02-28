const Sequelize = require('sequelize')
const db = require('APP/db')

const cart = db.define('cart', {})

module.exports = cart;

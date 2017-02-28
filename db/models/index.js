'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Category = require('./category');
const Orders = require('./orders');
const Address = require('./address');
const Product = require('./product');
const Price = require('./price');
const OAuth = require('./oauth')

OAuth.belongsTo(User)
User.hasOne(OAuth)
module.exports = {User, Address, Category, Orders, Product, Price}


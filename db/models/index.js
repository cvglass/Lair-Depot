'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Category = require('./category')
const OAuth = require('./oauth')
const Address = require('./address')
const Order = require('./orders');
const Review = require('./review');
const Product = require('./product');
const Price = require('./price');
const order_product = require('./order_product.js');


OAuth.belongsTo(User)
User.hasOne(OAuth)
//shopping cart table -- add userID
//shipping info -- add userID X
Address.belongsTo(User);
//order product join table -- add quantity, orderID, productID X
Order.belongsToMany(Product, {through: order_product});
Product.belongsToMany(Order, {through: order_product});
//order table -- add userID X
Order.belongsTo(User);
//review table -- add userID, productID X
Review.belongsTo(User);
Review.belongsTo(Product);
//product table -- add priceID, categoryID X
Product.belongsTo(Price);
Product.belongsTo(Category);


module.exports = {User, Address, Category, Review, Order, Price, Product}

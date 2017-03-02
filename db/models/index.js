'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Address = require('./address');
const Cart = require('./cart');
const cart_product = require('./cart_product.js');
const Category = require('./category');
const OAuth = require('./oauth');
const Order = require('./orders');
const order_product = require('./order_product.js');
const Product = require('./product');
const Review = require('./review');
const User = require('./user');

OAuth.belongsTo(User)
User.hasOne(OAuth)
//cart_product table
Cart.belongsToMany(Product, {through: cart_product});
Product.belongsToMany(Cart, {through: cart_product});

//shopping cart table -- add userID
Cart.belongsTo(User);

//shipping info -- add userID X
User.belongsTo(Address);

//order product join table -- add quantity, orderID, productID X
Order.belongsToMany(Product, {through: order_product});
Product.belongsToMany(Order, {through: order_product});

//order table -- add userID X
Order.belongsTo(User);

//review table -- add userID, productID X
Review.belongsTo(User);
Review.belongsTo(Product);

//product table -- add priceID, categoryID X
Product.belongsToMany(Category, {through: 'category_product'});

module.exports = {User, Address, Category, Review, Order, Product, Cart, cart_product, order_product};

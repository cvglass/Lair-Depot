const Sequelize = require('sequelize');
const db = require('APP/db');

const ProductCategory = db.define('productCategory', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = ProductCategory

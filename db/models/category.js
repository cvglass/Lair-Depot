const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('category', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Category

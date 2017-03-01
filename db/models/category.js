const Sequelize = require('sequelize');
const db = require('APP/db');

//Category of what? Categories occur all over
const Category = db.define('category', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Category

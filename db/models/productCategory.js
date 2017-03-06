const Sequelize = require('sequelize');
const db = require('APP/db');

const ProductCategory = db.define('productCategory', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  imageUrl: Sequelize.STRING
}, {
  hooks: {
    beforeValidate: function(category) {
      //made assumption about file location, name, type
      let fileName = category.name
          .toLowerCase()
          .split(' ')
          .join('-');
      category.imageUrl = `/img/${fileName}.jpg`;
    }
  }
})

module.exports = ProductCategory

'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: Sequelize.STRING,
  price: {
    type: Sequelize.DECIMAL,
    isNumeric: true,
  }
}, {
  hooks: {
    beforeValidate: function(product) {
      //made assumption about file location, name, type
      let fileName = product.name
          .toLowerCase()
          .split(' ')
          .join('-');
      product.imageUrl = `/img/${fileName}.jpg`;
    }
  }
})

module.exports = Product;

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
    type: Sequelize.STRING, //maybe Sequelize.TEXT
    allowNull: false,
  },
  imageUrl: Sequelize.STRING,
}, {
  hooks: {
    beforeValidate: function(product) {
      //made assumption about file location, name, type
      let fileName = product.name
          .toLowerCase()
          .split(' ')
          .join('-'); //good
      product.imageUrl = `/img/${fileName}.png`; //Can we just save it as a png???
    }
  }
})

module.exports = Product;

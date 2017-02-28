const db = require('../index.js');
const Sequelize = require('sequelize');

const order_product = db.define('order_product', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  }
});

module.exports = order_product;

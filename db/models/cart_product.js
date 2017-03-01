const db = require('../index.js');
const Sequelize = require('sequelize');

const cart_product = db.define('cart_product', {
  //only a quantity? Minimum is 1 or 0? This might get hard to maintain. Might want to allow 0 and just not display on frontend
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  }
});

module.exports = cart_product;

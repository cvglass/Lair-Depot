const db = require('../index.js');
const Sequelize = require('sequelize');

const Orders = db.define('orders', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'created',
    validate: {
      allowNull: false
    }
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0.00
  }
}, {
  instanceMethods: {
    changeStatus: function (cancelled) {
      if (this.status === 'created') this.status = 'processing'
      else if (cancelled === true && this.status === 'processing') this.status = 'pancelled'
    }
  }
});

module.exports = Orders;

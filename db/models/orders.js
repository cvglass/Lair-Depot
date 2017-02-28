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
    changeStatus: function (newStatus) {
      if (this.status === 'created') this.status = 'processing'
      else if (newStatus === "cancel" && this.status === 'processing') this.status = 'cancelled'
      else if (newStatus === "complete" && this.status === 'processing') this.status = 'completed'
    }
  }
});

module.exports = Orders;

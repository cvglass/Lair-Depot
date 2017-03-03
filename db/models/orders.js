const db = require('../index.js');
const Sequelize = require('sequelize');

const Orders = db.define('orders', {
  status: {
    type: Sequelize.ENUM('created', 'processing', 'completed', 'cancelled'),
    defaultValue: 'created',
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 0.00
  }
}, {
  instanceMethods: {
    // changeStatus: function (newStatus) {
    //   if (newStatus === 'cancel') this.status = 'cancelled'
    //   else if (this.status === 'created') this.status = 'processing'
    //   else if (newStatus === 'complete' && this.status === 'processing') this.status = 'completed'
    // },
    processOrder: function () {
      if (this.status === 'created') this.status = 'processing';
    },
    completeOrder: function () {
      if (this.status === 'processing') this.status = 'completed';
    },
    cancelOrder: function () {
      this.status = 'cancelled';
    }
  }
});

module.exports = Orders;

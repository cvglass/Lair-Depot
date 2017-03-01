const db = require('../index.js');
const Sequelize = require('sequelize');

const Orders = db.define('orders', {
  status: {
    type: Sequelize.STRING, //Maybe use an ENUM here.
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
    //This function feels weird. Sometimes we use newStatus, sometimes we don't. I'd stick with one API
    //And why is the status I input different than the DB status? confusing
    changeStatus: function (newStatus) {
      if (newStatus === 'cancel') this.status = 'cancelled'
      else if (this.status === 'created') this.status = 'processing'
      else if (newStatus === 'complete' && this.status === 'processing') this.status = 'completed'
    }
  }
});

module.exports = Orders;

'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('addresses',
  {
    street: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    zip: {// going to keep as a string because Sequelize can't validate integers
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [5,9],
        isInt: true,
      }
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isInt: true,
      }
    }
  },
  {
   getterMethods: {
     billingInfo: function(){
       return `${this.street}, ${this.city}, ${this.state} ${this.zip}`
     }
   }
  }
)

module.exports = Address;

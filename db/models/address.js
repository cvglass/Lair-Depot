'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('addresses',
  {
    street: {
      type: Sequelize.STRING,
      validate: {
        allowNull: false,
      }
    },
    city: {
      type: Sequelize.STRING,
      validate: {
        allowNull: false,
      }
    },
    zip: {// going to keep as a string because Sequelize can't validate integers
      type: Sequelize.STRING,
      validate: {
        allowNull: false,
        len: [5,9],
        isInt: true,
      }
    },
    state: {
      type: Sequelize.STRING,
      validate: {
        allowNull: false,
        len: [2,2]
      }
    },
    phone: {
      type: Sequelize.STRING,
      validate: {
        allowNull: false,
        isInt: true,
      }
    }
  },
  {
   getterMethods: {
     billingInfo: function(){
       return `${this.street}, ${this.city}, ${this.state} ${this.zip}` //new lines?
     }
   }
  }


)

///////so many blank lines/////


module.exports = Address;

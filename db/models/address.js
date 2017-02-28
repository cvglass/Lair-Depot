'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('addresses',
  {
    street: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      }
    },
    city: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      }
    },
    zip: {// int or string? check length of this?
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        len: [5,5],
        not: ["[a-z]",'i'],
      }
    },
    state: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      }
    },
    phone: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        not: ["[a-z]",'i'],
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

'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('addresses',
  {
    //Use allowNull since it applies to the DBMS
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
        len: [5,5], //what about 9 digit zips?
        not: ["[a-z]",'i'],
      }
    },
    state: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true, //max length 2
      }
    },
    phone: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        not: ["[a-z]",'i'], //can you say only numbers instead? what about symbols? maybe isNumeric: true instead.
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

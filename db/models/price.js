'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Price = db.define('prices', {
  value: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
},
{
  getterMethods: {
    getValue: function(){
      return +this.value; //should return it as a number that can be added
    }
  }
})

module.exports = Price;

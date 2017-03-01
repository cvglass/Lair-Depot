'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Price = db.define('prices', {
  value: {
    // Should be a decimal
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
},
{
  getterMethods: {
    //Why would we need this? What are we storing in the DB
    getValue: function(){
      return +this.value; //should return it as a number that can be added
    }
  }
})

module.exports = Price;

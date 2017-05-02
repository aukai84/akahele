'use strict';
let {reduceNationData} = require('../lib/modules/parsers.js');
let array = require('../lib/data/json/YEAR_2012');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NationCrimes', reduceNationData(array));
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('NationCrimes', reduceNationData(array));
  }
};

'use strict';
let {reduceNationData} = require('../lib/modules/parsers.js');
let array = require('../lib/data/json/YEAR_2013');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NationCrimes', reduceNationData(array, 2013));
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('NationCrimes', reduceNationData(array, 2013));
  }
};

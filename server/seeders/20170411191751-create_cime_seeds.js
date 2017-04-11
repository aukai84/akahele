'use strict';
 let parseCsv = require('../lib/seed-data').parseCsv;
module.exports = {
  up: function (queryInterface, Sequelize) {

    parseCsv('../lib/2015_CRIME.csv', 2015, queryInterface, 'bulkInsert');
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    parseCsv('../lib/2015_CRIME.csv', 2015, queryInterface, 'bulkDelete');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

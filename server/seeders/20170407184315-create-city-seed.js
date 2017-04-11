'use strict';
let data2015 = require('../lib/2015_CRIME.csv');
console.log("data", data2015)

console.log(parsed2015)

module.exports = {
  up: function (queryInterface, Sequelize) {
    console.log(parsed2015)
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

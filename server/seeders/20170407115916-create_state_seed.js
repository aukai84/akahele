'use strict';
let stateNames = require('../lib/seed-data').stateNames;


module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('States', stateNames.map(state => {
        return {
            name: state,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }));
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('States', stateNames.map(state => {
        return {
            name: state,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }));
  }
};

'use strict';

let cityNames = require('../lib/data/json/cities.json');

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Cities', cityNames.map(data => {
        return {
            name: data.City,
            state: data.State,
            state_id: data.state_id,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }));
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Cities', cityNames.map(data => {
        return {
            name: data.City,
            state: data.State,
            state_id: data.state_id,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }));
  }
};

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CrimeIncidents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blockaddress: {
        type: Sequelize.STRING
      },
      cmagency: {
        type: Sequelize.STRING
      },
      cmid: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      kilonbr: {
        type: Sequelize.STRING
      },
      objectid: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      side: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('CrimeIncidents');
  }
};
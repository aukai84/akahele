'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Crimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      population: {
        type: Sequelize.INTEGER
      },
      violent_crime: {
        type: Sequelize.INTEGER
      },
      murder_manslaughter: {
        type: Sequelize.INTEGER
      },
      rape_revised: {
        type: Sequelize.INTEGER
      },
      rape_legacy: {
        type: Sequelize.INTEGER
      },
      robbery: {
        type: Sequelize.INTEGER
      },
      aggravated_assault: {
        type: Sequelize.INTEGER
      },
      property_crime: {
        type: Sequelize.INTEGER
      },
      burglary: {
        type: Sequelize.INTEGER
      },
      larceny_theft: {
        type: Sequelize.INTEGER
      },
      motor_vehicle_theft: {
        type: Sequelize.INTEGER
      },
      arson: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Crimes');
  }
};
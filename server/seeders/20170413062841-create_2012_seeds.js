'use strict';

let year2012 = require('../lib/data/json/YEAR_2012.json');

module.exports = {
  up: function (queryInterface, Sequelize) {

   return queryInterface.bulkInsert('Crimes', year2012.map(crime => {
        return {
            year: crime.year,
            population: crime.population,
            violent_crime: crime.violent_crime,
            murder_and_manslaughter: crime.murder_and_manslaughter,
            rape: crime.rape,
            robbery: crime.robbery,
            aggravated_assault: crime.aggravated_assault,
            property_crime: crime.property_crime,
            burglary: crime.burglary,
            larceny_theft: crime.larceny_theft,
            motor_vehicle_theft: crime.motor_vehicle_theft,
            arson: crime.arson,
            city: crime.City,
            state: crime.State,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }));
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Crimes', year2012.map(crime => {
        return {
            year: crime.year,
            population: crime.population,
            violent_crime: crime.violent_crime,
            murder_and_manslaughter: crime.murder_and_manslaughter,
            rape: crime.rape,
            robbery: crime.robbery,
            aggravated_assault: crime.aggravated_assault,
            property_crime: crime.property_crime,
            burglary: crime.burglary,
            larceny_theft: crime.larceny_theft,
            motor_vehicle_theft: crime.motor_vehicle_theft,
            arson: crime.arson,
            city: crime.City,
            state: crime.State,
            createdAt: new Date(),
            updatedAt: new Date()
        }

    }));
  }
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Crimes', [{
        year: 2011,
        population: 963465,
        violent_crime: 2370,
        murder_and_manslaughter: 14,
        rape: 203,
        robbery: 821,
        aggravated_assault: 1332,
        property_crime: 30612,
        burglary: 5373,
        larceny_theft: 21987,
        motor_vehicle_theft: 3252,
        arson: 228,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        year: 2012,
        population: 975875 ,
        violent_crime: 2336,
        murder_and_manslaughter: 11,
        rape: 165,
        robbery: 914,
        aggravated_assault: 1246,
        property_crime: 29445,
        burglary: 4713,
        larceny_theft: 21978,
        motor_vehicle_theft: 2754,
        arson: 210,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        year: 2013,
        population: 983429,
        violent_crime: 2276,
        murder_and_manslaughter: 18,
        rape: 221,
        robbery: 743,
        aggravated_assault: 1294,
        property_crime: 31544,
        burglary: 4813,
        larceny_theft: 23059,
        motor_vehicle_theft: 3672,
        arson: 389,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        year: 2014,
        population: 983429,
        violent_crime: 2273,
        murder_and_manslaughter: 19,
        rape: 210,
        robbery: 768,
        aggravated_assault: 1166,
        property_crime: 30663,
        burglary: 4540,
        larceny_theft: 22221,
        motor_vehicle_theft: 3902,
        arson: 427,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ])
  },

  down: function (queryInterface, Sequelize) {

        return queryInterface.bulkDelete('Crimes', [{
        year: 2011,
        population: 963465,
        violent_crime: 2370,
        murder_and_manslaughter: 14,
        rape: 203,
        robbery: 821,
        aggravated_assault: 1332,
        property_crime: 30612,
        burglary: 5373,
        larceny_theft: 21987,
        motor_vehicle_theft: 3252,
        arson: 228,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        year: 2012,
        population: 963465,
        violent_crime: 2336,
        murder_and_manslaughter: 11,
        rape: 165,
        robbery: 914,
        aggravated_assault: 1246,
        property_crime: 29445,
        burglary: 4713,
        larceny_theft: 21978,
        motor_vehicle_theft: 2754,
        arson: 210,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        year: 2013,
        population: 983429,
        violent_crime: 2276,
        murder_and_manslaughter: 18,
        rape: 221,
        robbery: 743,
        aggravated_assault: 1294,
        property_crime: 31544,
        burglary: 4813,
        larceny_theft: 23059,
        motor_vehicle_theft: 3672,
        arson: 389,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        year: 2014,
        population: 983429,
        violent_crime: 2273,
        murder_and_manslaughter: 19,
        rape: 210,
        robbery: 768,
        aggravated_assault: 1166,
        property_crime: 30663,
        burglary: 4540,
        larceny_theft: 22221,
        motor_vehicle_theft: 3902,
        arson: 427,
        city: 'Honolulu',
        state: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ])
  }
};

'use strict';

let nicksData = require('../lib/data/json/HawaiiIncidents.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('CrimeIncidents', nicksData.map(incidents => {
        return {
            blockaddress: incidents.blockaddress,
            cmagency: incidents.cmagency,
            cmid: incidents.cmid,
            date: incidents.date,
            kilonbr: incidents.kilonbr,
            objectid: incidents.objectid,
            score: incidents.score,
            side: incidents.side,
            status: incidents.status,
            type: incidents.type,
            longitude: incidents.longitude,
            latitude: incidents.latitude,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }))
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
    return queryInterface.bulkDelete('CrimeIncidents', nicksData.map(incidents => {
        return {
            blockaddress: incidents.blockaddress,
            cmagency: incidents.cmagency,
            cmid: incidents.cmid,
            date: incidents.date,
            kilonbr: incidents.kilonbr,
            objectid: incidents.objectid,
            score: incidents.score,
            side: incidents.side,
            status: incidents.status,
            type: incidents.type,
            longitude: incidents.longitude,
            latitude: incidents.latitude,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }))
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

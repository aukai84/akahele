'use strict';
module.exports = function(sequelize, DataTypes) {
  var CrimeIncident = sequelize.define('CrimeIncident', {
    blockaddress: DataTypes.STRING,
    cmagency: DataTypes.STRING,
    cmid: DataTypes.STRING,
    date: DataTypes.STRING,
    kilonbr: DataTypes.STRING,
    objectid: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    side: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CrimeIncident;
};
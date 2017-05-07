'use strict';
module.exports = function(sequelize, DataTypes) {
  var geocodedtraffic = sequelize.define('geocodedtraffic', {
    trafficId: DataTypes.INTEGER,
    trafficDate: DataTypes.STRING,
    trafficAddress: DataTypes.STRING,
    trafficType: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return geocodedtraffic;
};
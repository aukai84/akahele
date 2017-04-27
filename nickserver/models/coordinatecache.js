'use strict';
module.exports = function(sequelize, DataTypes) {
  var CoordinateCache = sequelize.define('CoordinateCache', {
    address: DataTypes.STRING,
    date: DataTypes.STRING,
    type: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CoordinateCache;
};
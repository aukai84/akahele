'use strict';
module.exports = function(sequelize, DataTypes) {
  var County = sequelize.define('County', {
    name: DataTypes.STRING,
    crime_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return County;
};
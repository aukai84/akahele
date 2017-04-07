'use strict';
module.exports = function(sequelize, DataTypes) {
  var Year = sequelize.define('Year', {
    year: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Year;
};
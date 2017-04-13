'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    state_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return City;
};
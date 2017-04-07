'use strict';
module.exports = function(sequelize, DataTypes) {
  var State = sequelize.define('State', {
    name: DataTypes.STRING,
    county_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return State;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var County = sequelize.define('County', {
    name: DataTypes.STRING,
    state_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return County;
};
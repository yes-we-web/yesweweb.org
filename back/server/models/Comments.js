'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};
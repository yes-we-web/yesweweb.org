'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.Article, {
      foreignKey: 'articleId',
      onDelete: 'CASCADE',
    });
  };
  return Comments;
};
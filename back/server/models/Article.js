'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Article.associate = function(models) {
    Article.hasMany(models.Comments, {
      foreignKey: 'articleId',
      as: 'comments',
    });
  };
  return Article;
};
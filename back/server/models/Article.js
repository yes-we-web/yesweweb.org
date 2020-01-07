"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER
    },
    {}
  );
  Article.associate = function(models) {
    Article.hasMany(models.Comments, {
      foreignKey: "articleId",
      as: "comments"
    });
    Article.hasMany(models.Categories, {
      foreignKey: "articleId",
      as: "categories"
    });
    Article.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Article;
};

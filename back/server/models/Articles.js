"use strict";
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define(
    "Articles",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  Articles.associate = function(models) {
    Articles.hasMany(models.Comments, {
      foreignKey: "articleId",
      as: "comments"
    });
    Articles.hasMany(models.Categories, {
      foreignKey: "articleId",
      as: "categories"
    });
    Articles.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Articles;
};

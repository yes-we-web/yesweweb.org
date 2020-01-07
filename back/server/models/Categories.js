"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      content: DataTypes.STRING,
      articleId: DataTypes.INTEGER
    },
    {}
  );
  Categories.associate = function(models) {
    Categories.belongsTo(models.Articles, {
      foreignKey: "articleId",
      onDelete: "CASCADE"
    });
  };
  return Categories;
};

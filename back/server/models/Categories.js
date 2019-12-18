"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    content: DataTypes.STRING
  }, {});
  Categories.associate = function(models) {
    Categories.belongsTo(models.Article, {
      foreignKey: "articleId",
      onDelete: "CASCADE",
    });
  };
  return Categories;
};

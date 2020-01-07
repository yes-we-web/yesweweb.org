"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      content: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
      articleId: DataTypes.INTEGER
    },
    {}
  );
  Comments.associate = function(models) {
    Comments.belongsTo(models.Articles, {
      foreignKey: "articleId",
      onDelete: "CASCADE"
    });
  };
  return Comments;
};

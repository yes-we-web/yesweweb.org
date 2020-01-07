"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      lastname: DataTypes.STRING,
      firstname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Users.associate = function(models) {
    Users.hasMany(models.Articles, {
      foreignKey: "userId",
      as: "articles"
    });
  };
  return Users;
};

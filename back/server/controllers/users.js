const bcrypt = require("bcrypt");
//const jwtUtils = require("../utils/jwt.utils");
//const asyncLib = require("async");
const Users = require("../models/").Users;

module.exports = {
  register: function(req, res) {
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const email = req.body.email;
    const password = req.body.password;

    if (
      email == null ||
      firstname == null ||
      lastname == null ||
      password == null
    ) {
      return res.status(400).json({ error: "missing parameters" });
    }

    Users.findOne({
      attributes: ["email"],
      where: { email: email }
    })
      .then(function(userFound) {
        if (!userFound) {
          bcrypt.hash(password, 5, function(err, bcryptedPassword) {
            const newUser = Users.create({
              lastname: lastname,
              firstname: firstname,
              email: email,
              password: bcryptedPassword,
              isAdmin: 0
            })
              .then(function(newUser) {
                return res.status(201).json({
                  userId: newUser.id
                });
              })
              .catch(function(err) {
                return res.status(500).json({ error: "cannot add user" });
              });
          });
        } else {
          return res.status(409).json({ error: "user already exist" });
        }
      })
      .catch(function(err) {
        return res.status(500).json({ error: "unable to verify user" });
      });
  },
  login: function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (email == nul || password == nul) {
      return res.status(400).json({ error: "missing paramaters" });
    }
    Users.findOne({
      where: { email: email }
    })
      .then(function(userFound) {
        if (userFound) {
          bcrypt.compare(password, userFound.password, function(
            errBycrypt,
            resBycrypt
          ) {
            if (resBycrypt) {
              return res.status(200).json({
                userId: newUser.id,
                token: "THE TOKEN"
              });
            } else {
              return res.status(403).json({ error: "invalid password" });
            }
          });
        } else {
          return res.status(404).json({ error: "user not exist in DB" });
        }
      })
      .catch(function(err) {
        return res.status(500).json({ error: "unable to verify user" });
      });
  }
};

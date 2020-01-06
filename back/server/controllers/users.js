const bcrypt = require("bcrypt");
const jwtUtils = require("../../utils/jwt.utils");
//const asyncLib = require("async");
const Users = require("../models/").Users;


const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,30}$/;

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
    };   
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ 'error': 'email is not valid' });
    };
    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ 'error': 'password invalid (must length 4 - 30 and include 1 number at least)' });
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

    if (email == null || password == null) {
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
                userId: userFound.id,
                token: jwtUtils.generateTokenForUser(userFound)
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
  },
  getUserProfile: function(req,res){
    const headerAuth=req.headers['authorization'];
    const userId      = jwtUtils.getUserId(headerAuth);

  if (userId < 0)
    return res.status(400).json({ 'error': 'wrong token' });
   Users.findOne({
      attributes: [ 'id','firstname','lastname','email' ],
      where: { id: userId }
    }).then(function(user) {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(404).json({ 'error': 'user not found' });
      }
    }).catch(function(err) {
      res.status(500).json({ 'error': 'cannot fetch user' });
    });
  }
};
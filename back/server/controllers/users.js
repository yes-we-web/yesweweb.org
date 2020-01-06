const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");
const asyncLib = require("async");
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
  },
  login: function(req, res) {}
};

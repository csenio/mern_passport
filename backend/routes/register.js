var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/users");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/secureLogin");

router.post("/register", function(req, res, next) {
  //   res.send("respond with a resource");
  console.log(req);
  const newUser = new User({
    username: req.body.Registername,
    email: req.body.Registeremail,
    password: req.body.Registerpassword
  });
  newUser
    .save()
    .then(user => {
      console.log("FUCK YES");
    })
    .catch(error => {
      console.log("error", error);
    });
});

router.post("/login", function(req, res, next) {
  //   res.send("respond with a resource");
  console.log(req);
});

module.exports = router;

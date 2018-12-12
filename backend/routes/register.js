var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/users");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/secureLogin");

router.post("/register", function(req, res, next) {
  //   res.send("respond with a resource");
  console.log(req);

  User.findOne({ username: req.body.Registername }).then(user => {
    if (user !== null) {
      res.send({ error: "user exists" });
    } else {
      bcrypt.hash(req.body.Registerpassword, saltRounds, function(err, hash) {
        const newUser = new User({
          username: req.body.Registername,
          email: req.body.Registeremail,
          password: hash
        });
        newUser
          .save()
          .then(user => {
            res.send({ success: "new user" });
            console.log("F*ck YES");
          })
          .catch(error => {
            console.log("error", error);
          });
      });
    }
  });
});

router.post("/login", function(req, res, next) {
  //   res.send("respond with a resource");
  console.log(req);
});

module.exports = router;

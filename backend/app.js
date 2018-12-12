var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("./models/users");
require("./configs/passport");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://localhost:3000"]
  })
);

app.use(
  session({
    secret: "abcde",
    resave: true,
    saveUninitialized: true
  })
);

app.use("/", indexRouter);
app.use("/", require("./routes/register"));

module.exports = app;

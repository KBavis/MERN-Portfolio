var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

var indexRouter = require("./routes/index");
var projectsRouter = require("./routes/projects");
var emailRouter = require("./routes/email");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public", "build")));

app.use("/", indexRouter);
app.use("/projects", projectsRouter);
app.use("/api/email", emailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//connect to db
// mongoose.connect("mongodb://mongo:27017/test", { useNewUrlParser: true });

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "CONNECTION ERROR"));
// db.once("open", function () {
//   console.log("Connected to db");
// });

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

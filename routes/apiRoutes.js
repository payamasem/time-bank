// Require the necessary files and packages
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index"); // Render the index page upon load to prompt user to log in
  });


}

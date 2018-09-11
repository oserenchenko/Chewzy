var db = require("../models");
var restaurantData = [];

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/home", function(req, res) {
    res.render("index", {
      msg: "Home!"
    });
  });

  app.get("/search_results", function(req, res) {
    res.render("results", {
      restaurants: restaurantData
    });
    restaurantData = [];
  });

  // search post request
  app.post("/search_results", function(req, res) {
    restaurantData.push(req.body);
    res.json(req.body);
  });

  app.get("/user", function(req, res) {
    res.render("user", {
      text: "UserName"
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

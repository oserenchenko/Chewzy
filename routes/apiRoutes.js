var db = require("../models");
var restaurantData = [
  {
    // one: "hello"
  }
];

module.exports = function(app) {
  app.get("/api/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // Get all examples
  app.get("/api/search_results", function(req, res) {
    res.json(restaurantData);
  });

  // Create a new example
  app.post("/api/search_results", function(req, res) {
    restaurantData.push(req.body);
    res.json(req.body);
  });

  app.post("/api/users", function(req, res) {
    db.User.create({
      email: req.body.email,
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbExample) {
      var emailArr = [];
      for (var i = 0; i < dbExample.length; i++) {
        emailArr.push({ email: dbExample[i].email });
      }
      res.json(emailArr);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

var db = require("../models");
var restaurantData = [{
  one: "hello"
}];

module.exports = function(app) {
  app.get("/api/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });


  app.post("/api/users", function(req, res) {
    db.User.findOrCreate({
      where: {
        email: req.body.email
      }
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

};

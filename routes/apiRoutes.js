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
        emailArr.push({
          email: dbExample[i].email
        });
      }
      res.json(emailArr);
    });
  });

  //======================
  //FAVORITES
  //======================

  app.post("/api/favorite", function(req, res) {
    db.Favorite.create(req.body).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // app.get("/api/favorite/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Favorite]
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
};

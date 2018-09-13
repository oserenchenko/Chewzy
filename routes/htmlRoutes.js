var db = require("../models");
var restaurantData;
var oneRestaurant;
var user;
var email;

module.exports = function(app) {
  // Load index page

  app.get("/home", function(req, res) {
    res.render("home");
  });

  app.get("/search_results", function(req, res) {
    res.render("results", {
      restaurants: restaurantData,
      user: user
    });
  });

  // search post request
  app.post("/search_results", function(req, res) {
    restaurantData = req.body.data;
    user = req.body.user;
    console.log(user);
    // console.log(restaurantData);
    // console.log(user);
    res.json(req.body);
  });

  app.get("/one_result", function(req, res) {
    res.render("one_result", {
      restaurant: oneRestaurant,
      user: user
    });
  });

  // search post request
  app.post("/one_result", function(req, res) {
    oneRestaurant = req.body.data;
    user = req.body.user;
    console.log(user);
    res.json(req.body);
  });

  app.get("/user", function(req, res) {
    res.render("user", {
      text: "UserName"
    });
  });

  app.get("/favorites", function(req, res) {
    console.log("second");
    console.log(email);
    db.Favorite.findAll({
      where: {
        email: email
      }
    }).then(function(dbFavorite) {
      console.log("third");
      console.log(dbFavorite);

      res.render("favorites", {
        email: email,
        results: dbFavorite
      });
    });
  });

  app.post("/favorites", function(req, res) {
    email = req.body.email;
    res.json(req.body);
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
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

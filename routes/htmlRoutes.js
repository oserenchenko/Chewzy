var db = require("../models");
var restaurantData;
var oneRestaurant;
var user;

module.exports = function(app) {
  // Load index page


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
    console.log(restaurantData);
    console.log(user);
    res.json(req.body);
  });

  app.get("/one_result", function(req, res) {
    res.render("one_result", {
      restaurant: oneRestaurant

    });
  });

  // search post request
  app.post("/one_result", function(req, res) {
    oneRestaurant = req.body.data;
    user = req.body.user;
    console.log(oneRestaurant);
    res.json(req.body);
  });

  app.get("/user", function(req, res) {
    res.render("user", {
      text: "UserName"
    });
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

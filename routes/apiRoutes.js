var db = require("../models");


module.exports = function(app) {
  //======================
  //FAVORITES
  //======================

  app.post("/api/favorite", function(req, res) {
    db.Favorite.create(req.body).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });
};

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/search_results", function(req, res) {
    res.json();
  });

  // Create a new example
  app.post("/api/search_results", function(req, res) {
    res.send(req.body.data);
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

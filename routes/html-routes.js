

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads home
  app.get("/", function(req, res) {
    res.render("home")
  });


};


var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
require("dotenv").config();
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./routes/article-api-routes");
app.use(express.static("public"));
app.use(logger("dev"));
// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
// Static directory
// =============================================================
// Require all models
var db = require("./models");
var PORT = process.env.PORT || 5000;


// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/fashionArticles", {
    useNewUrlParser: true
});


// Start the server
app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
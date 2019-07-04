var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");
var express = require('express');
var router = express.Router();

// router
// =============================================================

    router.get('/', function(req, res, next) {
        db.Article.find({})
        .then(function (dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            res.render("home", {Articles: dbArticle});
            // res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
      
    });    

router.get("/scrape", function (req, res) {
    axios.get("https://www.nytimes.com/section/fashion").then(function (response) {
        var getArticle = cheerio.load(response.data);
        getArticle("article h2").each(function (i, element) {
            // Save an empty result object
            var result = {};
            result.title = getArticle(this)
                .children("a")
                .text();
            result.link = getArticle(this)
                .children("a")
                .attr("href");
            
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
                .then(function (dbArticle) {
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    console.log(err);
                });
        });
        res.send("Scrape Complete");
    });
});

router.post("/scrape", function(req, res) {
    db.Article.create(req.body).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });



router.get("/articles", function (req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
        .then(function (dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

module.exports = router;


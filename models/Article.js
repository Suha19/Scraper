var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  
  link: {
    type: String,
    required: true
  },
 
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  
  image: {
    type: Schema.Types.ObjectId,
    ref: "Image"
    
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);
// $("#scrapArticle").click(function(event){
    
//   event.preventDefault();
//   var article = {
//     title: $("#ArticleTitle").val(),
//     link:$("#articleLink").val(),  
//   }

//   $.post("/api/Article",article)
//   .then(function(data){
//     console.log(data);
//   })
// })

// Export the Article model
module.exports = Article;

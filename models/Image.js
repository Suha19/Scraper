var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ImageSchema object
// This is similar to a Sequelize model
var ImageSchema = new Schema({
  // `title` is of type String
  image: String,
  
 
});

// This creates our model from the above schema, using mongoose's model method
var Image = mongoose.model("Image", ImageSchema);

// Export the Image model
module.exports = Image;

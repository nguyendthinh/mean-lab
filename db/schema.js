var mongoose = require('mongoose');

mongoose.Promise = global.Promise
//
// var Schema = mongoose.Schema,
//     ObjectId = Schema.ObjectId

var SundaeSchema = new mongoose.Schema ({
  flavor: String,
  ingredients: String,
  photo: String
});

mongoose.model("Sundae", SundaeSchema);
mongoose.connect("mongodb://localhost/sundae");

module.exports = mongoose;

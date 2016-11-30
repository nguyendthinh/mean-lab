require("../db/schema")
var mongoose = require('mongoose')

var InstructorModel = mongoose.model("Instructor")
module.exports = InstructorModel

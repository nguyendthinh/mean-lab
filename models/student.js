require("../db/schema")
var mongoose = require('mongoose')

var StudentModel = mongoose.model("Student")
module.exports = StudentModel

var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var StudentSchema = new Schema ({
  name: String
})

var InstructorSchema = new Schema ({
  name: String,
  student: [StudentSchema]
})

mongoose.model("Instructor", InstructorSchema)
mongoose.model("Student", StudentSchema)

var mongoose = require('mongoose')

var conn = mongoose.connect('mongodb://localhost/students')

var InstructorModel = require("../models/instructor")
var StudentModel = require("../models/student")

InstructorModel.remove({}, function(err){
})
StudentModel.remove({}, function(err){
})

var instructor1 = new InstructorModel({name: "bob"})
var instructor2 = new InstructorModel({name: "charlie"})
var instructor3 = new InstructorModel({name: "tom"})

var student1 = new StudentModel({name: "diana"})
var student2 = new StudentModel({name: "thinh"})
var student3 = new StudentModel({name: "ba"})
var student4 = new StudentModel({name: "sam"})
var student5 = new StudentModel({name: "adrienne"})
var student6 = new StudentModel({name: "juliet"})

var instructors = [instructor1, instructor2, instructor3]
var students = [student1, student2, student3, student4, student5, student6]

for(var i = 0; i < instructors.length; i++){
  console.log(instructors[i])
  instructors[i].student.push(students[i], students[i+3])
  instructors[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("instructor was saved")
    }
  })
}

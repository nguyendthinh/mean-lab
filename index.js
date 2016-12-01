var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require ("./db/schema");
var bodyParser = require("body-parser");

var app = express();

var Sundae = mongoose.model("Sundae");

app.set("port", process.env.PORT || 4000);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));

app.use("/assets", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  Sundae.find({}).then(sundaes => {
    res.render("index", {sundaes});
  });
})

app.get("/:flavor", function(req, res){
  Sundae.findOne({flavor: req.params.flavor}).then(sundae => {
    res.render("show", {sundae: sundae});
  });
})

app.listen(app.get("port"), () => {
  console.log("IT WORKS");
})

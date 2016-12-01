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
app.use(bodyParser.json({ extended: true }));

//
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.render("sundaes");
})

app.get("/api/", function(req, res){
  Sundae.find({}).then(function(sundaes){
    res.json(sundaes);
  });
});

app.get("/api/:flavor", function(req, res){
  Sundae.findOne({flavor: req.params.flavor}).then(sundae => {
    res.json(sundae);
  });
})

app.post("/api/", function(req, res){
  Sundae.create(req.body).then(sundae => {
    res.json(sundae)
  });
});

app.put("/api/:flavor", function(req, res){
  Sundae.findOneAndUpdate({flavor: req.params.flavor}, req.body, {new: true}).then(function(sundae){
    res.json(sundae);
  });
})

app.delete("/api/:flavor", function(req, res){
  Sundae.findOneAndRemove({flavor: req.params.flavor}).then(function(){
    res.json({success: true});
  })
})

// app.post("/:flavor", function(req, res){
//   Sundae.findOneAndUpdate({flavor: req.params.flavor}, req.body.sundae, {new: true}).then(function(sundae) {
//     res.redirect("/");
//   });
// })
//
// app.post("/:flavor/delete", function(req, res) {
//   Sundae.findOneAndRemove({flavor: req.params.flavor}).then(function() {
//     res.redirect("/");
//   })
// })

app.listen(app.get("port"), () => {
  console.log("IT WORKS");
})

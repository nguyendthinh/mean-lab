// var express = require("express");
// var hbs = require("express-handlebars");
// var db = require ("./db/connection");
//
// var app = express();
//
// var bodyParser = require("body-parser");
//
// app.set("port", process.env.PORT || 4000);
// app.set("view engine", "hbs");
// app.engine(".hbs", hbs({
//   extname:        ".hbs",
//   partialsDir:    "views/",
//   layoutsDir:     "views/",
//   defaultLayout:  "layout-main"
// }));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));
//
// app.listen(4000, () => {
//   console.log("IT WORKS");
// })

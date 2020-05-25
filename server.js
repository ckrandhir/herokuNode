const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./db.js");
var employeeController = require("./controllers/employeeController.js");

var port = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.json());




var whitelist = ['https://ck-node-heroku.web.app', 'http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {

      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));


app.listen(
  port, {
    useUnifiedTopology: true,
  },
  () => {
    console.log("server running on port :- " + port + " !");
  }
);

app.use("/employees", employeeController);
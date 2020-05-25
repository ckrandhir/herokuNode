const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./db.js");
var employeeController = require("./controllers/employeeController.js");

var port = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.json());
app.use(
  cors(
    { origin: "http://localhost:4200" },
    { origin: "https://ck-node-heroku.web.app" }
  )
);

app.listen(
  port,
  {
    useUnifiedTopology: true,
  },
  () => {
    console.log("server running on port :- " + port + " !");
  }
);

app.use("/employees", employeeController);

const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

//Importing Model
var { Employee } = require("../models/employee");

// => localhost:3000/employees/
router.get("/", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Employees :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.param.id))
    return res.status(400).send(`No record with given id :'+  ${req.param.id}`);
  else {
    Employee.findById(req.param.id, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in retrieving EMployee" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  }
});

router.post("/", (req, res) => {
  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });

  emp.save((err, doc) => {
    if (!err) {
      if (req.body) {
        res.send(doc);
      }
    } else {
      console.log(
        `Error in saving Employee data ${JSON.stringify(err, undefined, 2)}`
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.body.id))
    return res.status(400).send(`No record with given ID: ${req.params.id}`);

  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });

  Employee.findByIdAndUpdate(
    res.body.id,
    { $set: emp },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(`Error in updating :${JSON.stringify(err, undefined, 2)}`);
      }
    }
  );
});

router.delete("/:id", (res, req) => {
  if (!ObjectId.isValid(req.body.id))
    return res.status(400).send(`No record with given ID: ${req.params.id}`);

  Employee.findByIdAndDelete(req.body.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(`Error in delting :${JSON.stringify(err, undefined, 2)}`);
    }
  });
});

module.exports = router;

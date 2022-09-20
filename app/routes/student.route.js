module.exports = app => {
  const student = require("../controllers/student.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/student", student.create);

  router.get("/:id", student.findOne);
}
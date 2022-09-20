const db = require("../models");
const Student = db.tutorials;

exports.create = (req, res) =>{
    //request validate

    if (!req.body.name || !req.body.dob || !req.attendance) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      const student = {
        name: req.body.name,
        dob: req.body.dob,
        attendance: req.body.attendance ? req.body.attendance : false
      }; 

      Student.create(student)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Student Table."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Student with id=" + id
        });
      });
  };


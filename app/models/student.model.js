module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("tutorial", {
      name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.STRING
      },
      attendance: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Student;
  };
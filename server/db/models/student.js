const Sequelize = require('sequelize');
const db = require('../database');

const Student  = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true,
    },
    defaultValue:
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  gpa:{
    type: Sequelize.FLOAT,
    validate: {
      max: 4.0,
      min: 0.0,
    },
  }
});

module.exports = Student
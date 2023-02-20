const Sequelize = require('sequelize');
const db = require('../database');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true,
    },
    defaultValue:
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
});

module.exports = Campus
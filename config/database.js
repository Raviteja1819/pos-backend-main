const { Sequelize } = require('sequelize');

// Initialize Sequelize with your MySQL database credentials
const sequelize = new Sequelize('pos', 'root','CycloTech@1234', {
  host: '45.112.49.217',
  port : '3307',
  dialect: 'mysql',
});

// const sequelize = new Sequelize('pos', 'root','20913524@Tony', {
//   host: 'localhost',
//   port : '3306',
//   dialect: 'mysql',
// });
module.exports = sequelize;

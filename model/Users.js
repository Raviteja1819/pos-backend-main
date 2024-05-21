const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.BLOB,
    allowNull: true 
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
  allowNull: false,
  unique: true
},
shiftStartsFrom: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  shiftEndsFrom: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Users;

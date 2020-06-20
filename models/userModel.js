const Sequelize = require("sequelize");

const sequelize = require("../config");

const User = sequelize.define("user", {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;

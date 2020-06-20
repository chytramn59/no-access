const Sequelize = require("sequelize");

const { DATABASE, DATABASE_USER, DATABASE_PASSWORD } = process.env;

const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;

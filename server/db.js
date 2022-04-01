const { Sequelize } = require("sequelize");

module.exports = new Sequelize("slob_shop", "postgres", "root", {
  dialect: 'postgres',
  host: "localhost",
  port: 5432,
});

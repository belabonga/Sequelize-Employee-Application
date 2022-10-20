const { Sequelize } = require("sequelize/types");

const sequelize = new Sequelize("employee_db", "postgres", "postgres", {
    host : "localhost"
});

module.exports = sequelize
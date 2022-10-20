'use strict';
const fs = require('fs');

module.exports = {
  up (queryInterface, Sequelize) {
  // READING DATA
  const data = JSON.parse(fs.readFileSync("./data/employees.json", "utf-8"))
  data.forEach(el => {
  // ADDING NEW COLUMN
    el.createdAt = new Date();
    el.updatedAt = new Date()
  });
   return queryInterface.bulkInsert("Employees", data, {});
  },

  down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete("Employees", null, {});
  }
};

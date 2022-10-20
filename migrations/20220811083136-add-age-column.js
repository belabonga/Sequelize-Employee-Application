'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    // ADDING NEW COLUMN "AGE"
    return queryInterface.addColumn("Employees", "age", Sequelize.INTEGER)
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Employees", "age")
  }
};

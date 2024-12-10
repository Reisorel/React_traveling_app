'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Travels", "img_src", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("Travels", "location", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("Travels", "grade", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("Travels", "fees", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Travels", "img_src");
    await queryInterface.removeColumn("Travels", "location");
    await queryInterface.removeColumn("Travels", "grade");
    await queryInterface.removeColumn("Travels", "fees");
  },
};


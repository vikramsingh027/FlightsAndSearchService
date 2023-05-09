"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mumbai airport",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juhu Airport",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indira Gandhi International Airport",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    //To seed data(i.e execute up function) use "npx sequelize db:seed --seed <file name>"
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Airports", {
      createdAt: "2023-05-07 06:37:39",
    });
    //To execute down function use "npx sequelize db:seed:undo --seed <file name>"
  },
};

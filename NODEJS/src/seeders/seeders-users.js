"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "dothanhphuoc0706@gmail.com",
        password: "1234567890",
        firstName: "Do Thanh",
        lastName: "Phuoc",
        address: "Thua Thien Hue",
        gender: "1",
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }, // khi chay binh thuong them du lieu vao

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

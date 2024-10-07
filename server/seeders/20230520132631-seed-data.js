'use strict';
const fs = 'fs'
const category = require('../data/categories.json').map((el) => {
  delete el.id
  el.createdAt = new Date
  el.updatedAt = new Date
  return el
})
const author = require('../data/authors.json').map((el) => {
  delete el.id
  el.createdAt = new Date
  el.updatedAt = new Date
  return el
})
const product = require('../data/products.json').map((el) => {
  delete el.id
  el.createdAt = new Date
  el.updatedAt = new Date
  return el
})
const image = require('../data/images.json').map((el) => {
  delete el.id
  el.createdAt = new Date
  el.updatedAt = new Date
  return el
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Categories', category, {})
   await queryInterface.bulkInsert('Authors', author, {})
   await queryInterface.bulkInsert('Products', product, {})
   await queryInterface.bulkInsert('Images', image, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {
      truncate: true,
      restartIdentity: true,
      cascade: true
    })
    await queryInterface.bulkDelete('Authors', null, {
      truncate: true,
      restartIdentity: true,
      cascade: true
    })
    await queryInterface.bulkDelete('Products', null, {
      truncate: true,
      restartIdentity: true,
      cascade: true
    })
    await queryInterface.bulkDelete('Images', null, {
      truncate: true,
      restartIdentity: true,
      cascade: true
    })
  }
};

'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: 1,
          name: 'Task'
        },
        {
          id: 2,
          name: 'Random Thought'
        },
        {
          id: 3,
          name: 'Idea'
        },
        {
          id: 4,
          name: 'Quote'
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Notes',
      [
        {
          id: uuidv4(),
          name: 'Shopping list',
          content: 'Tomatoes, bread',
          CategoryId: 1,
          isArchived: false,
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          name: "The theory of evolution",
          content: "Theory in biology postulating that the various types of plants, animals...",
          CategoryId: 2,
          isArchived: false,
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          name: "New Feature",
          content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
          CategoryId: 3,
          isArchived: false,
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          name: "William Gaddis",
          content: "Justice? -You get justice in the next world, in this world you have the law.",
          CategoryId: 4,
          isArchived: false,
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          name: "New Feature",
          content: "I'm gonna have a dentist appointment on the 3-5-2021, I moved it from 5-5-2021",
          CategoryId: 3,
          isArchived: false,
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          name: "Pizza recipe",
          content: "I had a dream about this pizza. Must try to cook it!",
          CategoryId: 3,
          isArchived: false,
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          name: "Lab #2 Algorithms and Data Structures",
          content: "It is due on 15/09/2022",
          CategoryId: 1,
          isArchived: false,
          createdAt: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notes', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

import { v4 as uuidv4 } from 'uuid';

export const notes = [
    {
        id: uuidv4(),
        name: 'Shopping list',
        content: 'Tomatoes, bread',
        CategoryId: 1,
        isArchived: false
      },
      {
        id: uuidv4(),
        name: "The theory of evolution",
        content: "Theory in biology postulating that the various types of plants, animals...",
        CategoryId: 2,
        isArchived: false
      },
      {
        id: uuidv4(),
        name: "New Feature",
        content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
        CategoryId: 3,
        isArchived: false
      },
      {
        id: uuidv4(),
        name: "William Gaddis",
        content: "Justice? -You get justice in the next world, in this world you have the law.",
        CategoryId: 4,
        isArchived: false
      },
      {
        id: uuidv4(),
        name: "New Feature",
        content: "I'm gonna have a dentist appointment on the 3-5-2021, I moved it from 5-5-2021",
        CategoryId: 3,
        isArchived: false
      },
      {
        id: uuidv4(),
        name: "Pizza recipe",
        content: "I had a dream about this pizza. Must try to cook it!",
        CategoryId: 3,
        isArchived: false
      },
      {
        id: uuidv4(),
        name: "Lab #2 Algorithms and Data Structures",
        content: "It is due on 15/09/2022",
        CategoryId: 1,
        isArchived: false
      }
]
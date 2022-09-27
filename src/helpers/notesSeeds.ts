import { Note } from "../services/interfaces";
import { v4 as uuidv4 } from "uuid";

export const NotesData: Note[] = [
    {
        id: uuidv4(),
        created: new Date(),
        name: "Shopping list",
        category: "Task",
        content: "Tomatoes, bread",
        isArchived: false
    },
    {
        id: uuidv4(),
        created: new Date(),
        name: "The theory of evolution",
        category: "Random Thought",
        content: "Theory in biology postulating that the various types of plants, animals...",
        isArchived: false
    },
    {
        id: uuidv4(),
        created: new Date(),
        name: "New Feature",
        category: "Idea",
        content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
        isArchived: false
    },
    {
        id: uuidv4(),
        created: new Date(),
        name: "William Gaddis", 
        category: "Quote",
        content: "Justice? -You get justice in the next world, in this world you have the law.",
        isArchived: false
    }, 
    {
        id: uuidv4(),
        name: "New Feature",
        created: new Date(),
        category: "Idea",
        content: "I'm gonna have a dentist appointment on the 3-5-2021, I moved it from 5-5-2021",
        isArchived: false   
    }, 
    { 
        id: uuidv4(),
        name: "Pizza recipe",
        created: new Date(),
        category: "Idea",
        content: "I had a dream about this pizza. Must try to cook it!",
        isArchived: false   
    }, 
    {
        id: uuidv4(),
        name: "Lab #2 Algorithms and Data Structures",
        created: new Date(),
        category: "Task",
        content: "It is due on 15/09/2022",
        isArchived: false   
    }
];
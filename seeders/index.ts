import db from "../models";
import { categories } from "../seeders/categories";
import { notes } from "../seeders/notes";

const seedCategories = () => {
    categories.map(category => {
        db.Category.create(category);
    });
}

seedCategories();
const seedNotes = () => {
    notes.map(note => {
        db.Note.create(note);
    });
}
seedNotes();
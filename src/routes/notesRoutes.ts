import express from "express";
import { 
    getNotes, 
    getNoteById, 
    getNotesStats, 
    addNote, 
    deleteNoteById, 
    editNoteById
} from "../repositories/notesRepo";

const notesRouter = express.Router();

notesRouter.get('/', getNotes);
notesRouter.post('/', addNote);
notesRouter.get('/stats', getNotesStats);
notesRouter.get('/:id', getNoteById);
notesRouter.delete('/:id', deleteNoteById);
notesRouter.patch('/:id', editNoteById);

export default notesRouter;
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

notesRouter.route('/')
    .get(getNotes)
    .post(addNote);

notesRouter.get('/stats', getNotesStats);

notesRouter.route('/:id')
    .get(getNoteById)
    .delete(deleteNoteById)
    .patch(editNoteById);

export default notesRouter;
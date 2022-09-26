import express from "express";
import { 
    getNotes, 
    getNoteById, 
    getNotesStats, 
    addNote, 
    deleteNoteById, 
    editNoteById
} from "../repositories/notesRepo";
import { addNoteBodySchema, editNoteBodySchema, uuidSchema, emptySchema } from "../services/validationSchemas";
import { validateRequest } from "./middleware";

const notesRouter = express.Router();

notesRouter.route('/')
    .get(validateRequest(emptySchema, emptySchema, emptySchema), getNotes)
    .post(validateRequest(addNoteBodySchema, emptySchema, emptySchema), addNote);

notesRouter.get('/stats', getNotesStats);

notesRouter.route('/:id')
    .get(validateRequest(emptySchema, emptySchema, emptySchema), getNoteById)
    .delete(validateRequest(emptySchema, emptySchema, uuidSchema), deleteNoteById)
    .patch(validateRequest(editNoteBodySchema, emptySchema, uuidSchema), editNoteById);

export default notesRouter;
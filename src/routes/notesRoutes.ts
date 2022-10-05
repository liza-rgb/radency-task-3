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
import { validateRequest } from "../services/validateRequest";
import wrapAsync from "../helpers/wrapAsync";

const notesRouter = express.Router();

notesRouter.route('/')
    .get(validateRequest(emptySchema, emptySchema, emptySchema), wrapAsync(getNotes))
    .post(validateRequest(addNoteBodySchema, emptySchema, emptySchema), wrapAsync(addNote));

notesRouter.get('/stats', validateRequest(emptySchema, emptySchema, emptySchema), wrapAsync(getNotesStats));

notesRouter.route('/:id')
    .get(validateRequest(emptySchema, emptySchema, uuidSchema), wrapAsync(getNoteById))
    .delete(validateRequest(emptySchema, emptySchema, uuidSchema), wrapAsync(deleteNoteById))
    .patch(validateRequest(editNoteBodySchema, emptySchema, uuidSchema), wrapAsync(editNoteById));

export default notesRouter;
import { NextFunction, Request, Response } from "express";
import { ExpressError } from "../routes/ExpressError";
import { NotesData } from "../helpers/notesSeeds"; 
import { Note, NoteFormatted, CategoryStats } from "./interfaces";
import { formatNote } from "../helpers/formatNote";
import { categories, countNotesByCategory } from "../helpers/categories";
import { v4 as uuidv4 } from "uuid";

let notes: Note[] = NotesData;

export const getNotes = (req: Request, res: Response) => {
    const displayNotes: NoteFormatted[] = notes.map((note) => {
        return formatNote(note);
    });
    res.send(displayNotes);
}

export const getNoteById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) {
        res.send(formatNote(notes[noteIndex]));
    } else {
        next(new ExpressError(`The Note ID=${id} is Not Found`, 404));
    }
}

export const getNotesStats = (req: Request, res: Response) => {
    const stats: CategoryStats[] = categories.map((category) => {
        let notesCount = countNotesByCategory(category.name, notes);
        return {
            category: category.name,
            active: notesCount.activeNotes,
            archived: notesCount.archivedNotes
        }
    })
    res.send(stats);
}

export const addNote = (req: Request, res: Response) => {
    const newNote = {
        ...req.body,
        id: uuidv4(),
        created: new Date(),
        isArchived: false
    }
    notes.push(newNote);
    res.send(`SUCCESSFULLY ADDED NOTE = ${JSON.stringify(newNote)}`);
}

export const deleteNoteById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const deleteNoteIndex = notes.findIndex((note) => note.id === id);
    if (deleteNoteIndex > -1) {
        notes = [
            ...notes.slice(0, deleteNoteIndex),
            ...notes.slice(deleteNoteIndex + 1)
        ]
        res.send(`SUCCESSFULLY DELETED NOTE WITH ID=${id}`);
    } else {
        next(new ExpressError(`The Note ID=${id} is Not Valid`, 400));
    }
}

export const editNoteById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const editNoteIndex = notes.findIndex((note) => note.id === id);
    if (editNoteIndex > -1) {
        const editNote = {
            ...notes[editNoteIndex],
            ...req.body
        }
        notes = [
            ...notes.slice(0, editNoteIndex),
            editNote,
            ...notes.slice(editNoteIndex + 1)
        ]
        res.send(`SUCCESSFULLY UPDATED NOTE WITH ID=${id}`);
    } else {
        next(new ExpressError(`The Note ID=${id} is Not Valid`, 400));
    }
}
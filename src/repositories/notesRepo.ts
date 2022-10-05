import { NextFunction, Request, Response } from "express";
import { ExpressError } from "../helpers/ExpressError";
import { formatNote } from "../helpers/formatNote";
import { v4 as uuidv4 } from "uuid";
import db from "../../models";


export const getNotes = async (req: Request, res: Response) => {
    const allNotes = await db.Note.findAll({ 
        include: db.Category, required: true,
        order: [
            ['createdAt', 'ASC']
        ]
    });
    const formattedNotes = allNotes.map((note: any) => {
        return formatNote(note);
    });
    res.send(formattedNotes);
}

export const getNoteById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const foundNote = await db.Note.findOne({
        where: { id },
        include: [{
          model: db.Category,
        }]
    });
    if (foundNote !== null) {
        res.send(formatNote(foundNote));
    } else {
        next(new ExpressError(`The Note ID=${id} is Not Found`, 404));
    }
}

export const getNotesStats = async (req: Request, res: Response) => {
    const categories = await db.Category.findAll();
    const stats = await Promise.all(categories.map(async (category: any) => {
        return {
            category: category.name,
            active: await db.Note.count({ where: {CategoryId: category.id, is_archived: false} }),
            archived: await db.Note.count({ where: {CategoryId: category.id, is_archived: true} })
        };
    }));
    res.send(stats);
}

export const addNote = async (req: Request, res: Response) => {
    const foundCategory = await db.Category.findOne({ 
        where: { name: req.body.category } 
    });
    
    const newNote = {
        name: req.body.name,
        content: req.body.content,
        CategoryId: foundCategory.id,
        id: uuidv4(),
        is_archived: false
    }
    
    await db.Note.create(newNote);
    res.send(`SUCCESSFULLY ADDED NOTE!`);
}

export const deleteNoteById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const deleteNote = await db.Note.destroy({ where: { id } });
    if (deleteNote === 1) {
        res.send(`SUCCESSFULLY DELETED NOTE WITH ID=${id}`);
    } else {
        next(new ExpressError(`The Note ID=${id} is Not Valid`, 400));
    }
}

export const editNoteById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, content, category, is_archived } = req.body;
    const editNote = await db.Note.findOne({ where: { id } });
    if (editNote !== null) {
        if (name) { editNote.name = name }
        if (content) { editNote.content = content }
        if (is_archived) { editNote.is_archived = is_archived }

        if (category) {
            const foundCategory = await db.Category.findOne({ 
                where: { name: req.body.category } 
            });
            editNote.CategoryId = foundCategory.id;
        }

        await editNote.save();
        res.send(`SUCCESSFULLY UPDATED NOTE WITH ID=${id}`);
    } else {
        next(new ExpressError(`The Note ID=${id} is Not Valid`, 400));
    }
}
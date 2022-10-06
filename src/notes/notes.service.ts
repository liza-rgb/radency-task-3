import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category, Note } from './note.model';
import { formatNote } from './helpers/formatNote';
import { NoteFormatted, Statistics } from './interfaces';
import { AddNoteDto } from './dto/add-note.dto';
import { v4 as uuidv4 } from 'uuid';
import { EditNoteDto } from './dto/edit-note.dto';
import { NestError } from './helpers/NestError';
import { UuidDto } from './dto/uuid.dto';

@Injectable()
export class NotesService {
    constructor(
        @InjectModel(Note)
        private noteModel: typeof Note,
        @InjectModel(Category)
        private categoryModel: typeof Category
    ) {}

    async getNotes(): Promise<NoteFormatted[]>  {
        const allNotes = this.noteModel.findAll({
            include: Category,
            order: [
                ['createdAt', 'ASC']
            ]
        });
        const formattedNotes = (await allNotes).map((note) => {
            return formatNote(note);
        });
        return formattedNotes;
    }

    async getNoteById(id: string): Promise<NoteFormatted | NestError> {
        const foundNote = this.noteModel.findOne({
            where: { id },
            include: [{
              model: Category,
            }]
        });
        if (await foundNote !== null) {
            return formatNote(await foundNote);
        } else {
            throw new NestError(`The Note ID=${id} is Not Found`, 404);
        }
    }

    async deleteNoteById(id: string): Promise<string | NestError> {
        const deleteNote = await this.noteModel.destroy({ where: { id } });
        if (deleteNote === 1) {
            return `SUCCESSFULLY DELETED NOTE WITH ID=${id}`;
        } else {
            throw new NestError(`The Note ID=${id} is Not Valid`, 400);
        }
    }

    async getNotesStats(): Promise<Statistics[]> {
        const categories = await this.categoryModel.findAll();
        const stats = await Promise.all(categories.map(async (category) => {
            return {
                category: category.name,
                active: await this.noteModel.count({ where: {CategoryId: category.id, isArchived: false} }),
                archived: await this.noteModel.count({ where: {CategoryId: category.id, isArchived: true} })
            };
        }));
        return stats;
    }

    async addNote(addNoteDto: AddNoteDto): Promise<string | NestError> {
        const foundCategory = await this.categoryModel.findOne({ 
            where: { name: addNoteDto.category } 
        });

        if (await foundCategory !== null) {
            await this.noteModel.create({
                id: uuidv4(),
                name: addNoteDto.name,
                content: addNoteDto.content,
                CategoryId: foundCategory.id
            });
            return `SUCCESSFULLY ADDED NOTE!`;
        } else {
            throw new NestError(`The Category=${addNoteDto.category} is Not Valid`, 400);
        }
    }

    async editNoteById(editNoteDto: EditNoteDto, id: string): Promise<string | NestError> {
        const editNote: Note = await this.noteModel.findOne({ where: { id } });
        
        if (await editNote !== null) {
            if (editNoteDto.name) { editNote.name = editNoteDto.name }
            if (editNoteDto.content) { editNote.content = editNoteDto.content }
            if (editNoteDto.isArchived) { editNote.isArchived = editNoteDto.isArchived }

            if (editNoteDto.category) {
                const foundCategory = await this.categoryModel.findOne({ 
                where: { name: editNoteDto.category } 
                });
                if (await foundCategory !== null) {
                    editNote.CategoryId = foundCategory.id;
                } else {
                    throw new NestError(`The Category=${editNoteDto.category} is Not Valid`, 400);
                }
            }

            await editNote.save();
            return `SUCCESSFULLY UPDATED NOTE WITH ID=${id}`;
        } else {
            throw new NestError(`The Note ID=${id} is Not Valid`, 400);
        }
    }
}

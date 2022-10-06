import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category, Note } from './note.model';
import { formatNote } from './helpers/formatNote';
import { NoteFormatted, Statistics } from './interfaces';
import { AddNoteDto } from './dto/add-note.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateNoteDto } from './dto/update-note.dto';

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

    async getNoteById(id: string) {
        const foundNote = this.noteModel.findOne({
            where: { id },
            include: [{
              model: Category,
            }]
        });
        return formatNote(await foundNote);
    }

    async deleteNoteById(id: string) {
        const deleteNote = await this.noteModel.destroy({ where: { id } });
        return `SUCCESSFULLY DELETED NOTE WITH ID=${id}`;
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

    async addNote(addNoteDto: AddNoteDto) {
        const foundCategory = await this.categoryModel.findOne({ 
            where: { name: addNoteDto.category } 
        });

        await this.noteModel.create({
            id: uuidv4(),
            name: addNoteDto.name,
            content: addNoteDto.content,
            CategoryId: foundCategory.id
        });
        return `SUCCESSFULLY ADDED NOTE!`;
    }

    async editNoteById(updateItemDto: UpdateNoteDto, id: string) {
        const editNote: Note = await this.noteModel.findOne({ where: { id } });
        
        if (updateItemDto.name) { editNote.name = updateItemDto.name }
        if (updateItemDto.content) { editNote.content = updateItemDto.content }
        if (updateItemDto.isArchived) { editNote.isArchived = updateItemDto.isArchived }

        if (updateItemDto.category) {
            const foundCategory = await this.categoryModel.findOne({ 
               where: { name: updateItemDto.category } 
            });
            editNote.CategoryId = foundCategory.id;
        }

        await editNote.save();
        return `SUCCESSFULLY UPDATED NOTE WITH ID=${id}`;
    }
}

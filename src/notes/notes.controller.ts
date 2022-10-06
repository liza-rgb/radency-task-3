import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { AddNoteDto } from './dto/add-note.dto';
import { EditNoteDto } from './dto/edit-note.dto';
import { NotesService } from './notes.service';
import { NoteFormatted, Statistics } from './interfaces';

@Controller('notes')
export class NotesController {
    constructor (private readonly notesService: NotesService) {}

    @Get()
    getNotes(): Promise<NoteFormatted[]>  {
        return this.notesService.getNotes();
    }

    @Get('/stats')
    getNotesStats(): Promise<Statistics[]> {
        return this.notesService.getNotesStats();
    }

    @Get(':id')
    getNoteById(@Param('id') id) {
        return this.notesService.getNoteById(id);
    }

    @Post()
    addNote(@Body() addNoteDto: AddNoteDto) {
        return this.notesService.addNote(addNoteDto);
    }

    @Delete(':id')
    deleteNoteById(@Param('id') id): Promise<string> {
        return this.notesService.deleteNoteById(id);
    }

    @Patch(':id')
    editNoteById(@Body() editNoteDto: EditNoteDto, @Param('id') id) {
        return this.notesService.editNoteById(editNoteDto, id);
    }
}

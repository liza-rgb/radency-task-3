import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { AddNoteDto } from './dto/add-note.dto';
import { EditNoteDto } from './dto/edit-note.dto';
import { UuidDto } from './dto/uuid.dto';
import { NotesService } from './notes.service';
import { NoteFormatted, Statistics } from './interfaces';
import { NestError } from './helpers/NestError';

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
    getNoteById(@Param() param: UuidDto): Promise<NoteFormatted | NestError> {
        return this.notesService.getNoteById(param.id);
    }

    @Post()
    addNote(@Body() addNoteDto: AddNoteDto): Promise<string | NestError> {
        return this.notesService.addNote(addNoteDto);
    }

    @Delete(':id')
    deleteNoteById(@Param() param: UuidDto): Promise<string | NestError> {
        return this.notesService.deleteNoteById(param.id);
    }

    @Patch(':id')
    editNoteById(@Body() editNoteDto: EditNoteDto, @Param() param: UuidDto): Promise<string | NestError> {
        return this.notesService.editNoteById(editNoteDto, param.id);
    }
}

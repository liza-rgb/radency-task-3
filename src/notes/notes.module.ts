import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category, Note } from './note.model';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  imports: [SequelizeModule.forFeature([Note, Category])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}

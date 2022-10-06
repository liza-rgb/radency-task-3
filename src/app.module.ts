import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note, Category } from './notes/note.model';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PSQL_HOST || "localhost",
      port: 5432,
      username: process.env.POSTGRES_USER || "root",
      password: process.env.POSTGRES_PASSWORD || "root",
      database: process.env.POSTGRES_DB || "notes",
      models: [ Note, Category ],
    }),
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

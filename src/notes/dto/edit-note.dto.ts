import { IsIn, IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class EditNoteDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly content: string;

    @IsNotEmpty()
    @IsString()
    @IsIn(['Task', 'Random Thought', 'Idea', 'Quote'])
    readonly category: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly isArchived: boolean;
}
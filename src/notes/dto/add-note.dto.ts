import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class AddNoteDto {
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
}
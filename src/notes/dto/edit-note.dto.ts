import { IsIn, IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator";

export class EditNoteDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly content: string;

    @IsOptional()
    @IsString()
    @IsIn(['Task', 'Random Thought', 'Idea', 'Quote'])
    readonly category: string;

    @IsOptional()
    @IsBoolean()
    readonly isArchived: boolean;
}
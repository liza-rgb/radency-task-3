import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UuidDto {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    public id: string;
}
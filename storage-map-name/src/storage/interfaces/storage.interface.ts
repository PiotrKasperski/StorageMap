import { ApiProperty } from "@nestjs/swagger";

export class Storage{
    @ApiProperty()
    id:string;
    @ApiProperty()
    name: string;
}
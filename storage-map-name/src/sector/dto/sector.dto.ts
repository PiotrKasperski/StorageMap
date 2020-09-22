import { ApiProperty } from "@nestjs/swagger";

export class SectorDTO{
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    storageId: string;
}
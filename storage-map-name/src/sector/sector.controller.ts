import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SectorDTO } from './dto/sector.dto';
import { SectorService } from './sector.service';
@ApiTags('sectors')
@Controller('sectors')
export class SectorController {

    constructor(private readonly sectorService: SectorService){};

    @Get()
    async getAllSectors(){
        return await this.sectorService.getAllSectors();
    }
    @Post()
    async addNewsector(@Body() sector: SectorDTO){
        return await this.sectorService.addNewSector(sector);
    }
}

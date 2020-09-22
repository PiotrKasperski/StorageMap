import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StorageService } from './storage.service';
import {Storage} from './interfaces/storage.interface'
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@ApiTags('storage')
@Controller('storage')
export class StorageController {
    constructor(private readonly storageService: StorageService,){};
    @Get()
   async getStorages(){
        return await this.storageService.getAllStorages();
    }

    @ApiParam({name: "id"})
    @Get(':id')
    async findOne(@Param('id') id): Promise<Storage>{
        return await this.storageService.getStorage(id);
    }

    @Post()
    async addStorage(@Body() storage: Storage): Promise<Storage>{
       return await this.storageService.addStorage(storage);
    }
}

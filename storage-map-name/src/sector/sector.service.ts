import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectorDTO } from './dto/sector.dto';
import { Repository } from 'typeorm';
import { StorageEntity } from 'src/model/storage.entity';
import { Sector } from 'src/model/sector.entity';

@Injectable()
export class SectorService {

    constructor(@InjectRepository(Sector) private readonly sectorRepository: Repository<Sector>,
     @InjectRepository(StorageEntity) private readonly storageRepository: Repository<StorageEntity>){}

    async getAllSectors(): Promise<Array<Sector>>{
        return this.sectorRepository.find();
    }
    async addNewSector(sector:SectorDTO): Promise<Sector>{
        const storage: StorageEntity = await this.storageRepository.findOne(sector.storageId);
         return await this.sectorRepository.save({id: sector.id, name: sector.name, storage: storage});
    }

    /*
    constructor(@InjectRepository(StorageEntity) private readonly storageRepository: Repository<StorageEntity>){
        this.createObjects();
    }*/
}

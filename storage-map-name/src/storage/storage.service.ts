import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StorageEntity } from 'src/model/storage.entity';
import { Repository } from 'typeorm';
import {Storage} from './interfaces/storage.interface'
@Injectable()
export class StorageService {

    storages: Array<Storage>;
    async createObjects(){
       await this.storageRepository.save({id: "1", name: "magazyn 1"})
       await this.storageRepository.save({id: "2", name: "magazyn 2"})
    }
    constructor(@InjectRepository(StorageEntity) private readonly storageRepository: Repository<StorageEntity>){
        this.createObjects();
    }
    async getAllStorages(): Promise<Array<Storage>>{
        return this.storageRepository.find();
    }
    async getStorage(id): Promise<Storage>{
       return this.storageRepository.findOne(id);
      
    }
    async addStorage(storage: Storage): Promise<Storage>{
        return this.storageRepository.save(storage);
        
    }
     getStorageSectors(storageId: string):any{
       //
       return  null;
    }
}

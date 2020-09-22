import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageEntity } from 'src/model/storage.entity';

@Module({
    imports: [TypeOrmModule.forFeature([StorageEntity])],
    controllers: [
        StorageController, ],
    providers: [
        StorageService, ],
})
export class StorageModule {}

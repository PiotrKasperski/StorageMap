import { SectorController } from './sector.controller';
import { SectorService } from './sector.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from 'src/model/sector.entity';
import { StorageEntity } from 'src/model/storage.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Sector, StorageEntity])],
    controllers: [
        SectorController, ],
    providers: [
        SectorService, ],
})
export class SectorModule {}

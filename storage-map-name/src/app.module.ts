import { SectorModule } from './sector/sector.module';
import { ConfigurationService } from './config/configuration.service';
import { StorageModule } from './storage/storage.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageEntity } from './model/storage.entity';
import { Sector } from './model/sector.entity';
@Module({
  imports: [
        SectorModule, ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [StorageEntity, Sector],
            synchronize: true
    }),
        StorageModule, SectorModule],
  controllers: [AppController],
  providers: [
        ConfigurationService, AppService],
})
export class AppModule {}

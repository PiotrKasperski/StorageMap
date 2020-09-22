import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigurationService {
    constructor(private readonly configService: ConfigService){}

    public getPort(){
        return this.configService.get<number>('PORT')
    };
    public getTypeOrmConfig(): TypeOrmModuleOptions{
        return{
            type: 'postgres',
            host: this.configService.get('POSTGRES_HOST'),
            port: parseInt(this.configService.get('POSTGRES_PORT')),
            username: this.configService.get('POSTGRES_USER'),
            password: this.configService.get('POSTGRES_PASSWORD'),
            database: this.configService.get('POSTGRES_DATABASE'),
            entities: ['**/*.entity{.ts,.js}'],
            /*migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration'
            },*/
            };
        
        }
    
}

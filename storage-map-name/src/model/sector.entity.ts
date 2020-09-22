import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { StorageEntity } from './storage.entity';
@Entity()
export abstract class Sector {
   @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @ManyToOne(type => StorageEntity, storage => storage.sectors)
    storage: StorageEntity;
}
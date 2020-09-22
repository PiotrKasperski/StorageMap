
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Sector } from './sector.entity';
@Entity()
export abstract class StorageEntity {
   @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @OneToMany(type => Sector, sector => sector.storage)
    sectors: Sector[];
}
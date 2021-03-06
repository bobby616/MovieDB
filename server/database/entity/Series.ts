import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Actor } from './Actor';

@Entity()
export class Series {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('varchar', {default: null})
    original_name: string;
    @Column('float', {default: null})
    vote_average: number;
    @Column('float', {default: null})
    vote_count: number;
    @Column('simple-array', {default: null})
    genres: number[];
    @Column('longtext' , {default: null})
    overview: string;
    @Column('float', {default: null})
    popularity: number;

    @ManyToMany(type => Actor, actor => actor.series, {eager: true})
    series_actors: Actor[];
}
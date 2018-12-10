import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('varchar' , {default: null})
    adult: boolean;

    @Column('varchar', {default: null})
    original_title: string;

    @Column('longtext' , {default: null})
    overview: string;
    @Column('varchar' , {default: null})
    release_date: string;
    @Column('float' , {default: null})
    vote_average: number;

    @Column('float', {default: null})
    vote_count: number;
    @Column('int', {default: null})
    popularity: number;
    @Column('varchar', {default: null})
    status: string;
    @Column('float', {default: null})
    runtime: number;
}
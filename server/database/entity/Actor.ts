import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Movie } from './Movie';
import { Series } from './Series';

@Entity({
    name: 'actors',
})
export class Actor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('nvarchar', { default: null })
    firstName: string;

    @Column('nvarchar', { default: 'initialized' })
    lastName: string;

    @Column('nvarchar', { default: null })
    nationality: string;

    @Column('float', { default: null })
    age: number;

    @ManyToMany(type => Movie, movie => movie.movie_actors)
    @JoinTable()
    @Column('nvarchar', { default: null })
    movies: Movie[];

    @ManyToMany(type => Series, series => series.series_actors)
    @JoinTable()
    @Column('nvarchar', { default: null })
    series: Series[];
}
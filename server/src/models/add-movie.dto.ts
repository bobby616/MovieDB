import { Actor } from 'server/database/entity/Actor';

export class AddMovieDTO {
    adult: boolean;
    original_title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genres: number[];
    actors: string[];
}
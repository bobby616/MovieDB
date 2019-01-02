import { Length, IsString, Contains } from 'class-validator';

export class AddSeriesDTO{
    @IsString()
    original_name: string;

    vote_average: number;

    vote_count: number;

    genres: number[];

    @IsString()
    overview: string;

    popularity: number;
}
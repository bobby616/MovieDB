import { Length, IsString, Contains, IsNumber, IsArray, IsNumberString } from 'class-validator';
import { Actor } from 'server/database/entity/Actor';
import { isArray } from 'util';

export class AddSeriesDTO{
    @IsString()
    original_name: string;

    @IsNumber()
    vote_average: number;

    @IsNumber()
    vote_count: number;

    @IsArray()
    genres: number[];

    @IsString()
    overview: string;

    @IsNumber()
    popularity: number;

    @IsArray()
    series_actors: Actor[];
}
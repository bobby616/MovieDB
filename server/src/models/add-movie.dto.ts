import { Actor } from 'server/database/entity/Actor';
import { IsBoolean, IsString, IsNumber, IsArray, ValidateIf } from 'class-validator';
import { isNumber } from 'util';

export class AddMovieDTO {
    @IsBoolean()
    adult: boolean;
    @IsString()
    original_title: string;
    @IsString()
    overview: string;
    @IsString()
    release_date: string;
    @IsNumber()
    vote_average: number;
    @IsNumber()
    vote_count: number;
    @IsNumber()
    popularity: number;
    @IsArray()
    genres: number[];
    @IsArray()
    actors: Actor[];
}
import { Length, IsString, Contains } from 'class-validator';

export class UserRegisterDTO {

    @Length(5, 20)
    @IsString()
    username: string;
    @Length(5, 35)
    @IsString()
    password: string;
    @Contains('@')
    @IsString()
    @Length(5, 30)
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

}
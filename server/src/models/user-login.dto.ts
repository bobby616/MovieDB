import {Length, IsString} from 'class-validator';
export class UserLoginDTO {
  @Length(5, 20)
  @IsString()
  username: string;
  @Length(5, 35)
  password: string;
}
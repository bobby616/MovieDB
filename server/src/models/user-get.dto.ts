import {Length, IsString} from 'class-validator';
import { Roles } from 'database/src/entity/Roles';
export class UserGetDTO {
  @Length(5, 20)
  @IsString()
  username: string;
  @Length(5, 35)
  password: string;

  role: Roles;
}
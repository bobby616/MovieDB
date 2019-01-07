import {Length, IsString} from 'class-validator';
import { Role } from 'server/database/entity/Role';
export class UserGetDTO {
  @Length(5, 20)
  @IsString()
  username: string;
  @Length(5, 35)
  password: string;
  roles: Role;
}
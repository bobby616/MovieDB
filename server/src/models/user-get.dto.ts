import {Length, IsString} from 'class-validator';
import { RoleEntity } from 'server/database/entity/RoleEntity';
export class UserGetDTO {
  @Length(5, 20)
  @IsString()
  username: string;
  @Length(5, 35)
  password: string;
  roles: RoleEntity;
}
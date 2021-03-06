import { JwtPayload } from './../../contracts/jwt-payload';
import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { UserLoginDTO } from '../../models/user-login.dto';
import { UserGetDTO } from 'server/src/models/user-get.dto';
import { User } from 'server/database/entity/User';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  public async signIn(user: UserLoginDTO): Promise<string> {
    const userFound: User = await this.usersService.signIn(user);
    if (userFound) {
      console.log(userFound);
      const accessToken = this.jwtService.sign({ username: userFound.username, role: userFound.role.role });
      return accessToken;
    } else {
      throw new NotFoundException('Wrong credentials');
    }
  }

  async validateUser(payload: JwtPayload): Promise<UserLoginDTO> {
    return await this.usersService.validateUser(payload);
  }
}

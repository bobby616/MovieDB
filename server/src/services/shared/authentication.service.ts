import { JwtPayload } from './../../contracts/jwt-payload';
import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { UserLoginDTO } from '../../models/user-login.dto';
import { UserGetDTO } from 'server/src/models/user-get.dto';

 /* @Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) { }

  async signIn(payload: JwtPayload): Promise<string> {
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return !!this.usersService.searchByUsername(payload.username);
  }
} */

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  public async signIn(user: UserLoginDTO): Promise<string> {
      const userFound: UserGetDTO = await this.usersService.signIn(user);
      if (userFound) {
        const accessToken = this.jwtService.sign({username: userFound.username, roles: userFound.roles});
        return accessToken;
      } else {
        throw new NotFoundException('Wrong credentials');
      }
  }

  async validateUser(payload: JwtPayload): Promise<UserLoginDTO> {
    return await this.usersService.validateUser(payload);
  }
}

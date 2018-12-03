import { JwtPayload } from './../../contracts/jwt-payload';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';

@Injectable()
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
}

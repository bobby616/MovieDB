import { Roles } from './../../database/entity/Roles';
import { CanActivate, ExecutionContext, Injectable, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
            const request = context.switchToHttp().getRequest();
            const user = request.user;

            return user && user.role.role === Roles.Admin;
    }
}

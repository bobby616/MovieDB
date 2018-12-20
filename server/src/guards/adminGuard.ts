import { CanActivate, ExecutionContext, Injectable, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'server/database/entity/Roles';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
            const request = context.switchToHttp().getRequest();
            const user = request.user;

            return user && user.role.role === Roles.Admin;
    }
}

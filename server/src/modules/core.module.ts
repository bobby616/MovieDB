import { Actor } from './../../database/entity/Actor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../../database/entity/User';
import { UsersService } from '../services/shared/users.service';
import { Movie } from 'server/database/entity/Movie';
import { Series } from 'server/database/entity/Series';
import { Role } from 'server/database/entity/Role';

@Module({
    imports: [TypeOrmModule.forFeature([User, Movie, Series, Role, Actor])],
    providers: [UsersService],
    exports: [UsersService],
})
export class CoreModule { }

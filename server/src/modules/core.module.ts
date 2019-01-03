import { Actor } from './../../database/entity/Actor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../../database/entity/User.entity';
import { UsersService } from '../services/shared/users.service';
import { Movie } from 'server/database/entity/Movie';
import { Series } from 'server/database/entity/Series';
import { RoleEntity } from 'server/database/entity/RoleEntity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Movie, Series, RoleEntity, Actor])],
    providers: [UsersService],
    exports: [UsersService],
})
export class CoreModule { }

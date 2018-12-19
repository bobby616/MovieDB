import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Actor } from './Actor';
import { Roles } from './Roles';
import { User } from './User.entity';

@Entity({
    name: 'roles',
})
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { default: Roles.User })
    role: Roles;

    @OneToMany(type => User, user => user.role)
    user: User[];
}
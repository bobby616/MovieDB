import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from 'typeorm';
import { Roles } from './Roles';
import { userInfo } from 'os';
import { Role } from './Role';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('nvarchar', { default: 'initialized' })
    firstName: string;

    @Column('varchar', { default: 'initialized' })
    lastName: string;

    @Column('varchar', { default: 'initialized' })
    username: string;

    @Column('varchar', { default: 'initialized' })
    password: string;

    @Column('varchar', { default: 'initialized' })
    email: string;

    /* @Column({default: Roles.User})
    role: Roles; */

    @ManyToOne(type => Role, role => role.user, {
        eager: true,
    })
    @JoinTable()
    role: Role;

}

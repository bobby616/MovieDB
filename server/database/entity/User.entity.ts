import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Roles } from './Roles';

@Entity({ name: 'users'})
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

    @Column({default: Roles.User})
    role: Roles;

}

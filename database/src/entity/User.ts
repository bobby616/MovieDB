import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('nvarchar', { default: "initialized" })
    firstName: string;

    @Column('varchar', { default: "initialized" })
    lastName: string;

    @Column('varchar',  { default: "initialized" })
    username: string;

    @Column('varchar',  { default: "initialized" })
    password: string;

    @Column('varchar',  { default: "initialized" })
    email: string;

}

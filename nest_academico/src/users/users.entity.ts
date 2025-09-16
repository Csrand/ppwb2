
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class Users {

    @PrimaryGeneratedColumn({name:'ID'})
    id: number;

    @Column({ length: 100, name:'NAME'})
    name: string;

    @Column({ length: 100, unique: true, name:'EMAIL'})
    email: string;
}

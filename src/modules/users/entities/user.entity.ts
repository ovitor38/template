import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({type: 'string'})
    firstName: string 

    @Column({type: 'string'})
    lastName: string

    @Column({type: 'string', unique: true, nullable: false})
    email: string

    @Column({type: 'string'})
    password: string

    @Column({type: 'boolean'})
    isActive: boolean
}
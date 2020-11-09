import { Column, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity('Book')
export class Book{

   

    @ObjectIdColumn()
    _id:string

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    pagesquantity: number
}
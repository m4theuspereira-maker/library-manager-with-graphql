import { Field, ID, ObjectType } from "@nestjs/graphql"

 
 
 @ObjectType('BookType')
 export class BookType{

    @Field(type=>ID)
    id: string

    @Field()
    title: string

    @Field()
    author: string

    @Field()
    pagesquantity: number



 }
import { Field, InputType } from '@nestjs/graphql'
import { MinLength } from 'class-validator'

@InputType('CreateBookInput')
export class CreateBookInput{

    @MinLength(2)
    @Field()
    title: string

    @Field()
    author: string

    @Field()
    pagesquantity: number

}
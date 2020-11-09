import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.entity";
import { CreateBookInput } from "./book.input";
import { BookService } from "./book.service";
import { BookType } from "./book.type";


@Resolver(of => BookType)
export class BookResolver{

    constructor(
        private bookService: BookService
    ){}


    @Mutation(returns => BookType)
    createBook(
        @Args('CreateBookInput')
        createBookInput: CreateBookInput
    ){
        return this.bookService.createBook(createBookInput)
    }

    @Query(returns => [BookType])
    getAllBooks(){
        return this.bookService.getAllBooks()
    }

    @Query(returns => BookType)
    getBookById(
        @Args('id')id : string
    ){
        return this.bookService.getBookById(id)
    }

     @Mutation(returns => BookType, {nullable: true})
     deleteById(
        @Args('id') id:string
    ){
        return this.bookService.deleteBookById(id)
    }
}
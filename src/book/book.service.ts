import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "./book.entity";
import { CreateBookInput } from "./book.input";
import {v4 as uuid} from 'uuid'


@Injectable()
export class BookService{

    constructor(
        @InjectRepository(Book) private bookRepository: Repository<Book>
    ){}

    async createBook(createBookInput: CreateBookInput): Promise<Book>{
        const { title, author, pagesquantity} = createBookInput
        const  book = this.bookRepository.create({
            id: uuid(), 
            title, 
            author, 
            pagesquantity
        })

        return await this.bookRepository.save(book)
    }

    async getAllBooks(): Promise<Book[]>{
        return await this.bookRepository.find()
    }

    async getBookById(id): Promise<Book>{
        return this.bookRepository.findOne({id})
    }

    async deleteBookById(id): Promise<void>{
                
        const book = new Book()
        id = this.bookRepository.findOne({where: {id}})
        
        if(!id){
            throw new Error('Id not found')
        }
        book.id = id
         this.bookRepository.remove(book)      

    
    }
}
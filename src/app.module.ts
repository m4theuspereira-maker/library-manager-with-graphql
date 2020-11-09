import { BookModule } from './book/book.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.entity';
import { GraphQLModule } from '@nestjs/graphql';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb', 
    url: 'mongodb//localhost:27017/library',
    synchronize: true, 
    useUnifiedTopology: true, 
    entities:[
      Book
    ]
  }),
 GraphQLModule.forRoot({
   autoSchemaFile:true,
   include:[BookModule]
 }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  actualBooks: Book[]=[ // CENTRAL DATA ACROSS THIS PROJECT
    {bookId:101,bookName:"Java Programming",bookAuthor:"James Gosling",bookPrice:580},
    {bookId:102,bookName:"Unix Programming",bookAuthor:"Richard Stallman",bookPrice:780},
    {bookId:103,bookName:"Angular Programming",bookAuthor:"Balram Chavan",bookPrice:880},
    {bookId:104,bookName:"C++ Programming",bookAuthor:"Stanley Lippman",bookPrice:480},
    {bookId:105,bookName:"Oracle Programming",bookAuthor:"Bill Pribyl",bookPrice:680}, 
  ];

  // Add Function
  addBook(book : Book){
    for(let bookObj of this.actualBooks){
      if(bookObj.bookId == book.bookId){
        alert("Book already exists...");
        return
      }
      else{
        this.actualBooks.push(book);
        alert("Book inserted successfully...");
        return
      }
    }
  }
  // Edit
  editBook(bookToEdit: Book) : boolean{
    for(let bookObj of this.actualBooks){
      if(bookObj.bookId == bookToEdit.bookId){
        this.actualBooks.splice(this.actualBooks.indexOf(bookObj),1);
        this.actualBooks.push(bookToEdit);
        return true;
      }
    }
    return false;
  }
  //View 
  viewSingleBook(bookId: number) : Book{
    let book = new Book();
    
    for(let bookObj of this.actualBooks){
      if(bookObj.bookId == bookId){
        book = bookObj;
        console.log("Book Found..")
        break;
      }
    }

    return book;
  }
  //View All
  viewAllBook() : Book[]{
    return this.actualBooks;
  }
  // Delete
  deleteBook(bookId: number) : boolean{
    for(let bookObj of this.actualBooks){
      if(bookObj.bookId == bookId){
        this.actualBooks.splice(this.actualBooks.indexOf(bookObj),1);
        return true;
      }
    }
    return false;
  }

}

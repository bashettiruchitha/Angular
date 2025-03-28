import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-view-single-book',
  templateUrl: './view-single-book.component.html',
  styleUrls: ['./view-single-book.component.css']
})
export class ViewSingleBookComponent {

  bookId : number = 0;
  book = new Book();

  tableStyle = 'table';

  constructor(private bookService: BookService){
    
  }

  localViewSingleBook(){
    this.book = this.bookService.viewSingleBook(this.bookId);
    console.log(this.book.bookId);
    console.log(this.book.bookName);
    console.log(this.book.bookAuthor);
    console.log(this.book.bookPrice);
  }


}

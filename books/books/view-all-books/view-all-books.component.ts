import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent  {

  tableStyle = 'table'

  acutalBooks !: Book[];

  constructor(private bookService : BookService, private router: Router){
    this.acutalBooks = this.bookService.viewAllBook();
  }
  

}

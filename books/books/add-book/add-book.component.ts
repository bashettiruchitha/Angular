import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  bookObj = new Book();

  constructor(private bookService : BookService, private router: Router){}

  localAddBook(){

    this.bookService.addBook(this.bookObj)
    this.router.navigate(['/viewall'])
  }
}

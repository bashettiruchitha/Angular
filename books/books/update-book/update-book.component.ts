import { Component } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  bookObj = new Book();

  constructor(private bookService : BookService, private router: Router){}

  localUpdateBook(){
    this.bookService.editBook(this.bookObj)
    this.router.navigate(['/viewall'])
  }
}

import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  bookId : number = 0;

  constructor(private bookService : BookService, private router: Router){}

  localDeleteBook(){
    let bookDeleted : boolean = false;

    bookDeleted = this.bookService.deleteBook(this.bookId)

    if(bookDeleted){
      alert("Book Deleted...")
    }
    else{
      alert("Book not found..")
    }
    this.router.navigate(['/viewall'])
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewSingleBookComponent } from './view-single-book/view-single-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AddBookComponent,
    ViewSingleBookComponent,
    ViewAllBooksComponent,
    UpdateBookComponent,
    DeleteBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddBookComponent,
    DeleteBookComponent,
    UpdateBookComponent,
    ViewAllBooksComponent,
    ViewSingleBookComponent,
  ]
})
export class BooksModule { }

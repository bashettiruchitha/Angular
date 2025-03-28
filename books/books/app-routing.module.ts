import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { UpdateBookComponent } from './books/update-book/update-book.component';
import { ViewAllBooksComponent } from './books/view-all-books/view-all-books.component';
import { ViewSingleBookComponent } from './books/view-single-book/view-single-book.component';
import { DeleteBookComponent } from './books/delete-book/delete-book.component';

const routes: Routes = [
  {path:'',component: AddBookComponent},
  {path:'add',component: AddBookComponent},
  {path:'edit',component: UpdateBookComponent},
  {path:'viewall',component: ViewAllBooksComponent},
  {path:'view',component: ViewSingleBookComponent},
  {path:'delete',component: DeleteBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

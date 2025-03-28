import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikedislikeModule } from './likedislike/likedislike.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormModule } from './form/form.module';
import { PipeModule } from './pipe/pipe.module';
import { FundTransferComponent } from './bankFundTransfer/fund-transfer/fund-transfer.component';
import { FormsModule } from '@angular/forms'
import { BooksModule } from './books/books.module';



@NgModule({
  declarations: [
    AppComponent,
    FundTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikedislikeModule,
    BrowserAnimationsModule,
    FormModule,
    PipeModule,
    FormsModule,
    BooksModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Header } from './Header/header.component';
import { Books } from './Books/books.component';
import { BooksList } from './Books/BooksList/booksList.component';
import { BooksListEdit } from './Books/BooksList/BooksListEdit/booksListEdit.component';
import { Coffee } from './Coffee/coffee.component';
import { CoffeeList } from './Coffee/CoffeeList/coffeeList.component';
import { CoffeeDetails } from './Coffee/CoffeeList/CoffeeDetails/coffeeDetails.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    Books,
    BooksList,
    BooksListEdit,
    Coffee,
    CoffeeList,
    CoffeeDetails
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

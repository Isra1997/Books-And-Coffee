import { Component } from '@angular/core';
import { Books} from '../books.model'

@Component({
  selector: 'app-bookList',
  templateUrl: './booksList.component.html',
  
})
export class BooksList{

   Boooks: Books[]=[
     new Books('A Thousand Splended Suns','Khalid hossani',15),
     new Books('The kite Runner','Khalid hossani',90)
   ];

}


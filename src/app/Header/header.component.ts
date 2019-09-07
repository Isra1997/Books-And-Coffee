import { Component, Output,EventEmitter } from '@angular/core';
import { Coffee } from '../Coffee/coffee.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class Header{
    @Output('navclicked') clicked=new EventEmitter<string>();

   OnSelect(tab:string){
       this.clicked.emit(tab);
   }
}
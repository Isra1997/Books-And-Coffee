import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.bac {background-color: blue; color:white;}' ]
  
})
export class AppComponent {
  IsSecret=false;
  log=[];
  num=0;

  OnDisplay(){
    this.num++;
    this.log.push(this.num);
  }

 
}

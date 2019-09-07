import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.bac {background-color: blue; color:white;}' ]
  
})
export class AppComponent {
  clickedFeature="Books";
  OnNav(tab:string){
    this.clickedFeature=tab;
  }
 
}

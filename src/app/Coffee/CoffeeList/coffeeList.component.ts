import { Component } from '@angular/core';
import { CoffeeRecipe } from '../coffeeRecipe.model';

@Component({
    selector: 'app-coffeeList',
    templateUrl: './coffeeList.component.html'
})

export class CoffeeList{
    recipes: CoffeeRecipe[]=[new CoffeeRecipe('American Coffee','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWMWgzVVLQ0-LzdzATA9lF2jaX4sQtknWrY4zYLN5C3B0JxyuaQ" alt="..." class="img-rounded pull-right','The history of a very delicious cup of coffe ;)',['2 spoons grouded Coffee','2 cups of water'])];
    
}
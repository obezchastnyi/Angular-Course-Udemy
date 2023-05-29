import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg'),
    new Recipe('Test Recipe 2', 'This is simply a test second', 'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/3:2/w_5244,h_3496,c_limit/04102023-ratatouille-lede.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

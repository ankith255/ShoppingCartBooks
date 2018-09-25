import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-respie-list',
  templateUrl: './respie-list.component.html',
  styleUrls: ['./respie-list.component.css']
})
export class RespieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Indian Recipe', 'This is a simple image','../chole.jpg'),
    new Recipe('Pizza Recipe', 'This is a simple image','../pizza.jpg'),
    new Recipe('Pizza COC Recipe', 'This is a simple image','../pizzaCOC.jpg'),
    new Recipe('Ketchup Recipe', 'This is a simple image','../ketchup.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}

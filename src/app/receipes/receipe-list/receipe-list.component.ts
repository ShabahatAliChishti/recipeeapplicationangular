import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{Receipe} from '../recipe.model';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
@Output() recipeWasSelected=new EventEmitter<Receipe>();
recipes:Receipe[]=[
  new Receipe('A Test Recipe','This is simply a test','https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg'),
  new Receipe('A Test Recipe2','This is simply a test','https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg')

];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Receipe)
  {
   this.recipeWasSelected.emit(recipe);
  }

}

import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!:ElementRef;
  @ViewChild('amountInput') amountInputRef!:ElementRef;
  @Output()  IngredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem()
  {
    const inpName=this.nameInputRef.nativeElement.value;
    const inpAmount=this.amountInputRef.nativeElement.value;
    const newingredient=new Ingredient(inpName,inpAmount);
    this.IngredientAdded.emit(newingredient);

  }
}

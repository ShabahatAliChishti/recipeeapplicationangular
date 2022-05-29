import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import { Receipe } from '../../recipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input()recipe!:Receipe;
  @Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelected()
  {
    this.recipeSelected.emit();
  }

}

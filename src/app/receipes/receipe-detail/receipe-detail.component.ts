import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() recipe!:Receipe;

  constructor() { }

  ngOnInit(): void {
  }

}

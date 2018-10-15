import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroceryItem } from '../grocery-item'
@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.css']
})
export class GroceryListItemComponent implements OnInit {

  @Input()
  food: GroceryItem


  constructor() { }

  ngOnInit() {
  }

}

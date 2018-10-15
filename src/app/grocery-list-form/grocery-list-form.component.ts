import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroceryItem } from '../grocery-item'

@Component({
  selector: 'app-grocery-list-form',
  templateUrl: './grocery-list-form.component.html',
  styleUrls: ['./grocery-list-form.component.css']
})
export class GroceryListFormComponent implements OnInit {
  newFoodItem: GroceryItem = new GroceryItem()

  @Output()
  add: EventEmitter<GroceryItem> = new EventEmitter()

  addFood() {
    this.add.emit(this.newFoodItem)
    this.newFoodItem = new GroceryItem()
  }

  constructor() {}
  ngOnInit() {}
}

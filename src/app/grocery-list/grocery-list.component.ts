import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroceryItem } from '../grocery-item'

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  @Input()
  foods : GroceryItem[]

  constructor() { }
  ngOnInit() {}

}

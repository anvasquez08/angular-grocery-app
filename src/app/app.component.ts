import { Component } from '@angular/core';

import { GroceryItem } from './grocery-item'
import { GroceryDataServiceService } from './grocery-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-tracker-app';

  constructor(private groceryService: GroceryDataServiceService) {
  }

  get foods() {
    return this.groceryService.getGroceryArray()
  }

  onAddGrocery(values: GroceryItem) {
    return this.groceryService.addGrocery(values)
  }

}

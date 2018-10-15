import { Injectable } from '@angular/core';
import { GroceryItem } from './grocery-item'

@Injectable({
  providedIn: 'root'
})
export class GroceryDataServiceService {

  constructor() { }
  list: GroceryItem[] = [{
    name: 'apples',
    quantity: 1,
    category: 'fruit',
    seasonal: true
  }]

  addGrocery(values: GroceryItem) : GroceryItem[] {
    console.log('inside grocery service')
    this.list.push(values)
    return this.list
  }

  getGroceryArray(): GroceryItem[] {
    return this.list
  }
}

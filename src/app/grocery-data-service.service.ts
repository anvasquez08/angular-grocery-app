import { Injectable } from '@angular/core';
import { GroceryItem } from './grocery-item'

@Injectable({
  providedIn: 'root'
})
export class GroceryDataServiceService {

  constructor() { }
  list: GroceryItem[] = []
  
}

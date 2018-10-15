export class GroceryItem {
  name: string;
  quantity: number = 0;
  category: string; 
  seasonal: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}



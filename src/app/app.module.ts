import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroceryListFormComponent } from './grocery-list-form/grocery-list-form.component';

import { GroceryItem } from './grocery-item'

@NgModule({
  declarations: [
    AppComponent,
    GroceryListFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GroceryItem],
  bootstrap: [AppComponent]
})
export class AppModule { }

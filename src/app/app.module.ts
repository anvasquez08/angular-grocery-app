import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroceryListFormComponent } from './grocery-list-form/grocery-list-form.component';

import { GroceryDataServiceService } from './grocery-data-service.service'

@NgModule({
  declarations: [
    AppComponent,
    GroceryListFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GroceryDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroceryListFormComponent } from './grocery-list-form/grocery-list-form.component';

import { GroceryDataServiceService } from './grocery-data-service.service';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryListItemComponent } from './grocery-list-item/grocery-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    GroceryListFormComponent,
    GroceryListComponent,
    GroceryListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GroceryDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressBookAddEditComponent } from './address-book-add-edit/address-book-add-edit.component';
import { AddressBookEntryComponent } from './address-book-entry/address-book-entry.component';
import { AddressBookDeleteComponent } from './address-book-delete/address-book-delete.component';
import { AppRoutingModule } from "./app-routing.model";
import { InvalidPathComponent } from './invalid-path/invalid-path.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddressBookAddEditComponent,
    AddressBookEntryComponent,
    AddressBookDeleteComponent,
    InvalidPathComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

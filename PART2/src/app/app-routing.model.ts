import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AddressBookComponent } from "./address-book/address-book.component";
import { AddressBookEntryComponent } from "./address-book-entry/address-book-entry.component";
import { AddressBookAddEditComponent } from "./address-book-add-edit/address-book-add-edit.component";
import { InvalidPathComponent } from "./invalid-path/invalid-path.component";
import { AddressBookDeleteComponent } from "./address-book-delete/address-book-delete.component";

const routes:Routes = [
  { path: '',    redirectTo: '/friends', pathMatch: 'full'},
  { path: 'friends',         component: AddressBookComponent ,
    children: [
      { path: 'add',         component: AddressBookAddEditComponent },
      { path: 'details/:id', component: AddressBookEntryComponent},
      { path: 'edit/:id',    component: AddressBookAddEditComponent},
      { path: 'delete/:id',  component: AddressBookDeleteComponent}

    ]
  },
  { path: '**', component: InvalidPathComponent }
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

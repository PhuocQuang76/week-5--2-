import { Component, OnInit } from '@angular/core';
import { Contact } from "../model/contact";
import { AddressProviderService } from "../model/address-provider.service";

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})


export class AddressBookComponent implements OnInit {
  friends: Contact[];
  //newFriends : Contact[];
  constructor( private addressProviderService: AddressProviderService) {

  }

  ngOnInit(): void {
    this.friends = this.addressProviderService.getFriends();
    //this.newFriends = [];
  }

  // onDelete(friend:Contact){
  //   let index = 0;
  //   for(let c of this.friends){
  //     if(c.id == friend.id){
  //       this.friends.splice(index, 1)
  //     }
  //     index++;
  //   }
  //   //this.friends == this.newFriends;
  // }
}

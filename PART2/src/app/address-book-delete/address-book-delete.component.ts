import { Component, OnInit } from '@angular/core';
import {Contact} from "../model/contact";
import {ActivatedRoute, Router} from "@angular/router";
import {AddressProviderService} from "../model/address-provider.service";

@Component({
  selector: 'app-address-book-delete',
  templateUrl: './address-book-delete.component.html',
  styleUrls: ['./address-book-delete.component.css']
})
export class AddressBookDeleteComponent implements OnInit {
  friends: Contact[];
  friend: Contact;
  friendId: number;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private addressProviderService : AddressProviderService) {

  }

  ngOnInit(): void {
    this.friends = this.addressProviderService.getFriends();
    this.friendId = this.route.snapshot.params['id'];
  }


  onCancelDelete(){
    this.router.navigate(['/friends']);
  }

  onDelete(){
    let index = 0;
    for(let c of this.friends){
      if(this.friendId == c.id){
        this.friends.splice(index, 1)
      }
      index++;
    }
    this.router.navigate(['/friends']);
    //this.friends == this.newFriends;
  }

}

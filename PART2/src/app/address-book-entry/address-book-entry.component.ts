import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {AddressProviderService} from "../model/address-provider.service";
import { Contact } from "../model/contact";

@Component({
  selector: 'app-address-book-entry',
  templateUrl: './address-book-entry.component.html',
  styleUrls: ['./address-book-entry.component.css'],

})
export class AddressBookEntryComponent implements OnInit,OnDestroy {
  totalContacts: number;
  nextFriend: number;
  previousFriend: number;
  friend: Contact;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private addressProviderService: AddressProviderService) {
  }

  ngOnInit(){

    this.totalContacts = this.addressProviderService.getFriends().length;
    let friends = this.addressProviderService.getFriends();

    this.sub = this.route.params.subscribe( params => {
      let id:string = params['id'];
      // this.friend = this.addressProviderService.getFriend(+id);
      this.previousFriend = undefined;
      this.nextFriend = undefined;

      for (let i = 0; i < this.totalContacts; i++) {
        if (friends[i].id == +id) {
          this.friend = friends[i];
          console.log('friend', this.friend);
          if (i > 0) this.previousFriend = friends[i - 1].id;
          else this.previousFriend = undefined;
          if (i < this.totalContacts - 1) this.nextFriend = friends[i + 1].id;
          else this.nextFriend = undefined;
          console.log('i', i, 'previousFriend', this.previousFriend, 'friend', this.friend, 'nextriend', this.nextFriend);
          break;
        }
      }
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}

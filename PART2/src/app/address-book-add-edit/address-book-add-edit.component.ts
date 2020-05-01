import { Component, OnInit } from '@angular/core';
import { Contact } from "../model/contact";
import { Router,ActivatedRoute } from '@angular/router'
import {AddressProviderService} from "../model/address-provider.service";


@Component({
  selector: 'app-address-book-add-edit',
  templateUrl: './address-book-add-edit.component.html',
  styleUrls: ['./address-book-add-edit.component.css']
})
export class AddressBookAddEditComponent implements OnInit {
  title:string;
  friends: Contact[];
  friend: Contact;
  totalId:number;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private addressProviderService : AddressProviderService) { }

  ngOnInit(): void {
    this.friends = this.addressProviderService.getFriends();
    this.totalId = this.friends.length;
    let friendId = this.route.snapshot.params['id'];

    if(friendId){
      this.title = 'Edit Friend';
      this.friend = this.addressProviderService.getFriend(friendId);

      // if(!this.friend.id) {
      //   this.router.navigate(['error']);
      // }
    }else{
      this.title = 'Add Friend';
      this.friend = new Contact();

      this.friend.id = this.addressProviderService.getNextId();


    }

  }



  saveFriend(){

    if(this.isChecked()){
      this.addressProviderService.saveFriend(this.friend);
      this.router.navigate(['friends'])
    }

  }


  private isChecked(){
    let c: Contact = this.friend;


    if( c.id &&
        c.name && c.name.length > 0 &&
        c.address && c.address.length > 0 &&
        c.phone && c.phone.length == 10 || c.phone.length == 12)
    {
      if(c.phone.length == 10){
        c.phone = this.addressProviderService.phoneFormat(c.phone);
      }

      return true;
    }else{
      return false;
    }
  }

  // private phoneFormat(phoneNumber:string){
  //
  //     let country =  phoneNumber.slice(0,3);
  //     let city =   phoneNumber.slice(3,6);
  //     let number = phoneNumber.slice(6);
  //     return  country  + '-' + city + '-' + number;
  // }

}

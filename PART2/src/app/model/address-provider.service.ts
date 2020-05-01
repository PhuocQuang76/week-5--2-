import { Injectable } from '@angular/core';
import { Contact } from "./contact";
import { CONTACTS } from "./mock-data";

@Injectable({
  providedIn: 'root'
})
export class AddressProviderService {
  totalId:number = this.getFriends().length +1;

  constructor() { }

  getFriends() : Contact[]{
    return CONTACTS;
  }

  getFriend(id: number) : Contact {
    let friends:Contact[] = this.getFriends();
    let friend:Contact =
      friends.find( f => {
        return (f.id == id);
      });
    return friend;
  }


  saveFriend(friend:Contact): void{
    let friends: Contact[] = this.getFriends();
    let target: Contact = friends.find(c => {
      return (c.phone == friend.phone);
    });
    if(!target){
      friends.push(friend);
    }else{
      Object.assign(target, friend);

    }
  }

  phoneFormat(phoneNumber:string){
    let country =  phoneNumber.slice(0,3);
    let city =   phoneNumber.slice(3,6);
    let number = phoneNumber.slice(6);
    return  country  + '-' + city + '-' + number;

  }

  getNextId(){
    return this.totalId ++;
  }
}

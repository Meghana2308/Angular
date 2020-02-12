import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Contact[];
  constructor() {
    this.contacts=[
      {contactID:101,firstName:"meghana",lastName:"damera",dob:new Date("1997-08-23"),mobileNumber:"8074265067",alternateMobileNumber:"9966174701",mailId:"meghanadamerla2308@gmail.com",organization:"IIHT"},
      {contactID:102,firstName:"sagar",lastName:"damera",dob:new Date("1990-06-11"),mobileNumber:"29951530397",alternateMobileNumber:"29703606830",mailId:"sagar@gmail.com",organization:"maths"},
      {contactID:103,firstName:"srili",lastName:"gaiyatri",dob:new Date("1996-03-05"),mobileNumber:"39951530397",alternateMobileNumber:"39703606830",mailId:"mpu3@gmail.com",organization:"chemical"}
    ];
   }
   getAll():Contact[]{
     return this.contacts;
   }
   get(id:number){
     return this.contacts.find((c)=>(c.contactID==id));
   }
   add(contact:Contact){
     this.contacts.push(contact);
   }
   update(contact:Contact){
    let index=this.contacts.findIndex((c)=>(c.contactID===contact.contactID));
    if(index>-1){
      this.contacts[index]=contact;
    }
   }
   delete(id:number){
     let index=this.contacts.findIndex((contact)=>(contact.contactID===id));
     if(index>-1){
      this.contacts.splice(index,1);
    }
   }
}

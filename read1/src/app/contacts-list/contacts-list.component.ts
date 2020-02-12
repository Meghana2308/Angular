import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts:Contact[];


  constructor(private contServ:ContactService) { }

  ngOnInit() {
    this.contacts=this.contServ.getAll();
  }

  delete(contactId:number){
    if(confirm(`Are you sure of deleting Contact # ${contactId}`)){
      this.contServ.delete(contactId);
    }
  }
}

import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Contact} from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

 private contact:Contact; 
  constructor(
    private contServ:ContactService,
    private routeData:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let contactid=params['id'];
        if(contactid){
          this.contact=this.contServ.get(contactid);
        }
      }
    )
  }

}

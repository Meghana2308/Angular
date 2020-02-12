
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  private contact:Contact;
  private isNew :boolean;
  private dobStr:string;

  constructor(private constServ:ContactService,
    private routeDate :ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.routeDate.params.subscribe(
      (params)=>{
        let contactId = params['cid'];

        if(contactId==undefined){
          this.isNew=true;
          this.contact=new Contact();
          this.dobStr=(new Date()).toISOString().substr(0,10);


        }else{
          this.contact=this.constServ.get(contactId);
          this.isNew=false;
          this.dobStr=this.contact.dob.toISOString().substr(0,10);
        }
      }
    );
    
  }
  dobUpdate(){
    this.contact.dob=new Date(this.dobStr);
  }

  save()
{
  if(this.isNew){
    this.constServ.add(this.contact);
  }else{
    this.constServ.update(this.contact);
  }
  this.router.navigateByUrl("/list");
}
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'list',component:ContactsListComponent},
  {path:'add',component:ContactFormComponent},
  {path:'edit/:cid',component:ContactFormComponent},
  {path:'details/:id',component:ContactDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

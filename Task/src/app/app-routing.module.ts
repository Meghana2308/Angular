import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'list',component:TasksListComponent},
  {path:'add',component:TaskFormComponent},
  {path:'edit/:cid',component:TaskFormComponent},
  {path:'details/:id',component:TaskDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

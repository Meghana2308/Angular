import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  private task:Task;
  private isNew :boolean;
  private dobStr:string;
  constructor(private taskServ:TaskService,
    private routeDate :ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.routeDate.params.subscribe(
      (params)=>{
        let taskId = params['tid'];

        if(taskId==undefined){
          this.isNew=true;
          this.task=new Task();
          this.dobStr=(new Date()).toISOString().substr(0,10);


        }else{
          this.task=this.taskServ.get(taskId);
          this.isNew=false;
          this.dobStr=this.task.dob.toISOString().substr(0,10);
        }
      }
    );
    
  }
  dobUpdate(){
    this.task.dob=new Date(this.dobStr);
  }

  save()
{
  if(this.isNew){
    this.taskServ.add(this.task);
  }else{
    this.taskServ.update(this.task);
  }
  this.router.navigateByUrl("/list");
}
  }



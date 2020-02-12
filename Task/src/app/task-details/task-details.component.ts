import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  private task:Task; 
  constructor(private taskServ:TaskService,
    private routeData:ActivatedRoute,) {
    
   }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let taskid=params['id'];
        if(taskid){
          this.task=this.taskServ.get(taskid);
        }
      }
    );
  }
  }



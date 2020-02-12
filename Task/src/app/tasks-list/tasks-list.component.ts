import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  task:Task[];
  constructor(private taskServ:TaskService) {

   }

  ngOnInit() {
    this.task=this.taskServ.getAll();
  }
  delete(taskId:number){
    if(confirm(`Are you sure of deleting Task # ${taskId}`)){
      this.taskServ.delete(taskId);
    }
  }
}

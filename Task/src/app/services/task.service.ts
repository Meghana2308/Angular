import { Injectable } from '@angular/core';
import { Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[];
  constructor() {
    this.tasks=[
      {taskID:101,firstName:"meghana",lastName:"damera",dob:new Date("1997-08-23"),mobileNumber:"8074265067",alternateMobileNumber:"9966174701",mailId:"meghanadamerla2308@gmail.com",organization:"IIHT"},
      {taskID:102,firstName:"sagar",lastName:"damera",dob:new Date("1990-06-11"),mobileNumber:"29951530397",alternateMobileNumber:"29703606830",mailId:"sagar@gmail.com",organization:"maths"},
      {taskID:103,firstName:"srili",lastName:"gaiyatri",dob:new Date("1996-03-05"),mobileNumber:"39951530397",alternateMobileNumber:"39703606830",mailId:"mpu3@gmail.com",organization:"chemical"}
    ];
   }
   getAll():Task[]{
     return this.tasks;
   }
   get(id:number){
     return this.tasks.find((t)=>(t.taskID==id));
   }
   add(task:Task){
     this.tasks.push(task);
   }
   update(Task:Task){
    let index=this.tasks.findIndex((t)=>(t.taskID===Task.taskID));
    if(index>-1){
      this.tasks[index]=Task;
    }
   }
   delete(id:number){
     let index=this.tasks.findIndex((task)=>(task.taskID===id));
     if(index>-1){
      this.tasks.splice(index,1);
    }
   }
}

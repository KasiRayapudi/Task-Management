import { Injectable } from '@angular/core';
import { TaskModel } from './models/task.model';

@Injectable({
  providedIn: 'root'
})

export class Taskservice {

tasks: TaskModel[] = [

{
taskid:1,
taskname:"Prepare AIML Practical",
subject:"AI",
deadline:"2026-03-20",
status:"Pending"
},

{
taskid:2,
taskname:"Study Compiler Design",
subject:"CD",
deadline:"2026-03-21",
status:"Completed"
}

]

getTasks(){
return this.tasks
}

addTask(task:TaskModel){
this.tasks.push(task)
}

deleteTask(id:number){
this.tasks = this.tasks.filter(t => t.taskid !== id)
}

getTaskById(id:number){
return this.tasks.find(t => t.taskid == id)
}

updateTask(updatedTask:TaskModel){

const index = this.tasks.findIndex(t => t.taskid == updatedTask.taskid)

if(index !== -1){
this.tasks[index] = updatedTask
}

}

}
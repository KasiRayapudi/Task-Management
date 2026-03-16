import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,Router } from '@angular/router';
import { TaskModel } from '../models/task.model';
import { Taskservice } from '../taskservice';

@Component({
selector:'app-taskadd',
standalone:true,
imports:[FormsModule,CommonModule,RouterLink],
templateUrl:'./taskadd.html',
styleUrl:'./taskadd.css'
})

export class Taskadd {

task:TaskModel = new TaskModel()

taskservice = inject(Taskservice)
router = inject(Router)

saveTask(form:any){

if(form.valid){

this.taskservice.addTask(this.task)

alert("Task Saved Successfully")

this.router.navigate(['/tasklist'])

}

}

}
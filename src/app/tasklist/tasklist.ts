import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Taskservice } from '../taskservice';

@Component({
selector:'app-tasklist',
standalone:true,
imports:[CommonModule,RouterLink],
templateUrl:'./tasklist.html',
styleUrl:'./tasklist.css'
})

export class Tasklist {

taskservice = inject(Taskservice)

tasks = this.taskservice.getTasks()

deleteTask(id:number){

if(confirm("Are you sure you want to delete this task?")){

this.taskservice.deleteTask(id)

this.tasks = this.taskservice.getTasks()

}

}

}
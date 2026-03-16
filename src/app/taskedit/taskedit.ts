import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { Taskservice } from '../taskservice';
import { TaskModel } from '../models/task.model';

@Component({
selector:'app-taskedit',
standalone:true,
imports:[FormsModule,CommonModule],
templateUrl:'./taskedit.html',
styleUrl:'./taskedit.css'
})

export class Taskedit implements OnInit {

task:TaskModel = new TaskModel()

taskservice = inject(Taskservice)
route = inject(ActivatedRoute)
router = inject(Router)

ngOnInit(){

const id = Number(this.route.snapshot.paramMap.get('id'))

const data = this.taskservice.getTaskById(id)

if(data){
this.task = {...data}
}

}

updateTask(form:any){

if(form.valid){

this.taskservice.updateTask(this.task)

alert("Task Updated Successfully")

this.router.navigate(['/tasklist'])

}

}

}
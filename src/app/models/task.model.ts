export interface TaskResponse {
  success: boolean;
  tasks: any[];
}

export class TaskModel {

  taskid:number
  taskname:string
  subject:string
  deadline:string
  status:string

  constructor(){

    this.taskid = 0
    this.taskname = ""
    this.subject = ""
    this.deadline = ""
    this.status = ""

  }

}
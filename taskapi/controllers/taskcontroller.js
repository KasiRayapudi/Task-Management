const Task = require("../models/task")

// create task
exports.createTask = async(req,res)=>{

const result = await Task.create(req.body)

res.json({
success:true,
task:result
})

}

// get all tasks
exports.getAllTasks = async(req,res)=>{

const tasks = await Task.find()

res.json({
success:true,
tasks:tasks
})

}

// get task by id
exports.getTaskByID = async(req,res)=>{

const task = await Task.findOne({taskid:req.params.id})

res.json({
success:true,
task:task
})

}

// update task
exports.updateTask = async(req,res)=>{

await Task.updateOne(
{taskid:req.params.id},
{$set:req.body}
)

res.json({
success:true,
message:"Task updated"
})

}

// delete task
exports.deleteTask = async(req,res)=>{

await Task.findOneAndDelete({taskid:req.params.id})

res.json({
success:true,
message:"Task deleted"
})

}
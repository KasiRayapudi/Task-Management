const mongoose = require("mongoose")

const taskschema = new mongoose.Schema({

taskid:{
type:Number,
required:true,
unique:true
},

taskname:{
type:String,
required:true
},

subject:{
type:String,
required:true
},

deadline:{
type:String,
required:true
},

status:{
type:String,
required:true
},

created_on:{
type:Date,
default:new Date()
}

})

module.exports = mongoose.model("task",taskschema)
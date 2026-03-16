const mongoose = require("mongoose")
require("dotenv").config()

exports.dbconnect = ()=>{

mongoose.connect(process.env.dburl)

.then(()=>{
console.log("Database connected")
})

.catch((err)=>{
console.log("Database error")
console.error(err)
})

}
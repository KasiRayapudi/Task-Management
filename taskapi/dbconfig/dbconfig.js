const mongoose = require("mongoose")
require("dotenv").config()

exports.dbconnect = ()=>{

const dbUri = process.env.DBURL || process.env.dburl

if(!dbUri){
console.error("Database URL missing: set DBURL env variable")
return
}

mongoose.connect(dbUri)

.then(()=>{
console.log("Database connected")
})

.catch((err)=>{
console.log("Database error")
console.error(err)
})

}

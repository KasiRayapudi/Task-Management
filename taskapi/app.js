const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

// database
const db = require("./dbconfig/dbconfig")
db.dbconnect()

// middleware
app.use(cors())
app.use(express.json())

// routes
const taskroute = require("./routes/taskroute")

app.use("/api/v1",taskroute)

// server
const port = process.env.port || 3000

app.listen(port, ()=>{
console.log("Server running on port",port)
})
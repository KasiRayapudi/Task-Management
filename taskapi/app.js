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

// basic health/info route
app.get("/", (_req, res) => {
  res.send("Task API is running. Try /api/v1/getalltasks")
})

// server (Render sets PORT in uppercase)
const port = process.env.PORT || process.env.port || 3000

app.listen(port, ()=>{
console.log("Server running on port",port)
})

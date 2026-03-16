const express = require("express")

const router = express.Router()

const {
createTask,
getAllTasks,
getTaskByID,
updateTask,
deleteTask
} = require("../controllers/taskcontroller")

router.post("/createtask",createTask)

router.get("/getalltasks",getAllTasks)

router.get("/gettask/:id",getTaskByID)

router.put("/updtask/:id",updateTask)

router.delete("/deltask/:id",deleteTask)

module.exports = router
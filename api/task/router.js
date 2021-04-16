// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model.js')


router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(x => {
            x.map(task => {
                task.task_completed ? task.task_completed = true : task.task_completed = false
                return task
            })

            res.status(200).json(x)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post("/", (req, res) => {
    Tasks.createTask(req.body)
        .then(task => {
            task.task_completed ? task.task_completed = true : task.task_completed = false
            res.status(201).json(task);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err.message);
        })
})


module.exports = router
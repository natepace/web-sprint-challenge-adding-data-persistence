// build your `Task` model here
const db = require('../../data/dbConfig.js')

function getTasks() {
    return db('tasks as t')
        .select("t.*", "p.project_name", "p.project_description")
        .leftJoin("projects as p", "t.project_id", "p.project_id")
}

function findById(id) {
    return db("tasks as t")
        .select("t.*", "p.project_name", "p.project_description")
        .where("task_id", id)
        .leftJoin("projects as p", "t.project_id", "p.project_id")
        .then(tasks => {
            return tasks[0]
        })
}
function createTask(task) {
    return db("tasks").insert(task)
        .then(ids => {
            return findById(ids[0])
        })
}

module.exports = {
    getTasks,
    findById,
    createTask
}
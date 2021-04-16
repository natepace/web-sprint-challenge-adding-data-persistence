// build your `Project` model here

const db = require('../../data/dbConfig.js')

function getProjects() {
    return db('projects')
}

function findById(id) {
    return db("projects")
        .where("project_id", id)
        .then(data => {
            return data[0]
        })
}

function createProject(project) {
    // const [project_id] = await db('projects').insert(project);
    // return getProjects().where({ project_id }).first()
    return db("projects")
        .insert(project)
        .then(ids => {
            return findById(ids[0])
        })
}


module.exports = {
    getProjects,
    createProject,
    findById,
}
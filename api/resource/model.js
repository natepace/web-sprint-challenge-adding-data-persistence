// build your `Resource` model here
const db = require('../../data/dbConfig.js')

function getResources() {
    return db('resources')
}

function findById(id) {
    return db("resources")
        .where("resource_id", id)
        .then(data => {
            return data[0]
        })
}

function createResource(resource) {
    return db('resources')
        .insert(resource)
        .then(x => {
            return findById(x[0])
        })
}




module.exports = {
    getResources,
    createResource,
    findById,
}